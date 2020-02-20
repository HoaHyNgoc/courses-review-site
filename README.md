# JavaScript Style Guide and Coding Conventions

[![Origin Style](https://img.shields.io/badge/origin-styles-brightgreen)](https://www.w3schools.com/js/js_conventions.asp)

Always use the same coding conventions for all your JavaScript projects.

## Table of Contents

>- [Coding Conventions](#coding-conventions)
>- [Variable Names](#variable-Names)
>- [Spaces Around Operators](#spaces-around-operators)
>- [Code Indentation](#code-indentation)
>- [Statement Rules](#statement-rules)
>- [Object Rules](#object-rules)
>- [Line Length](#line-length)
>- [Naming Conventions](#naming-conventions)
>- [Loading JavaScript in HTML](#loading-javascript-in-html)
>- [Accessing HTML Elements](#accessing-html-elements)
>- [File Extensions](#file-extensions)
>- [Use Lower Case File Names](#use-lower-case-file-names)
>- [Performance](#performance)

## Coding Conventions

Coding conventions are **style guidelines for programming**. They typically cover:

* Naming and declaration rules for variables and functions.
* Rules for the use of white space, indentation, and comments.
* Programming practices and principles.

Coding conventions secure quality:

* Improves code readability
* Make code maintenance easie

## Variable Names

We use **camelCase** for identifier names (variables and functions).<br/>
All names start with **a letter**.<br/>
At the bottom of this page, you will find a wider discussion about naming rules.<br/>

```javaScript
firstName = "John";
lastName = "Doe";

price = 19.90;
tax = 0.20;

fullPrice = price + (price * tax);
```

## Spaces Around Operators

Always put spaces around operators ( = + - * / ), and after commas:

### Example:

```javascript
var x = y + z;
var values = ["Volvo", "Saab", "Fiat"];
```

## Code Indentation

Do not use tabs (tabulators) for indentation. Different editors interpret tabs differently.\
Always use 4 spaces for indentation of code blocks:

```javascript
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
```

## Statement Rules

General rules for simple statements:

* Always end a simple statement with a semicolon.

```javascript
var values = ["Volvo", "Saab", "Fiat"];

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
```

General rules for complex (compound) statements:

* Put the opening bracket at the end of the first line.
* Use one space before the opening bracket.
* Put the closing bracket on a new line, without leading spaces.
* Do not end a complex statement with a semicolon.

### Functions:
```javascript
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
```

### Loops:
```javascript
for (i = 0; i < 5; i++) {
    x += i;
}
```

### Conditionals:
```javascript
if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
```
## Object Rules:

General rules for object definitions:

* Place the opening bracket on the same line as the object name.
* Use colon plus one space between each property and its value.
* Use quotes around string values, not around numeric values.
* Do not add a comma after the last property-value pair.
* Place the closing bracket on a new line, without leading spaces.
* Always end an object definition with a semicolon.

```javascript
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}
```

Short objects can be written compressed, on one line, using spaces only between properties, like this:

```javascript
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

## Line Length

For readability, avoid lines longer than 80 characters.\
If a JavaScript statement does not fit on one line, the best place to break it, is after an operator or a comma.

### Example:

```javascript
document.getElementById("demo").innerHTML =
"Hello Dolly.";
```

## Naming Conventions

Always use the same naming convention for all your code. For example:

* Variable and function names written as **camelCase**
* Global variables written in **UPPERCASE** (We don't, but it's quite common)
* Constants (like PI) written in **UPPERCASE**

Other:
* HTML5 attributes can start with data- (data-quantity, data-price).
* CSS uses **hy-phens** in property-names (font-size).
* **underscores** (date_of_birth), especially in SQL databases, PHP documentation.
* **PascalCase** is often preferred by C programmers.
* **camelCase** is used by JavaScript itself, by jQuery, and other JavaScript libraries.

Don't:

* Hyphens can be mistaken as subtraction attempts. Hyphens are not allowed in JavaScript names.
* Do not start names with a $ sign. It will put you in conflict with many JavaScript library names.

## Loading JavaScript in HTML

Use simple syntax for loading external scripts (the type attribute is not necessary):

```javascript
<script src="myscript.js"></script>
```

## Accessing HTML Elements

If possible, use the same naming convention (as JavaScript) in HTML.

## File Extensions

HTML files should have a **.html** extension (not **.htm**).\
CSS files should have a **.css** extension.\
JavaScript files should have a **.js** extension.

## Use Lower Case File Names

Most web servers (Apache, Unix) are **case sensitive** about file names.\
Other web servers (Microsoft, IIS) are **not case sensitive**.\
To avoid these problems, always use lower case file names (if possible).

## Performance

Indentation and extra spaces are not significant in small scripts.\
For code in development, readability should be preferred. Larger production scripts should be minified.
