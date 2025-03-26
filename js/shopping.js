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
// function createListItem(item){
//   const li = document.createElement("li");
//   li.innerHTML = `${item}
//   <button class ="remove-item btn-link text-red">
//   <i class ="fa-solid fa-xmark"></i></button>
//   `;

// document.querySelector(".items").appendChild(li);
// }
// createListItem("egg");


// // create item
// function createNewItem(item){
//   // step 1 : create element
//   const li = document.createElement("li");
//   //step 2: create next node
//   //step 3: append text node into element
//   li.appendChild(document.createTextNode(item));
//   //step 4: create button element
//   const button = document.createElement("button");
//   button.className = "remove-item btn-link text-red";
//   const icon = document.createElement("i");
//   icon.className = "fa-solid fa-xmark";
//   //step 5: build component one by one
//   button.appendChild(icon);
//   li.appendChild(button);
//   document.querySelector(".items").appendChild(li);

// }
// createNewItem("cherry");

// createNewItem("cake");
// createNewItem("soda");

// function create3Item(item){
//   const li = document.createElement("li");
// li.appendChild(document.createTextNode(item));
// const button = document.createElement("button");
// button.className = "remove-item btn-link text-red";
// const icon = document.createElement("i");
// icon.className ="fa-solid fa-xmark"
// button.appendChild(icon);
// li.appendChild(button);
// document.querySelector(".items").appendChild(li);
// }
// create3Item("beer");

// function createItem(item){
//   const li = document.createElement("li")
// }

// function onCLick(e){
//   console.log(e.pageY);

// }


// EventListener 24Mar2025 14:18//
// const clearBtn = document.querySelector("#clear");
// function onClear() {
//    const itemList = document.querySelector("ul");
//    const items = itemList.querySelectorAll("li");
   //Method 1 forEach//
   // item.forEach((item) => item.remove());

   //Method 2 while//
//    while (itemList.firstChild) {
//       itemList.removeChild(itemList.firstChild);
//       }  
// }

// clearBtn.addEventListener("click", onClear);
// Remove event listerner//
// setTimeout(() => {
// clearBtn.removeEventListener("click", onClear);}, 5000);
// Set Autoclick //
// setTimeout(() =>clearBtn.click(), 3000);

// const logo = document.querySelector("img");
// const onClick = () => console.log("click event");
// const onDoubleClick = () => {
//    if (document.body.style.backgroundColor !== "purple") {
//       document.body.style.backgroundColor = "purple";
//       document.body.style.color = "white";
//    } else {
//       document.body.style.backgroundColor = "white";
//       document.body.style.color = "black";
//    }
// };
// logo.addEventListener("click", onClick);
// logo.addEventListener("dblclick", onDoubleClick);

// const onRightClick = () => console.log("right click");
// logo.addEventListener("contextmenu", onRightClick);

// const onMouseDown = () => console.log("mouse down");
// logo.addEventListener("mousedown", onMouseDown);

// const onMouseUp = () => console.log("mouse up");
// logo.addEventListener("mouseup", onMouseUp);

// const onMouseEnter = () => console.log("mouse enter");
// logo.addEventListener("mouseenter", onMouseEnter);

// const onMouseWheel = () => console.log("mouse wheel");
// logo.addEventListener("wheel", onMouseWheel);

// const onDragStart = () => console.log("drag start");
// logo.addEventListener("dragstart", onDragStart);

// const onDragEnd = () => console.log("drag end");
// logo.addEventListener("dragend", onDragEnd);
//  console.log("Yes");

 //event obj//
//  logo.addEventListener("click", e => {
//    console.log(e);
//    console.log(e.target); //Current target//
// });
//Add function on <img> for event obj//
// function onClick(e) {
//    e.target.style.padding = "20px";
//    e.target.style.borderColor = "red";
//    console.log(e.pageX); //x-axis position//
//    console.log(e.pageY); //y-axis position//
//  }
// logo.addEventListener("click", onClick);


// // function onClick 24 Mar 2025//
// function onClick(e) {
// e.target.style.padding = e.target.style.padding !=="0px"
// ? "0px":"30px";
//    e.target.style.backgroundColor = "red";
//    console.log(e.pageX); //x-axis position//
//    console.log(e.pageY); //y-axis position//
//  }
// logo.addEventListener("click", onClick);


// // keyboard event
// // A.key press
// const itemInput = document.querySelector("#item-input");
// const onKeyPress = (e) => {
//   console.log("keypress");
// };
// //itemInput.addEventListener("keypress", onKeyPress);


// //B. key up
// const onKeyUp = (e) =>{
//   console.log("keyup");
// };
// //itemInput.addEventListener("keyup", onKeyUp);

// //C. key down
//  const onKeyDown =(e) => {   
// //   if(e.key === "Enter"){
// //     alert("you pressed enter");
// //   }
//    if(e.keycode === "13"){
//     alert("you pressed enter");
// }

// if(e.code === "Digit1"){
//   console.log("you pressed 1");
// }

// if(e,repeat){
//   console.log("you are holding key : " + e.key);
// }

// console.log("Shift : " + e.shiftKey);
// console.log("Control : " + e.ctrlKey);
// console.log("Alt : " + e.altKey);
// if (e.ctrlKey && e.key == "K"){
//   alert("you pressed ctrl + K");
// }

//  };
//itemInput.addEventListener("keydown", onKeyDown);

//input
itemInput = document.getElementById("item-input");
priorityInput = document.getElementById("priority-input");
checkbox = document.getElementById("checkbox");
heading = document.querySelector("h1");

function onInput(e){
  heading.textContent = e.target.value;
}
itemInput.addEventListener("input", onInput);

//check box
function onChecked(e) {
// const isChecked = e.target.checked;  <---- long 
// heading.textContent = isChecked? "Checked" : "Not Checked"
heading.textContent = e.target.checked? "Checked" : "Not Checked" //<----short
}
checkbox.addEventListener("input", onChecked);


//function on focus
function onFocus(){
  console.log("input box is focused");
  itemInput.style.outlineStyle = "solid";
  itemInput.style.outlineColor= "red";
  itemInput.style.outlinewidth= "2px";

}
itemInput.addEventListener("focus", onFocus);


//function on blur
function onBlur(){
  console.log("input is not focused");
  itemInput.style.outlineStyle = "none";
}

itemInput.addEventListener("blur", onBlur);

priorityInput.addEventListener("change", onInput);