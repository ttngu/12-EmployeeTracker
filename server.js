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
    start();
});

// Function prompts the user for what action they should take
function start() {
    inquirer
      .prompt({
        name: "viewAddOrRemove",
        type: "list",
        message: "Would you like to to do?",
        choices: ["View All Employees", "View All Employees by Department", "View All Employees by Manager", "Add Employee", "Remove Employee", "Exit"]
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.viewAddOrRemove === "View All Employees") {
          viewAll();
        }
        else if(answer.viewAddOrRemove === "View All Employees by Department") {
          viewByDepartment();
        } 
        else if(answer.viewAddOrRemove === "View All Employees by Manager") {
          viewByManager();
        } 
        else if(answer.viewAddOrRemove === "Add Employee") {
          addEmployee();
        } 
        else if(answer.viewAddOrRemove === "Remove Employee") {
          removeEmployee();
        } 
        // This probably can be written a different way, but I'm not sure.
        else if(answer.viewAddOrRemove === "Exit") {
          connection.end();
        } 
        else{
          connection.end();
        }
      });
  }

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });