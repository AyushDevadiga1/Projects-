//                                                      url module

// required modules
const url = require('url');

const myURL = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized URL
console.log(myURL.href);
console.log(myURL.toString());

// Host (root domain) has ports.
console.log(myURL.host);

// Hostname (root domain)
console.log(myURL.hostname);

// pathname (the actual path / file)
console.log(myURL.pathname);

// serialized query (query parameters / everything after the question mark in the object)
console.log(myURL.search);

//Params object (Just simple object of the search we got above (id,status))
console.log(myURL.searchParams);

// add parameters
myURL.searchParams.append('author' , 'tyler');
console.log(myURL.searchParams);

// Loop through parameters using for each
myURL.searchParams.forEach((value,name)=>{
    console.log(`${name} : ${value}`);
});