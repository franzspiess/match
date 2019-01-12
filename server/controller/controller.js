"use strict";

const db = require('monk')('localhost/match');
const userData = require('../mocks/users');
const matches = require('../mocks/matches');
const chatMocks = require('../mocks/chats')
const profile = require('../mocks/profile');

const users = db.get('users');
const chats = db.get('chats');

module.exports.setMsg = async (ctx, next) => {
  let info = ctx.request.body;
  let chatID = info.chatID;
  let content = info.msg
  let userID = info.id;
  let author = ctx.params.id;
  let msg = {
    content,
    author,
    timestamp: Date.now()
  }

  console.log(msg, chatID);
  let theLog = await chats.update ({
    _id: chatID}, {$push: { messages: msg }});


  console.log(theLog);



}

module.exports.setMatch = async (ctx, next) => {

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


};

module.exports.getPotentials = async (ctx, next) => {

  let id = ctx.params.id;
  let myUser = await users.findOne({ idid: id });
  console.log(myUser);

  let theList = await users.find({ location: { $near: myUser.location, $maxDistance: 3000 }, skill: myUser.skill });
  console.log(theList);
  let declined = myUser.declined;
  let matches = myUser.matches;
  let newList = theList.filter(user => {
    console.log(user.idid);
    console.log(myUser.declined, myUser.matches);
    console.log(
      !declined.includes(user.idid) || !matches.includes(user.idid));
    return (!declined.includes(user.idid) && !matches.includes(user.idid));
  })
  console.log('string');


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
  // let arr = [];

  // myChats.forEach(el => {

  //   el.id1 === id ? arr.push(el.id2, el.messages) : arr.push(el.id1, el.messsages);

  // });



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

  console.log(newestMatches)




  // console.log(newMatches);
  // console.log(myChats);


  ctx.status = 201;
  // newMatches,
  ctx.body = newestMatches;
};

module.exports.getProfile = async (ctx, next) => {

  let id = ctx.params.id;
  let myUser = await users.findOne({ idid: id })


  ctx.status = 201;
  ctx.body = myUser;

}

module.exports.setProfile = async (ctx, next) => {

  console.log(ctx.request.body);
  let profile = ctx.req.body;
  ctx.status = 201;
  ctx.body = 'received';

}

const setUsers = (arr) => {

  console.log('setting', arr);

  users.insert(arr);
  users.createIndex({ location: "2d" })


}

const setChats = (arr) => {

  console.log('setting', arr);

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

