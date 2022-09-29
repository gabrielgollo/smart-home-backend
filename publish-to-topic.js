
const mqtt = require('mqtt');

async function main() {
    const host = 'broker.emqx.io'
    const port = '1883'
    const clientId = `mqtt_${Math.random().toString(16).slice(3)}`   
    const topic = 'inTopic'

    console.log('Connecting to MQTT broker...')
    const connection = await mqtt.connect({
        host,
        port,
        clientId        
    })

    connection.on('connect', async () => {
        console.log('Connected to MQTT broker!')
        connection.subscribe([topic])

        let i = 1;

        // while (i<100) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        // connection.publish(topic, Buffer.from(`Hello World - ${i}`))
        connection.publish(topic, Buffer.from(`1`))

            // i += 1;
        // }
    })
}

main()