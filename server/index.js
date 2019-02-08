"use strict";
const compress = require('koa-compress');
const koa = require('koa');
const cors = require('kcors');
const bodyParser = require('koa-bodyparser');
const app = new koa();
const port = 3000;
const router = require('./router/routes.js')
const io = require('socket.io')()

app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(compress());

const server = app.listen(port, () => console.log(`Server listening at Port ${port}.`));

io.listen(server);
io.on('connection', (socket) => {
  console.log('socket.io connected');
  socket.on('sendmsg', msg => {
    console.log('Message sent', msg);
  })
});