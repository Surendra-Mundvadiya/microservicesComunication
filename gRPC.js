// Microservice 1
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync("./protos/helloworld.proto");
const helloProto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function sayHello(call, callback) {
    callback(null, { message: `Hello ${call.request.name} from Microservice 1!` });
}

const server = new grpc.Server();
server.addService(helloProto.Greeter.service, { sayHello });
server.bind("localhost:50051", grpc.ServerCredentials.createInsecure());
console.log("Microservice 1 listening on port 50051");
server.start();

// Microservice 2
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync("./protos/helloworld.proto");
const helloProto = grpc.loadPackageDefinition(packageDefinition).helloworld;

const client = new helloProto.Greeter("localhost:50051", grpc.credentials.createInsecure());
const name = "World";

client.sayHello({ name }, (error, response) => {
    if (error) {
        console.error(error);
        return;
    }

    console.log(response.message);
});
