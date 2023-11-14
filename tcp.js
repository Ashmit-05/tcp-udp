const net = require("net")

const server = net.createServer(socket => {
		socket.write("Hi There!");
		socket.on("data", data => {
				console.log(data.toString());
		})
})

server.listen(8080);
