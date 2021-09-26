'use strict';

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const logger = require('koa-logger');

const globalError = require('./middlewares/error-handlers');
const middleFunctions = require('./middlewares/middle-function');
const authentication = require('./middlewares/authentication');

const { publicRouter } = require('./routes');

const { port } = require('./config');
const connectDb = require('./utils/db.util');

async function start() {
  const app = new Koa();

  app
    .use(globalError())
    .use(middleFunctions())
    .use(authentication())
    .use(bodyParser())
    .use(cors())
    .use(logger())
    .use(publicRouter.middleware())
    .use((ctx) => {
      ctx.status = 404;
      ctx.body = {
        success: false,
        message: `Resource not found`,
      };
    });

  // Init connection to DB then listen on port
  connectDb();
  app.listen(port || 3000, () => {
    console.log(`Server listening on port ${port}...`);
  });

  if (process.env.CI_MODE === 'true') {
    console.log('Application runing on gitlab CI Mode. Auto Exit with code 0 after 5 seconds!');
    setTimeout(() => {
      process.exit(0);
    }, 5000);
  }
}

start();
