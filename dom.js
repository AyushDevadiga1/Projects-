// alert('THE PAGE STARTS IN : ')
// for(let i=3;i>=0;i--){
//     alert(i)
// }

/*
console.log("hi");
console.log(document);
console.log(document.URL);
console.log(document.all);
console.log(document.forms[0]);
*/
 
//innerText pays attention to the style whereas textContent pays less ( the div example ).
// var h1 = (document.getElementById("headers"));
// console.log(h1);
// h1.textContent = "Bye Bye";
// h1.innerText = "Hello !"
// //h1.innerHTML = '<h2> Inner HTML Changes </h2>'
// //h1.style.backgroundColor = "red";

// var items = document.getElementsByClassName('list-items');
// console.log(items);
// for(let i=0;i<items.length;i++){
//     items[i].textContent='Item no : '+i;
//     items[i].style.color = 'lightgreen';
// }


// var submit = document.querySelector('input[type=submit]');
// submit.value = 'SEND';
// submit.style.backgroundColor = "green";


// var itemslist = document.querySelector('#items');
// itemslist.parentNode.style.backgroundColor = 'lightblue' ;

// var itemslist = document.querySelector('#items');
// itemslist.parentElement.style.backgroundColorolor='white';

// var itemslist = document.querySelector('#items');
// console.log(itemslist.children);

// Also first child , last child , with and without element and also sibling/



// Adding elements by js

// var newDiv = document.createElement('div');
// newDiv.className='div2';
// newDiv.id='div2';
// newDiv.setAttribute('title','hello');
// newDiv.textContent='Nice';
// newDiv.style.backgroundColor='grey';
// newDiv.style.color='black';
// newDiv.style.textAlign='center';
// newDiv.style.fontSize='25px';
// console.log(newDiv);

// var container = document.querySelector('body')
// var h1 = document.querySelector('#headers')
// console.log(container);
// container.insertBefore(newDiv,h1)

var button = document.getElementById('button')
var box = document.getElementById('box');
var inputText = document.querySelector('input[type="text"]');
inputText.addEventListener('keydown',runInputEvent);

function runInputEvent(e){
    console.log(e.target.value);
    inputTextValue = e.target.value;
    document.getElementsByClassName("box").innerHTML = '<h2>'+inputTextValue+'</h2>'
}
// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
button.addEventListener('click',runEvent);


// box.addEventListener('mouseenter',function(){
// console.log('Mouse Entereed');
// });

// box.addEventListener('mouseleave',function(){
// console.log('Mouse Left');
// });

box.addEventListener('mousemove',function(e){
// this.innerHTML = '<h2>MouseX : '+e.offsetX+'</h2> <h2>MouseY : '+e.offsetY+'</h2>';
document.body.style.backgroundColor = `rgb(${e.offsetX%256},${e.offsetY%256},40)`;
});
// function buttonClick(e){
//     var submit_text=document.getElementById('h1text');
//     submit_text.textContent='Hello';
//     console.log(e);
//     console.log(e.clientX);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);
//     console.log(e.target.classList);
// }

function runEvent(e){
    console.log('EVENT TYPE : '+e.type)
}