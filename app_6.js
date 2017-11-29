var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  
if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body style="background-color:blue;"><p>This is home Page.</p></body><table><tr><th> head 1</th><th> head 2</th></tr></table></html>');
        res.end();
    
}



}).listen(8080); //the server object listens on port 8080