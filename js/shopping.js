//const { button } = require("framer-motion/client");

// const { p } = require("framer-motion/client");

// let output;
// output = document.all;
// console.log(output);

// console.log(output.length);

// output = document.documentElement;
// head = document.head;
// console.log(head);
// console.log(head.children);
// console.log(document.links);
// console.log(document.forms);
// console.log(document.images);

// document.links[0].href= "http://www.facebook.com";
// document.links[0].textContent = "Facebook";
// console.log(document.getElementById("item-input"));
// document.getElementById("item-input").className = "btn";
// document.getElementById("item-input").required="true";

//  h1= document.getElementById("h1"); // get Element by ID, HTML elements，搵ID ONLy,  HTML collection
//  h1.textContent = "hello again";
//  console.log("h1");
//  h1.innerHTML +='<p>  <i class="fa-solid fa-xmark"></i> </p>';

//  h1.style.color = "red";
//  h1.style.padding = "20px";

//  h1 = document.querySelector("button"); // select element
//  h1 = document.querySelector("img"); //select element
//  console.log(h1);

//  h1=document.querySelector(".form-control"); //select class
//  h1=document.querySelector('.button[type="submit"'); // select attribute
//  h1 = document.querySelector("li:nth-child(2)"); //pseudo element, 搵第二個, only for list, 因為佢地group埋先搵到
//  console.log(h1);

//  list = document.querySelector("ul"); 
//  //console.log(list);
//  first_li = list.querySelector("li");
//  console.log(first_li);
 

 
// document.querySelectorAll = select所有html 嘅
// document.querySelector = select 第一粒搵到嘅

 // 當佢係CSS query, 搵第一個中嘅selector, node list
 // 可以搵所有嘢
 // 如搵class  ＝class,  如搵ID ＝ #id


//!.querySelector()    .childNodes = nodeslist
//!.getElementById()    .childern = HTML collection

// h1 = document.querySelector("li:nth-child(2)");
// list = document.querySelector("ul");
// first_li = list.querySelector("li:nth-child(3)").childNodes; // nodeslist -> 有晒comment, white space, 
// second_li = list.querySelector("li:nth-child(2)").children; // HTML collection -> 只出 select element
// console.log(first_li);
// console.log(second_li);

// multiple item selectuon
// const listItems = document.querySelectorAll(".item");
// console.log(listItems[1].innerText);


// listItems[1].style.color = "red";
// listItems.forEach((item, index)=>{
//   item.style.color="red";
//   if(index==1){
//     item.remove();
//   }
//   if(index == 0){
//     item.innerText = "Oats";
//     item.innerHTML = `Oats <button class="remove-item btn-link text-red">
//   <i class="fa-solid fa-xmark"></i> 
// </button>`;
// }
// });


 // get element by class name
// const item2 = document.getElementsByClassName("item");
// console.log (item2);
// const item3 = document.getElementsByTagName("li");
// console.log(item3);


// const item3List = Array.from(item3);
// console.log(item3List);

// item3List.forEach((item)=> {console.log(item.innerText)

// });

// const parent = document.querySelector(".container");
// console.log(parent.children);
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);
// console.log(parent.firstElementChild.nextElementSibling.parentElement);

// const parent2 = document.querySelector(".container");
// console.log(parent2.childNodes);
// child = parent2.childNodes;
// console.log(child[0].nodeName);
// console.log(child[0].textContent);
// console.log(child[1].textContent);
// console.log(child[1].outerHTML);
// console.log(parent2.firstChild.nextSibling.parentNode);
//console.log(parent2.lastChild.previousSibling.parentElement);

//create element
// const div = document.createElement("div");
// div.className ="my-element";
// div.setAttribute("title", "My Element");
// div.id = "my-element"
// div.innerText = "Hello World";

//create node
// const text = document.createTextNode("hello");
// div.appendChild(text);
// document.body.appendChild(div);
//console.log(document.body);

// create item old way
function createListItem(item){
  const li = document.createElement("li");
  li.innerHTML = `${item}
  <button class ="remove-item btn-link text-red">
  <i class ="fa-solid fa-xmark"></i></button>
  `;

document.querySelector(".items").appendChild(li);
}
createListItem("egg");


// create item
function createNewItem(item){
  // step 1 : create element
  const li = document.createElement("li");
  //step 2: create next node
  //step 3: append text node into element
  li.appendChild(document.createTextNode(item));
  //step 4: create button element
  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";
  //step 5: build component one by one
  button.appendChild(icon);
  li.appendChild(button);
  document.querySelector(".items").appendChild(li);

}
createNewItem("cherry");

createNewItem("cake");
createNewItem("soda");

function create3Item(item){
  const li = document.createElement("li");
li.appendChild(document.createTextNode(item));
const button = document.createElement("button");
button.className = "remove-item btn-link text-red";
const icon = document.createElement("i");
icon.className ="fa-solid fa-xmark"
button.appendChild(icon);
li.appendChild(button);
document.querySelector(".items").appendChild(li);
}
create3Item("beer");