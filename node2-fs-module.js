//                                                              fs module

// Required modules
const fs = require('fs');
const path = require('path');

// Creating Folder which is asynchronous 
/* 
        Also we used this path.join(__dirname,'./test') 
        because we wanted to add this filename to our current directory path and,
        whre we have use our base location and concatinated it .
*/
// fs.mkdir(path.join(__dirname,'./test'),{},(err) => { // Takes three parametes: path,options,callback(function) 
//     if(err) throw err;
//     console.log('Folder Created...');
// });

/*


// Write to Files
fs.writeFile(path.join(__dirname,'./test','hello.txt'),
' New File ',
(err) => {
    if(err) throw err;
    console.log('File Written to...');
});

// Append to Files
fs.appendFile(path.join(__dirname,'./test','hello.txt'),
' I love Node.js ',
(err) => {
    if(err) throw err;
    console.log('File Written to...');
});


*/

// // Write to Files and append using Callback 
// fs.writeFile(path.join(__dirname,'./test','hello1.txt'),
// ' Hello from new file ',
// (err) => {
//     if(err) throw err;
//     console.log('File Written to...');

//     // Append to File using Callback
//     fs.appendFile(path.join(__dirname,'./test','hello1.txt'),
//     ' is alive ',
//     (err) => {
//         if(err) throw err;
//         console.log('File Written to using callback...');
//     });
// });

// // Read a File
// fs.readFile(path.join(__dirname,'/test','hello1.txt'),'utf-8',(err,data)=>{
//     if (err) throw err;
//     console.log('File being read : '+data);
// });

//Rename a File
// fs.rename(
//     path.join(__dirname,'/test','hello1.txt'),
//     path.join(__dirname,'/test','helloWorld.txt'),
//     (err) => { 
//     if (err) throw err;
//     console.log('File Renamed Successfully');
// });