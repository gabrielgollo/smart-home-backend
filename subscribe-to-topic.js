
const mqtt = require('mqtt');

async function main(params) {
    const host = 'broker.emqx.io'
    const port = '1883'
    const clientId = `mqttx_4a9e4351`   
    const topic = 'esp8266'
    
    console.log('Connecting to MQTT broker...')
    const connection = await mqtt.connect({
        host,
        port,
        clientId        
    })


    connection.on('connect', () => {
        console.log('Connected to MQTT broker')
        connection.subscribe([topic])

        connection.on('message', (topic, buffer) => {
            console.log(topic, buffer.toString())

        })
    })
}

main()