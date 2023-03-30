**Microservice 1**
`const amqp = require('amqplib');

amqp.connect('amqp://localhost')
    .then(connection => {
        connection.createChannel()
            .then(channel => {
                const queue = 'hello';
                const message = 'Hello from Microservice 1!';

                channel.assertQueue(queue, { durable: false });
                channel.sendToQueue(queue, Buffer.from(message));

                console.log(`Microservice 1 sent "${message}"`);
            })
            .catch(error => {
                console.log(error);
            });
    })
    .catch(error => {
        console.log(error);
    });`

**Microservice 2**
`const amqp = require('amqplib');

amqp.connect('amqp://localhost')
    .then(connection => {
        connection.createChannel()
            .then(channel => {
                const queue = 'hello';
                channel.assertQueue(queue, { durable: false });
                console.log(`Microservice 2 waiting for messages in "${queue}"`);

                channel.consume(queue, message => {
                    console.log(`Microservice 2 received "${message.content.toString()}"`);
                    }, { noAck: true });
            })
            .catch(error => {
                console.log(error);
            });
    })
    .catch(error => {
        console.log(error);
    });`
