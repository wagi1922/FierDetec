const mqtt = require('mqtt');

const url = 'mqtt://broker.emqx.io:1883/mqtt';

const options = {
  clean: true,
  connectTimeout: 4000,
  clientId: 'groot_2',
};

var client = mqtt.connect(url, options);

// setup the callbacks
client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    // called each time a message is received
    console.log('Received message:', topic, message.toString());
});

// subscribe to topic 'mobilegroot/data'
client.subscribe('mobilegroot/data');
