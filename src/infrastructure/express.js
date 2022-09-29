const express = require('express');
const log4js = require('log4js');
const router = require('./router');

const app = express();
const logger = log4js.getLogger('HTTP Server');

const { HTTP_SERVER_PORT } = process.env


app.use(express.json());
app.use(router)

class Server{
    static start(){
        app.listen(HTTP_SERVER_PORT, () => {
            logger.info(`HTTP server listening on port ${HTTP_SERVER_PORT}`);
        });
    
        return app
    }
}

module.exports = Server;