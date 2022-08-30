

const http = require('http')

const port = process.env.PORT || 8000

const server = http.createServer((req, res) => {

    res.statusCode = 200
    res.setHeader('content-type', 'text/HTML');
    console.log('Server is running on: ', port)
    console.log('res: ', res)
    console.log('req: ', req)

    if(req.url == '/'){
    res.end('<h1>Learning backend with NodeJS</h1> <p>Will be Backend Developer Soon</p>');
    }
    else if(req.url == '/about'){
        res.end('<h1>About Digital Creation</h1> <p>Happines = reality - expectation</p>');
    }
    else{
        res.statusCode = 404 
        res.end('<h1>Page Not found</h1> <p>We are having problem</p>');
    }

});

server.listen(port, () =>{
console.log('server is listening on:', port);
});