var http = require("http");

function onRequest(request, response) {
    console.log("Request received");
    console.log(request);
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello from server");
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started");
