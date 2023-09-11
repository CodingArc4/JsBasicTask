//Rules for naming variables
//1. Cannot be a reserved keyword
//2. Should be meaningful
//3. Cannot start with a number (1name)
//4. Cannot contain a space or hyphen (-)
//5. Are case-sensitive
//6. Use camelCase
//7. Should not be too long/short
//8. Use let instead of var
//9. Use const if the value is not going to change
//10. Use const if the value is not going to change

let name = 'John';
console.log(name);

//in const we cannot reassign the value 
//but if we use let we can reassign the value
const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);

//we have two types of variables
//1. Primitive/Value Types
//2. Reference Types
//primitive types are copied by their value
//primitive types are string, number, boolean, undefined, null
//reference types are copied by their reference
//reference types are object, array, function

let namePerson = 'John'; //string literal
let age = 30; //number literal
let isApproved = true; //boolean literal
let firstName; //undefined
let lastName = null; //null, null is used to explicitly clear the value of a variable
 
//Dynamic Typing
//JS is a dynamically typed language
//we don't have to specify the type of a variable
//types are associated with values not variables
//the same variable can hold multiple types
//we don't need to specify types
//most other languages are statically typed (Java, C#, C++)
//you can use typeof operator to find the type of a variable
console.log(typeof namePerson);


//Objects
//Objects are used to group related variables and functions together
//Objects are used to represent a real-world entity
//Objects can have properties and methods
//Objects are dynamic, we can add/remove properties
//Objects are reference types
//Objects are created using the object literal syntax
//Objects are created using the new keyword
//Objects are created using a constructor function

//object literal syntax
let person = {  
    name: 'John',
    age: 30
};

//dot notation
//dot notation is used when we know the name of the property
person.name = 'Mosh';

//bracket notation
//bracket notation is used when we don't know the name of the property
person['name'] = 'Mary';

//printing the value of the property
console.log(person.name); //we can see the properties of the object

//Arrays
//Arrays is a data structure that are used to store a list of items
//Arrays are dynamic, we can add/remove items
//Arrays are reference types
//Arrays are created using the array literal syntax
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1; //we can add numbers to the array as well as strings  
console.log(selectedColors);
//arrays are objects in JS
console.log(typeof selectedColors); //we can see the type of the array
//everytime we use the array literal syntax we are creating a new object
console.log(selectedColors.length); //we can see the length of the array

//functions
//functions are a set of statements that perform a task or calculate a value
//functions are used to avoid duplicating code
//functions are used to make code more readable
//functions are used to divide a complex problem into smaller problems
//functions are used to organize code
//functions are used to hide the implementation details
//functions are used to reuse code
//functions are used to perform a task
//functions are used to calculate and return a value
//functions are objects in JS
//functions are created using function declaration
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName); //this function performs a task
}
greet('John', 'Smith'); //calling the function
greet('Mary', 'Smith'); //calling another function
//parameters are used when we define the function
//arguments are used when we call the function


//types of functions
//1. Performing a task
//2. Calculating a value

//the above function is an example of performing a task
//the below function is an example of calculating a value

function square(number) {
    return number * number;
}
console.log(square(2)); //calling the function inside the console.log because the function returns a value  
