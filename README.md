# NodeJS Unit Testing Tutorial

In software engineering, <b>software testing</b> is a crucial phase, and it helps eliminate defects and ensure the software under test conforms with the requirements.

Over the years, using Mocha to implement software testing has shown an increasing advantage over other tools because you can easily switch between the assertion libraries for <b>Test-Driven Development (TDD)</b> and <b>Behavior-Driven Development (BDD).</b>

In this NodeJS unit testing tutorial, we will explore the intricacies of performing effective software testing with Node.js while writing efficient test cases using Mocha and Chai. In addition, you will learn how combining Chai and Mocha helps you write better-quality code by running your automated tests in Node.

## What is NodeJS Unit Testing?

NodeJS unit testing refers to testing individual units or components of a Node.js application using specialized <b>automation testing frameworks</b> and libraries.

These tests can include testing the functionality of individual functions, modules, or classes and the interactions between different parts of the application.

Some popular NodeJS <b>unit testing frameworks</b> include Jest, Mocha, and AVA. However, this NodeJS unit testing tutorial will explore NodeJS unit testing using Mocha and Chai.

## NodeJS Unit Testing with Mocha and Chai

<b>Mocha.js</b> is a popular <b>JavaScript testing framework</b> that runs on Node.js and in the browser. It provides a simple and flexible way to structure and run tests in various environments.

Chai is an assertion library that can be paired with Mocha to provide a more natural and expressive way to write test assertions. Mocha and Chai make it easy to write and run unit tests for Node.js applications. 

## How to write Unit Tests with Mocha and Chai?

In this section, we will learn to use the <b>Mocha testing</b> library with the Chai assertion library to implement <b>unit testing.</b>

Before we jump into installing and configuring Mocha and Chai to write NodeJS unit testing, let’s explore some of the frequently used methods in Mocha and Chai.

<h3>Describe:</h3>

The `describe()` method is a block of grouped test suites. It is a suite of test scripts that are grouped for testing. It takes two parameters; a string as the suite’s name and a callback function to group test cases.

``` javascript
describe('Test Helpers', function () {
 /**
  * Add all your related test cases here
  *
  */
});
```

<h3>It():</h3>

The `it()` method is the smallest test case that is to be executed. It takes two parameters; a string as the suite’s name and a callback function to execute the test case.

``` javascript
describe('Test Helpers', function () {
 it('should calculate Fibonacci series', function () {
   /*...*/
 });
});
```

<h3>Expect:</h3>

The `expect()` method is used in Behavioral-Driven Development (BDD) style libraries to chain assertions together. It is mostly used for topics that resolve to booleans or numbers, etc.

``` javascript
it('should calculate Fibonacci series', function () {
   const fib = fibonacci(4);
   expect(fib).toEqual(5);
 });
```

<h3>Should:</h3>

The `should()` method is also used in BDD-style libraries to chain assertions together. However, it extends each object with a should property to start the chain.

``` javascript
it('partially update challenge - not found', async () => {
 const response = await chai.request(app)
 should.equal(response.status, 404)
 should.equal(response.body.message, 'Challenge with id: ${notFoundId} doesn't exist')
})
```

<h3>Assert:</h3>

The `assert()` method is used in Test Driven Development (TDD) style libraries to chain assertions together.

``` javascript
it('partially update challenge - not found', async () => {
 assert('foo' !== 'bar', 'foo is not bar');
 assert(Array.isArray([]), 'empty arrays are arrays');
})
```

## How to install Mocha and Chai?

To get started with Mocha and Chai, you’ll first need to install them in your project. You can do this by running the following commands in your terminal:

You can create a new project or clone this repository for this project:

``` bash
npm install --save-dev mocha 
npm install --save-dev chai
```

Next, your project folder structure should look like the one in this sample having the tests folder.

