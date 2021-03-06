// Dependencies
var express = require("express")
var mysql = require("mysql");
var inquirer = require("inquirer")

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information 
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "harrypotter",
  database: "employee_tracker_db"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
}
console.log("connected as id " + connection.threadId);
  // run the start function after the connection is made to prompt the user
  starterQuestion();
});

// Function prompts the user for what action they should take
function starterQuestion() {
  inquirer
    .prompt([{
      name: "viewAddOrRemove",
      type: "list",
      message: "Would you like to to do?",
      choices: [
        "Add Department",
        "Add Role",
        "Add Employee",
        "View Departments",
        "View Roles",
        "View Employees",
        "Update Employee Role",
        "Exit"
      ]
    }, {
      name: "departmentName",
      type: "input",
      message: "What is the department name?",
      when: function(answer) {
        return !!answer.starterQuestion && (answer.starterQuestion === "Add Department")
      }
    }, {
      name: "roleTitle",
      type: "input",
      message: "What is the role title?",
      when: function(answer) {
        return !!answer.starterQuestion && (answer.starterQuestion === "Add Role")
      }
    }, {
      name: "roleSalary",
      type: "input",
      message: "What is the role salary?",
      when: function(answer) {
        return !!answer.starterQuestion && (answer.starterQuestion === "Add Role")
      }
    }, {
      name: "roleDepartmentId",
      type: "input",
      message: "What is the role department ID?",
      when: function(answer) {
        return !!answer.starterQuestion && (answer.starterQuestion === "Add Role")
      }
    }, {
      name: "employeeFirstName",
      type: "input",
      message: "What is the employee's first name'?",
      when: function(answer) {
        return !!answer.starterQuestion && (answer.starterQuestion === "Add Employee")
      }
    }, {
      name: "employeeLastName",
      type: "input",
      message: "What is the employee's last name'?",
      when: function(answer) {
        return !!answer.starterQuestion && (answer.starterQuestion === "Add Employee")
      }
    }, {
      name: "employeeRoleId",
      type: "input",
      message: "What is the employee's role ID?",
      when: function(answer) {
        return !!answer.starterQuestion && (answer.starterQuestion === "Add Employee")
      }
    }, {
      name: "employeeManagerId",
      type: "input",
      message: "What is the manager's ID?",
      when: function(answer) {
        return !!answer.starterQuestion && (answer.starterQuestion === "Add Employee")
      }
    }, {
      name: "updateEmployeeId",
      type: "input",
      message: "What is the updated employee's ID?",
      when: function(answer) {
        return !!answer.starterQuestion && (answer.starterQuestion === "Update Employee Role")
      }
    }, {
      name: "updateEmployeeRole",
      type: "input",
      message: "What is empolyee's updated role Id?",
      when: function(answer) {
        return !!answer.starterQuestion && (answer.starterQuestion === "Update Employee Role")
      }
    }])
    .then(function(answer) {
      switch (answer.starterQuestion) {
        case "Add Department":
          addOptions("department", answer);
          break;
        case "Add Role":
          addOptions("role", answer);
          break;
        case "Add Employee":
          addOptions("employee", answer);
          break;
      }
    })
}

// Function to VIEW a department, role, or employee
function viewOptions() {
  // Use if else to switch parameters within the table

  // Variable instered determined by the previous questions answer

  // Varible to make connection to db table
}

// Function to ADD a department, role or employee
function addOptions(addAnswer, answer) {
  let tableAnswers = {}
  // Use if else to switch parameters within the table

  // Variable instered determined by the previous questions answer

  // Varible to make connection to db table
}

// Function to UPDATE and employee



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});