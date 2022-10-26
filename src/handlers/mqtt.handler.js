const MqttController = require('../controller/mqtt.controller')

class MqttHandler {
  /**
     * @api
     * @path /
     * @method get
     * @function defaultGet
     * @description That's the default '/' route using method get
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     * @param {import("express").NextFunction} next
     */
  static defaultGet (req, res) {
    res.sendFile('index.html', { root: __dirname + '/../public' })
  }

  /**
     * @api
     * @path /
     * @method post
     * @function defaultPost
     * @description That's the default '/' route using method get
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     * @param {import("express").NextFunction} next
     */
  static async defaultPost (req, res) {
    console.log(req.body)
    const response = await MqttController.publishMessage(req.body)

    res.status(200).json(response)
  }
}

module.exports = MqttHandler
