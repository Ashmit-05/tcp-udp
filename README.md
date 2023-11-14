# Understanding TCP and UDP in Node.js

## Overview

This documentation explains the difference between TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) and provides a detailed breakdown of the Node.js code you provided for creating a TCP server and a UDP server.

## TCP (Transmission Control Protocol)
TCP is a connection-oriented protocol that provides reliable, ordered, and error-checked delivery of data between applications. It establishes a connection before transferring data and ensures that all data is received in the correct order. TCP is suitable for applications where data integrity and order are crucial, such as file transfers, email, and web browsing.

## UDP (User Datagram Protocol)
UDP is a connectionless protocol that does not establish a connection before sending data. It is a simple, lightweight protocol that focuses on delivering data as quickly as possible without guarantees of reliability or order. UDP is suitable for applications where low latency is more critical than guaranteed delivery, such as real-time communication, streaming, and online gaming.

## tcp.js
This Node.js script creates a TCP server using the net module. The server sends a greeting message ("Hi There!") to clients upon connection and logs any data received from clients. The server is bound to port 8080.

To run it, you must have telnet installed on your system

Run this command : 
```telnet 127.0.0.1 8080```

After this, you have established the connection. Now whatever you type back will reflect in the console.
Note that if you close the server, it says connection lost. Therefore, TCP is stateful

## udp.js
This Node.js script creates a UDP server using the dgram module. The server listens for messages and logs the received message along with the sender's IP address and port. The UDP server is bound to port 8081.

To run it, you must have netcat(nc) installed on your system

Run this command : 
```echo hello | nc -w1 -u 127.0.0.1 8081```

After this, even if you close the server, you can restart it and start sending out packets again. Therefore, UDP is stateless

