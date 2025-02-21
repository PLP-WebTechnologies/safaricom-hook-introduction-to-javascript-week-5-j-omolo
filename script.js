// Part 1: JavaScript Basics

// Variables and Data Types
let name = "John Doe";
let age = 25;
let isStudent = true;
let hobbies = ["Reading", "Coding", "Traveling"];
let person = { name: "John Doe", age: 25 };

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Operators
function simpleCalculator() {
    let num1 = parseFloat(prompt("Enter the first number: "));
    let num2 = parseFloat(prompt("Enter the second number: "));
    let operation = prompt("Choose an operation (+, -, *, /): ");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter numbers.");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation.");
            return;
    }

    alert(`Result: ${result}`);
}

simpleCalculator();

// Functions
function greetUser(name) {
    return `Hello, ${name}! Welcome to our website.`;
}

document.getElementById("main-paragraph").textContent = greetUser("User");

// Part 2: JavaScript Control Structures

// If Statements
let ageInput = parseInt(prompt("Enter your age: "));
let voteEligibility = document.createElement("p");

if (ageInput >= 18) {
    voteEligibility.textContent = "You are eligible to vote.";
} else {
    voteEligibility.textContent = "You are not eligible to vote.";
}

document.body.appendChild(voteEligibility);

// Loops
let numberList = document.getElementById("number-list");

for (let i = 1; i <= 10; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

// Part 3: Introduction to the DOM

// Selecting and Modifying HTML Elements
document.getElementById("main-heading").textContent = "JavaScript in Action!";

let dynamicContent = document.getElementById("dynamic-content");
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicContent.appendChild(newParagraph);