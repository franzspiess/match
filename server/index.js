"use strict";
const compress = require('koa-compress');
const koa = require('koa');
const cors = require('kcors');
const bodyParser = require('koa-bodyparser');
const app = new koa();
const port = 3000;
const router = require('./routes.js')

app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(compress());

  app.listen(port, () => console.log(`Server listening at Port ${port}.`));
