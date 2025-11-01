//                                                          Path Module

const path = require('path');

//Full path of this file 
console.log(__filename);

//Base Name 
console.log(path.basename(__filename));

//Directory Name ---> Gives us the Directory Name
console.log(path.dirname(__filename));

//File Extension ------> For Example .js in this case 
console.log(path.extname(__filename));

//Create path object -----> The object of the path specified with the help of file name
console.log(path.parse(__filename));

/*
Can use .base after the filename to use specific part of the object like : 
    root,
    dir,
    base(name of the file),
    name,
    ext(extension)
 */

//Concatenate paths
console.log(path.join(__dirname,'test','hello.html'));