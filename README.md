
# Task Manager Application

This is a Task Manager application built with Node.js, Express, and React. It allows you to manage tasks by adding, editing, and deleting them.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Server](#running-the-server)
  - [Running the Client](#running-the-client)
- [Testing](#testing)
  - [API Testing with Postman](#api-testing-with-postman)
  - [Frontend Testing](#frontend-testing)

## Getting Started

Follow the instructions below to set up and run the application.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (with npm)
- [Postman](https://www.postman.com/) (for API testing)

## Setup

1. Clone this repository to your local machine:
   
       git clone https://github.com/rjrahul08/task-manager
       cd task-manager-app

3. Install the necessary dependencies for both the client (React) and server (Node.js):

        cd client
        npm install
        cd ../server
        npm install
### Running the Server
1. Start the React client
   
        cd client
        npm start
2. The client will run on http://localhost:3000.

## Running Tests

To run the automated tests for the client (React) application, navigate to the client directory:
   
      cd client
      npm test

To run the automated tests for the server (Node.js) application, navigate to the server directory:

      cd server
      npm test

These commands will execute Jest test suites for both the client and server.

### Frontend Testing
You can test the frontend part of the assignment by accessing the application in your web browser:

1. Open your web browser.
2. Go to http://localhost:3000.
3. You can now use the Task Manager interface to add, edit, and delete tasks.


## Test Cases
###  Client Tests (React)
- TaskForm Component: Verify that the TaskForm component can successfully add a new task when the "Add Task" button is clicked.

- TaskList Component: Test CRUD operations (Create, Read, Update, Delete) in the TaskList component. Ensure that tasks can be added, edited, deleted, and displayed correctly.

### Server Tests (Node.js)
- API Endpoints: Test the server's API endpoints for creating, reading, updating, and deleting tasks. Ensure that the API behaves correctly for these operations.

## Folder Structure
The project's folder structure is organized as follows:


      task-manager-app/
        client/
          src/
            components/
              TaskForm.js
              TaskList.js
            __tests__/
              TaskForm.test.js
              TaskList.test.js
          package.json
          ...
        server/
          server.js
          package.json
          ...

## Contributions

Contributions to this project are welcome! If you'd like to contribute, please follow these steps:

  - Fork the repository.
  - Create a branch for your changes.
  - Make your changes and commit them.
  - Push your changes to your fork.
  - Create a pull request.
Please ensure that your contributions follow the project's testing practices and maintain the integrity of the existing test suite.

## Evaluation Criteria
Your contributions will be evaluated based on the following criteria:

  - Correctness: Ensure that your test cases correctly verify the expected behavior of the application.
  - Organization: Keep your code and tests well-organized and easy to follow.
  - Documentation: Document your test cases with clear descriptions and comments.
  - Test Independence: Make sure that your tests run independently and do not rely on each other's state.
  - Use of Testing Framework: Use Jest effectively to write and run your test cases.
  - Asynchronous Handling: Handle asynchronous operations gracefully in your tests.

Happy testing!
