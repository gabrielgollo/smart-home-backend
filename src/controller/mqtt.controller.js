const mqttService = require('../infrastructure/mqtt');

class MqttController{
    static async publishMessage(data){
        const { message, topic } = data;

        try {
            await mqttService.publish(message, topic);
            return {
                message: 'Message published successfully'
            }
            
        } catch (error) {
            return {
                errorStack: error.message,
                message: 'Error publishing message'
            }
        }


    }
}


module.exports = MqttController;