let isDoingRequest = false
let led1 = 0

function doRequest (data) {
  return new Promise((resolve) => {
    console.log(data)
    fetch('http://localhost:3330/mqtt', {
      referrerPolicy: 'strict-origin-when-cross-origin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      method: 'POST',
      body: data
    }).then(
      res => resolve(res.json())
    )
  })
}

async function sendToServer () {
  const topicField = document.querySelector('#topic')
  const messageField = document.querySelector('#message')

  const message = messageField.value || 'Hello World!'
  const topic = topicField.value || 'teste'

  const data = JSON.stringify({
    topic,
    message: [1, message]
  })

  await doRequest(data)
}

async function callServo () {
  if (isDoingRequest) return
  const messageField = document.querySelector('#servo')

  const message = Number(messageField.value)

  const data = JSON.stringify({
    topic: 'esp8266/0',
    message: [2, message]
  })

  isDoingRequest = true
  await doRequest(data)
  setTimeout(() => { isDoingRequest = false }, 100)
}

async function toggleLed (espId, ledId) {
  led1 = !led1
  const data = JSON.stringify({
    topic: espId,
    message: [1, Number(ledId), Number(led1)]
  })
  await doRequest(data)
}

// window.onkeydown=doRequest

window.onload = function () {}
