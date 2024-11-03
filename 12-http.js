const http=require('http');
const port=5000;
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Welcome to our Homepage');
    }
    else if(req.url==='/about'){
        res.write('Here is our short history');
    }
    else{
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the  page you're looking for</p>
            <a href="/">back home</a>
            `);
    }
    res.end();
   
});

server.listen(port)