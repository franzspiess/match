"use strict";

const db = require('monk')('localhost/match');
const userData = require('../mocks/users');
const matches = require('../mocks/matches');
const chatMocks = require('../mocks/chats')
const profile = require('../mocks/profile');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const uuidv4 = require('uuid/v4');






const users = db.get('users');
const chats = db.get('chats');


// let hash = new Promise((resolve) => {
//   bcrypt.hash('test', saltRounds, (err, hash) => {
//     if (err) console.log(error);
//     console.log(hash);
//   }

//   )}

// )

module.exports.create = async (ctx, next) => {

  let user = ctx.request.body;
  let dbUser = await users.findOne({ email: user.email });

  if (dbUser) ctx.status = 401;

  else {
    let hash = new Promise((resolve) => {
      bcrypt.hash(user.password, saltRounds, (err, hash) => {
        if (err) console.log(error);
        resolve(hash);
      })
    });
    let pw = await hash;
    let token = uuidv4();

    let thisUser = {
      idid: '',
      email: user.email,
      password: pw,
      token,
      first: user.first,
      last: user.last,
      skill: '3',
      age: user.age,
      img: user.img,
      located: [2.154007, 41.390205],
      distance: 3000,
      matches: [],
      declined: [],
      flag: [],
      sport: user.sport,
      description: user.description
    }


    let inserted = await users.insert(thisUser)
    console.log('Inserted to DB', inserted);

    ctx.status = 201;
    ctx.body = inserted;
  }
};




module.exports.login = async (ctx, next) => {
  if (ctx.request.headers.authorization) {
    let userData = ctx.request.headers.authorization.slice(6);
    let decode = new Buffer(userData, 'base64');
    var decoded = decode.toString();
    decoded = decoded.split(':');
    let dbUser = await users.findOne({ email: decoded[0] });
    console.log(dbUser)
    if (!dbUser || dbUser === null) { ctx.status = 404; ctx.body = 'User not found.' }
    let res = new Promise(resolve => bcrypt.compare(decoded[1], dbUser.password, (err, res) => { if (err) reject(err); else resolve(res) }
    ));
    if (await res) {
      dbUser.password = '';
      ctx.status = 201;
      // ctx.headers.authorization = dbUser.token;
      // dbUser.token = '';
      console.log('Logged in', dbUser)
      ctx.body = dbUser;


    }
    else {
      ctx.status = 401;
      ctx.body = 'Username & Password do not match.'
    }


  }
  else { ctx.status = 404; ctx.body = 'User not found.' }


  // let dbUser = await User.findOne({ username: decoded[0] });


};

module.exports.setMsg = async (ctx, next) => {
  let info = ctx.request.body;
  let chatID = info.chatID;
  let content = info.msg
  let author = ctx.params.id;
  let msg = {
    content,
    author,
    timestamp: Date.now()
  }

  console.log('Message to save: msg, chatID');
  let theLog = await chats.update({
    _id: chatID
  }, { $push: { messages: msg } });

//FIX INSERT IF CHAT DOESNT EXIST YET

  // if (theLog.n !== 1) {
  //     let chat:
  // }
}

module.exports.setMatch = async (ctx, next) => {

  console.log('incoming',ctx.params.id);
  console.log(ctx.request.body)
  let myID = ctx.params.id;
  let matchID = ctx.request.body.idid;
  let done = await users.update({ idid: myID }, { $push: { matches: matchID } });
  console.log(done);
  done = await users.update({ idid: matchID }, { $push: { matches: myID } });
  console.log(done);

  ctx.status = 201;
  ctx.body = { key: 'fetched' }


};

module.exports.setDecline = async (ctx, next) => {

  let myID = ctx.params.id;
  let matchID = ctx.request.body.idid;
  console.log(await users.update({ idid: myID }, { $push: { declines: matchID } }));
  console.log(await users.update({ idid: matchID }, { $push: { declines: myID } }));
  ctx.status = 201;
  ctx.body = { key: 'fetched' }


};

module.exports.getPotentials = async (ctx, next) => {

  let id = ctx.params.id;
  let myUser = await users.findOne({ idid: id });
  let theList = await users.find({$and:[{located: { $near: myUser.located, $maxDistance:3000 }, skill: myUser.skill, sport: myUser.sport }]});
  ;

  let declined = myUser.declined;
  let matches = myUser.matches;
  let newList = theList.filter(user => {
    return (!declined.includes(user.idid) && !matches.includes(user.idid));
  })


  ctx.status = 201;
  ctx.body = newList;
};

module.exports.getMatches = async (ctx, next) => {

  let id = ctx.params.id;
  let myUser = await users.findOne({ idid: id })
  let matches = await users.find({ matches: id });
  let myMatches = myUser.matches;

  let myChats = await chats.find({
    $or:
      [{ id1: id }, { id2: id }]
  });

  let newMatches = matches.filter(match => {


    return myMatches.includes(match.idid);
  });


  let newestMatches = newMatches.map(match => {
    myChats.forEach(chat => {

      if (chat.id1 === match.idid || chat.id2 === match.idid) {
        match.messages = chat.messages;
        match.chatID = chat._id;
      }

    })

    if (!match.messages) match.messages = [];

    return match;
  });

  ctx.status = 201;
  ctx.body = newestMatches;
};

module.exports.getProfile = async (ctx, next) => {



  let id = ctx.params.id;
  let myUser = await users.findOne({ idid: id })


  ctx.status = 201;
  ctx.body = myUser;

}

module.exports.setProfile = async (ctx, next) => {


  let profile = ctx.request.body;
  console.log('User Update Log', await users.update({idid : profile.idid},{profile}))
  ctx.status = 201;
  ctx.body = 'received';

}



const setUsers = (arr) => {


  users.insert(arr);
  users.createIndex({ located: "2d" })


}

const setChats = (arr) => {

  chats.insert(arr);

}

// setUsers(userData);

// setChats(chatMocks);

  // let theLog = await chats.update({
  //   $and: [
  //     { $or: [{ id1: author }, { id2: userID }] },
  //     { $or: [{ id1: userID }, { id2: author }] }]
  // },
  //   { $push: { messages: msg } });

  // let id = uuidv4();
  // console.log(id);
  // let theList = await users.aggregate([
  //   {
  //     $geoNear:{
  //       near:{ type:"Point", coordinates: myUser.location},
  //       distanceField: "dist.calculated",
  //      maxDistance: 2,
  //      spherical: true
  //     }},
  //   { $sample: {size:3}},
  //   {$match: {  skill: myUser.skill }}

  //   ]);



