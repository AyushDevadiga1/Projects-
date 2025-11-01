const fs = require('fs');
const os = require('os');
const http = require('http');
const path = require('path');

const server = http.createServer((req,res)=>{
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname,'node10-public','index.html'),(err,content) =>{
    //         if (err) throw err;
    //         res.writeHead(200,{"content-type":"text/html"});
    //         res.end(content);
    //     }
    //     );
    // }

    // if(req.url === '/api/users'){
    //     const users = [
    //         { name: 'Tyler' , age:25 },
    //         { name: 'Durden' , age:26 }
    //     ];
    //     res.writeHead(200,{ "content-type":"application/json"});
    //     res.end(JSON.stringify(users));
    // }

    //Build File path
    //Here we load index.html by default but if the user gives other file we will load it using ternary operation
    let filePath = path.join(
        __dirname,'node10-public',req.url === '/'
        ? 'index.html' : req.url
    );

    //Take the extension of the file which was explicitly given by the user
    let extname = path.extname(filePath)

    //Initial Content type just to instaniate and then we will check it by switch case
    let contentType = 'text/html';

    //Switch case to find the correct content type with the help of the file extension
    switch(extname){
        case '.js':
            contentType='text/javascript'
            break;

        case '.json':
            contentType='application/json'
            break;

        case '.css':
            contentType='text/css'
            break;

        case '.png':
            contentType='image/png'
            break;

        case '.jpg':
            contentType='image/jpg'
            break;
    }  

    // Read File 
    fs.readFile(filePath,(err,content) =>{
        if(err) {
            //What to do if page not found
            if(err.code='ENOENT'){
                fs.readFile(path.join(__dirname,'node10-public','404.html'),(err,content)=>{
                    res.writeHead(200,{'contentType':'text/html'});
                    res.end(content,'utf-8');
                })
            } else {
            //Some other error 
                res.writeHead(500);
                res.end(`Server Error :${err.code}`);
            } 
        } else { 
            //Some other error 
                res.writeHead(200,{"Content-type":"text/html"});
                res.end(content,'utf-8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT,()=>{
    console.log('Server running on port : '+PORT);
});