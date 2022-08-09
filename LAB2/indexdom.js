// <h1 id = "title" class="display-1">Hello World</h1>
// <h1 id = "title" class="display-2">I are daveloper</h1>
let h1 = document.getElementById('title');
let h2 = document.getElementsByTagName('h1');
let h3 = document.getElementsByClassName('display-1');

h1.innerText ="Computer and Information Science";
console.log(h2);
h2[0].innerHTML = "<b>CIS</b>";