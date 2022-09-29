const router = require('express').Router();

const mqttRouter = require('../routers/mqtt.router');

router.use('/mqtt', mqttRouter);


module.exports = router;