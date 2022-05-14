// javascript is a easy to learn scripting language
// works in both web browser and computer
// uses framework node.js

let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click', inputMsg);

function inputMsg() {  //created function

    let name = prompt('Enter Name of Student');  //input liya
    namasteBtn.textContent = 'Roll No. 1: ' + name;
}

//another function we used is alert() function, shows an alert message
//In the browser javascript runs with the help of browser engine

