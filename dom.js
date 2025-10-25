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


function submit(){
    alert('Form Submitted Successfully');
}