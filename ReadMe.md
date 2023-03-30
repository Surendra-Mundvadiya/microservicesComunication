### These are five method to make connection between two or more micro services

1. RESTful APIs: Each microservice can expose a RESTful API that other microservices can use to communicate with it. RESTful APIs use HTTP protocols and JSON format to transfer data.

2. Message Queues: Microservices can use message queues such as RabbitMQ, Kafka, or ActiveMQ to communicate with each other asynchronously. Each microservice can publish messages to the queue, and other microservices can subscribe to receive those messages.

3. gRPC: gRPC is a high-performance open-source remote procedure call (RPC) framework that can be used for inter-service communication. It uses protocol buffers as the data format and supports streaming.

4. WebSockets: WebSockets provide a persistent, bi-directional communication channel between a client and a server. Microservices can use WebSockets to communicate with each other in real-time.

5. Event-Driven Architecture: Microservices can use an event-driven architecture, where each microservice publishes events when specific actions occur. Other microservices can subscribe to these events and take action accordingly.