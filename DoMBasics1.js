const myBody = document.body; // document.body is the <body> element
console.log(myBody); // <body>...</body>

//getElemementById selects an element by its id attribute 
const box2 = document.getElementById("box-2");
console.log(box2); // <div id="box-2">...</div>

//getElementbytagname selects all elements with a given tag name
const divs = document.getElementsByTagName("div");
console.log(divs); // HTMLCollection(3) [div#box-1, div#box-2, div#box-3]

//getElementsByClassName selects all elements with a given class name
const boxes = document.getElementsByClassName("random");
console.log(boxes); // HTMLCollection(3) [div#box-1.box, div#box-2.box, div#box-3.box]

//querySelector selects the first element that matches a given CSS-style selector
const random = document.querySelector(".container .random");
console.log(random); // <div class="random">...</div>

//querySelectorAll selects all elements that match a given CSS-style selector