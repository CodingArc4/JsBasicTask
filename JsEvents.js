
//event handler is declared in the html file itself as an attribute of the element that is to be handled 
//<button onclick="myFunction()">Click me</button>

//event listener is declared in the js file itself
//<button id="btn">Click me</button>
//document.getElementById("btn").addEventListener("click", myFunction);


//declarative function
//event handling
function myFunction() {
  console.log("Hello World!");
}

//arrow function
const MouseOver = () => {
  console.log("Mouse Over");
}

const onKeyPressEvent = () => {
  console.log("Key Pressed");
}

//event listeners
//benefit of event listeners is that we can add multiple event listeners to the same element
//another benefit is that we can remove event listeners
//we can write event object in the event listener function to get the details of the event
const box1 =  document.getElementById("box-1");
// box1.addEventListener('mousemove', (e) => {
//     console.log("mouse move by event listener",e.clientX,e.clientY);
// })

box1.addEventListener('click', () => { 
    console.log("Box 1 Clicked by event listener");
})

const container = document.getElementById("container");
container.addEventListener('click', () => {
    console.log("Container Clicked by event listener");
})

const nameInput = document.getElementById("nameInput");
nameInput.addEventListener('keypress', (e) => {
    console.log('key',e.key);
})

//bubbling is the default behaviour of the event listeners in which the event is bubbled up to the parent elements
// event.stopPropagation() is used to stop the event from bubbling up to the parent elements

//in capturing phase, the event is captured from the parent elements to the child elements