// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 'hello';
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[1]);
// // document.all[10].textContent = 'hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);
// console.log(document.images);

//console.log(document.getElementById('header-title'));
// var header = document.getElementById('header-title');
// // header.textContent = 'hello';
// // header.innerText = 'bye';

// // header.innerHTML = '<h1> hello </h1>'
// header.style.borderBottom = '4px solid black';
// document.querySelector('.title').style.color = 'green';
// document.querySelector('.title').style.fontWeight = 'bold';

// var items = document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello';
// items[2].style.background = 'green';

// for(let i=0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold';
//     items[i].style.color = 'green';
// }

// var items = document.getElementsByTagName('li');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello';
// items[2].style.background = 'green';

// for(let i=0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold';
//     items[i].style.color = 'green';
// }


// document.querySelector('.list-group-item:nth-child(2)').style.background = 'green';
// document.querySelector('.list-group-item:nth-child(3)').style.display = 'None';

// document.querySelectorAll('.list-group-item')[1].style.color = 'green';

// var items = document.querySelectorAll('.list-group-item');
// for(let i=0; i<items.length; i+=2){
//     items[i].style.background = 'green';
// }

var itemlist = document.querySelector('#items');
console.log(itemlist.parentNode);
console.log(itemlist.parentElement);
console.log(itemlist.childNodes);
console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.background = 'yellow';
console.log(itemlist.firstChild);
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent = 'Hello';
console.log(itemlist.lastChild);
console.log(itemlist.lastElementChild);
console.log(itemlist.nextSibling);
console.log(itemlist.nextElementSibling);
console.log(itemlist.previousSibling);
console.log(itemlist.previousElementSibling);

var newDiv = document.createElement('div');
newDiv.className = 'Hello';
newDiv.id = 'div1';
newDiv.setAttribute('title','hello div');

var newDivText = document.createTextNode('hello world');
newDiv.appendChild(newDivText);

console.log(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);

var newItem = document.createElement('li');
var text = document.createTextNode('Hello world');
newItem.appendChild(text);

var list = document.querySelector('ul#items');

var li_1 = document.querySelectorAll('.list-group-item')[0];

list.insertBefore(newItem, li_1);
