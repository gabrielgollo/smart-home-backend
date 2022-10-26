const mqttService = require('../infrastructure/mqtt')

class MqttController {
  static async publishMessage (data) {
    const { message, topic } = data

    try {
      await mqttService.publish(message, topic)
      return {
        message: 'Message published successfully',
        status: 200
      }
    } catch (error) {
      return {
        errorStack: error.message,
        message: 'Error publishing message',
        status: 500
      }
    }
  }
}

module.exports = MqttController
