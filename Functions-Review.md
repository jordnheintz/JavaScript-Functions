![code differently](https://user-images.githubusercontent.com/54545904/91590200-f82ec600-e928-11ea-9433-eea450388abf.png)

# Javascript Functions

# Table of Content

- [Javascript Functions](#javascript-functions)
- [Table of Content](#table-of-content)
  - [Objectives](#objectives)
  - [About](#about)
    - [Functions](#functions)
      - [Function Declarations in JavaScript?](#function-declarations-in-javascript)
      - [Function Expressions in JavaScript](#function-expressions-in-javascript)
      - [Functions: Declarations vs Expressions](#functions-declarations-vs-expressions)
      - [Functions With Parameters](#functions-with-parameters)
      - [Variable Scope](#variable-scope)
        - [Local Scope](#local-scope)
        - [Global Scope](#global-scope)
      - [Arrow Functions](#arrow-functions)
  - [Next Steps](#next-steps)

## Objectives

- Define a JavaScript function.
- Understand function syntax.
- Write traditional and arrow functions.
- Know difference between a declaration and an expression.
- Understand the variable scope.
- How to invoke a function.

## About

A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it). At the core of it, a function is made up of instructions that a developer wants to run repeatedly.

### Functions

Traditionally, a function is defined with the `function` keyword, followed by a name and parentheses `()`. Function names can consist of letters, digits, underscores, and dollar signs embodying the same rules as variables.

#### Function Declarations in JavaScript?

The `function` statement declares a function. A declared function is “saved for later use”, and will be executed later, when it is invoked (called). Similar to variables, that must start with “var”, “let”, or “const”, a function declaration must begin with keyword `function`.

```js
function num() {
return 3;
}

console.log(num()) //console returns 3
```
or

```js
function sayHello() {
  alert("Hello, welcome to Code Differently!");
}

// Calling function
sayHello(); // 0utputs: Hello, welcome to Code Differently!
```
#### Function Expressions in JavaScript

A function expression can be stored in a variable:
```js
let x = function (a, b) {return a * b};
```
After a function expression has been stored in a variable, the variable can be used as a function. Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

#### Functions: Declarations vs Expressions

**Function Expression**
```js
alert(num()); // error message! num function wasn't loaded yet.
let num = function() { return 5; }
```

**Function Declaration**
```js
alert(num());// Alerts 10. Declarations are loaded before any code can run.
function num() { return 10; }
```

- Function declarations load and run before any code is executed while Function expressions load only when the interpreter reaches that line of code.

- Function declarations are hoisted to the top of other code. Function expressions aren’t hoisted, which allows them to retain a copy of the local variables from the scope where they were defined.

_Function declarations define functions without assigning them to variables._

```js
function answer(x, y) {
  let sum = x + y;
  return sum;
}
```

_Function expressions assign anonymous functions to variables._

```js
let answer = function (x, y) {
  let sum = x + y;
  return sum;
};
alert(answer(5, 10)); // 0utput: 15

let total = answer(7, 25);
alert(total); // 0utput: 32
```
#### Functions With Parameters

You can write parameters when you define your function to accept input values at run time.

```js
function sayHello(name = "Guest") {
  alert("Hello, " + name);
}
sayHello(); // 0utputs: Hello, Guest
sayHello("Roger"); // 0utputs: Hello, Roger
```

#### Variable Scope

With the ability to declare variables anywhere within JavaScript code, the location of the declaration will determine the extent of its use within the code, hence known as the variable scope.

##### Local Scope

Variables declared within a function have local scope, meaning they cannot be viewed or used outside of that function, as shown below:

```js
function greetClass() {
  let welcome = "Hey devs, ready to code!";
  alert(welcome);
}
greetClass(); // Outputs: Hey devs, ready to code!
alert(welcome); // Uncaught ReferenceError: greet is not defined
```

##### Global Scope

Variables that are declared outside of a function will have a global scope meaning it availability and use extends to the entire program inside or outside a function.

```js
let welcome = "Hey Devs!";

function greetDevs() {
  alert(welcome);
}
greetDevs(); // Outputs: Hey Devs!
alert(welcome); // Outputs: Hey Devs!
```

#### Arrow Functions

Arrow functions are a new syntax that allows for defining functions in a more concise way. Lets take a look at how to implement this:

```js
let answer = function (a, b) {
  return a + b;
};
console.log(answer(2, 3)); // 5

// Arrow function
let answer = (a, b) => a + b;
console.log(answer(2, 3)); // 5
```

## Next Steps

Now that you are familiar with functions in javascript, head on over to the [Lab](Functions%20Lab.md) to practice these new skills. Please use this lesson as a reference point if you find yourself having trouble.
