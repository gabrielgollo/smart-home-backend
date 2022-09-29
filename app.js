require('dotenv').config({ path: './.env' });
const log4js = require('log4js');
log4js.configure(require('./src/config/log4js.json'))

const server = require('./src/infrastructure/express');
server.start();