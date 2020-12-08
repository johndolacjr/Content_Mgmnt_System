const mysql = require("mysql");
const inquirer = require("inquirer");
const express = require("express");
const queriesList = require('./lib/queries.js');
const questions = require('./lib/questions.js');


var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "Password1",
  database: "teamdb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("serverStarted")
  startQuestions();
});

function startQuestions() {
  inquirer.prompt(questions.start)
  .then(answer => {
    console.log(answer)
    switch(answer.start) {
// Case switches to ADD dept, role, and employee
      case 'add department': addDept(); 
          break;
      case 'add role': addRole(); 
          break;
      case 'add employee': addEmployee(); 
          break;

// Case switches to VIEW dept, role, and employee
      case 'view all departments': viewDept(); 
          break;
      case 'view all roles': viewRole(); 
          break;
      case 'view all employees': viewEmployee(); 
          break;

// Case switches to UPDATE dept, role, and employee
      case 'update employee department': updateDepartment(); 
          break;
      case 'update employee role': updateRole(); 
          break;
      case 'update employee manager': updateManager(); 
          break;

// Case switches to END
      case 'quit' : 
        break;
    }
})
.catch(err => {
  if(err) throw err;
});
}

// Functions to ADD Dept, Role, and Employees
function addDept() {
  inquirer
    .prompt(questions.this)
    .then(answer => {
     startQuestions()
    })
    .catch(err => {
      if (err) throw err;
    });
}

function addRole(){
  connection.query(queryList.deptList, function(err, res){
      if (err) throw err;
      let deptList = res;
      let deptListNames = res.map(dept => dept.name);
      let queryAdd = new questions.queryAdd("department", "What role are you adding?", deptListNames)
      let choices = [questions.addRole, queryAdd];
      inquirer
          .prompt(choices)
          .then(answer => {
              const newRole = answer;
              newRole.departmentId = deptList.filter(d => d.name === newRole.department).map(id => id.id).shift();
              startQuestions()
          })
          .catch(err => {
          if(err) throw err;
          });
  });
}

function addEmployee(){
  connection.query(queryList.deptList, function(err, res){
      if (err) throw err;
      let depts = res;
      let deptNameList = res.map(dept => dept.name);
      let query = new questions.queryAdd("department", "Enter employee name: ", deptNameList);
      let choices = [];
      choices.push(query);
      inquirer
          .prompt(choices)
          .then(answer => {
              let dept = depts.filter(d => d.name === answer.department);
              addEmployee(dept);
          })
          .catch(err => {
              if(err) throw err;
          });
  });
}

// Functions to VIEW depts, roles, and employees
function viewDept(){
  connection.query(queriesList.depts, function(err, res){
      if(err) throw err;
      console.table(res);
      startQuestions();
  })
}

function viewRole(){
  connection.query(queriesList.roles, function(err, res){
      if(err) throw err;
      console.table(res);
      startQuestions();
  })
}

function viewEmployee(){
  connection.query(queriesList.employee, function(err, res){
      if(err) throw err;
      console.table(res);
      startQuestions();
  })
}

// Functions to REMOVE depts, roles, and employees---> if i have time 

// Functions to UPDATE employee depts, roles, and managers
function updateDept() {
  inquirer
    .prompt(questions.this)
    .then(answer => {
     startQuestions()
    })
    .catch(err => {
      if (err) throw err;
    });
}

function updateRole(){
  connection.query(queryList.deptList, function(err, res){
      if (err) throw err;
      let deptList = res;
      let deptListNames = res.map(dept => dept.name);
      let queryAdd = new questions.queryAdd("department", "What role would you like to update?", deptListNames)
      let choices = [questions.addRole, queryAdd];
      inquirer
          .prompt(choices)
          .then(answer => {
              const newRole = answer;
              newRole.departmentId = deptList.filter(d => d.name === newRole.department).map(id => id.id).shift();
              startQuestions()
          })
          .catch(err => {
          if(err) throw err;
          });
  });
}

function updateEmployee(){
  connection.query(queryList.deptList, function(err, res){
      if (err) throw err;
      let depts = res;
      let deptNameList = res.map(dept => dept.name);
      let query = new questions.queryAdd("department", "Who would you like to level up?", deptNameList);
      let choices = [];
      choices.push(query);
      inquirer
          .prompt(choices)
          .then(answer => {
              let dept = depts.filter(d => d.name === answer.department);
              addEmployee(dept);
          })
          .catch(err => {
              if(err) throw err;
          });
  });
}





