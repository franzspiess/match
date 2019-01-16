"use strict";
const compress = require('koa-compress');
const koa = require('koa');
const cors = require('kcors');
const bodyParser = require('koa-bodyparser');
const app = new koa();
const port = 3000;
const portIO = 8000;
const router = require('./routes.js')
const io = require('socket.io')()

app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(compress());


const server = app.listen(port, () => console.log(`Server listening at Port ${port}.`));

io.listen(server);


io.on('connection', (socket) => {

  console.log('YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYIncoming', socket);
  socket.on('sendmsg', msg => {
    console.log(msg);

  })

});