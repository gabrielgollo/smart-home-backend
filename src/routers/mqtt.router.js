const router = require('express').Router();
const handler = require('../handlers/mqtt.handler');
const { mountExpressRoute, convertJsonDocToRoutesDescriptor } = require('../util/convert-jsdoc-to-routes-descriptor.js');

const routerDescriptor = convertJsonDocToRoutesDescriptor(handler)
mountExpressRoute({routerDescriptor, router, handler})

module.exports = router;