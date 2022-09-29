const mqtt = require('mqtt')

const { MQTT_HOST, MQTT_PORT, MQTT_CLIENT_ID } = process.env

class MqttServer {
    constructor() {
        this.host = MQTT_HOST
        this.port = MQTT_PORT
        this.clientId = `${MQTT_CLIENT_ID}_${Math.random().toString(16).slice(3)}`
        this.topic = 'inTopic'
        this.connection = null
    }

    async connect() {
        this.connection = await mqtt.connect({
            host: this.host,
            port: this.port,
            clientId: this.clientId
        })

        this.connection.on('connect', () => {
            console.log('Connected to MQTT broker!')
            this.connection.subscribe([this.topic])
        })
    }

    async getOrCreateConnection() {
        if (!this.connection) {
            await this.connect()
        }
        return this.connection
    }

    async publish(message, topic) {
        const connection = await this.getOrCreateConnection()
        connection.publish(topic, Buffer.from(message))
    }

    subscribe(callback) {
        this.connection.on('message', (topic, buffer) => {
            callback(buffer.toString())
        })
    }
}

module.exports = new MqttServer()