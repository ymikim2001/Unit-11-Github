var http = require("http");

	http.createServer(function (request, response){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Hello World, my name is Young-mi Kim');
	}).listen(8001);

	