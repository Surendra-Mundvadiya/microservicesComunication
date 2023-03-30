**Microservice 1**
`const EventEmitter = require('events');`
`const eventEmitter = new EventEmitter();`

`eventEmitter.on('hello', name => {`
`   console.log(`Hello ${name} from Microservice 1!`);`
`});`

`setTimeout(() => {`
`    eventEmitter.emit('hello', 'World');`
`}, 5000);`

**Microservice 2**
`const EventEmitter = require('events');`
`const eventEmitter = new EventEmitter();`

`eventEmitter.on('hello', name => {`
`    console.log(`Hello ${name} from Microservice 2!`);`
`});`

`setTimeout(() => {`
`    eventEmitter.emit('hello', 'World');`
`}, 10000);`
