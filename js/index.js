console.log(window);
console.log(document);
console.log(document.body);
console.log(document.body.innerHTML); //show the stuff inside the body
console.log(document.querySelector("h1").innerHTML); // show the text in h1

console.log(document.getElementById('h1').innerText);
document.getElementById('h1').style.color = "red";
document.getElementById('h1').innerText = "hi, world";
document.getElementById('h1').innerHTML += "<p> 1234</p>"
