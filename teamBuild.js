const mysql = require("mysql");
const inquirer = require("inquirer");
const express = require("express");
const questions = require('./lib/query.js');


var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 8080
  port: 8080,
  // Your username
  user: "root",
  // Your password
  password: "Password1",
  database: "teamdb"
});

connection.connect(function(err) {
  if (err) throw err;
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

// Case switches to REMOVE dept, role, and employee
      case 'remove department': removeDept(); 
          break;
      case 'remove role': removeRole(); 
          break;
      case 'remove employee': removeEmployee(); 
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
      console.log("Need to push to server")
      console.log(answer);
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
      let queryAdd = new questions.queryAdd("department", "Which department is this role in?", deptListNames)
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
      let query = new questions.queryAdd("department", "Which department is this employee in?", deptNameList);
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
  connection.query(queryList.deptListDept, function(err, res){
      if(err) throw err;
      console.table(res);
      startQuestions();
  })
}
function viewRole(){
  connection.query(queryList.roleListDept, function(err, res){
      if(err) throw err;
      console.table(res);
      startQuestions();
  })
}
function viewEmployee(){
  connection.query(queryList.viewListDept, function(err, res){
      if(err) throw err;
      console.table(res);
      startQuestions();
  })
}


// Functions to REMOVE depts, roles, and employees

// Functions to UPDATE employee depts, roles, and managers






