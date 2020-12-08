const start = {
    type:'list',
    name:'start',
    message:'What would you like to do:',
    choices:[
        'add department', 
        'add role',
        'add employee', 
        'view all departments', 
        'view all roles', 
        'view all employees', 
        'update employee department',          
        'update employee role', 
        'update employee manager', 
        'exit']
}

// Questions to ADD dept, role, and employee
const addDept = {
    type:'input',
    name: 'departmentName',
    message: 'What department are you adding?'
}

const addRole = {
    type: 'list',
    name: 'role',
    message: 'What role are you adding?', 
    choices: [
        'Manager',
        'Customer Service',
        'Sales Rep'
    ]
}

const addEmployee = [{
    type: 'input',
    name: 'firstName',
    message: 'Enter teammates first name: '
},
{
    type: 'input',
    name: 'lastName',
    message: 'Enter teammates last name: '
}];

// Questions to VIEW dept, role, and employee
const viewDept = {
    type:'list',
    name: 'deptName',
    message: 'What department would you like to see?',
    choices: ["Sales", "Marketing", "Technology", "Customer Service"]
}
const viewRole = {
    type:'list',
    name: 'roles',
    message: 'What roles would you like to see?', 
    choices: ["Manager", "Sales Rep", "Developer", "Customer Service Rep"]
}
const viewEmployee = {
    type:'input',
    name: 'empName',
    message: 'Enter employee name: '
}; 

//Questions to UPDATE dept, role, employee
const updateDept = {
    type:'list',
    name: 'deptName',
    message: 'What department would you like to update?',
    choices: ["Sales", "Marketing", "Technology", "Customer Service"]
}
const updateRole = {
    type:'list',
    name: 'roles',
    message: 'What role would you like to update?', 
    choices: ["Manager", "Sales Rep", "Developer", "Customer Service Rep"]
}
const updateEmployee = {
    type:'input',
    name: 'empName',
    message: 'Who would you like to level up? '
}; 

class queryAdd {
    constructor(name, message, choices) {
        this.type = 'list';
        this.name = name;
        this.message = message;
        this.choices = choices;
    }
}

const questions = {
    start:start, 
    viewDept:viewDept,
    viewRole:viewRole,
    viewEmployee:viewEmployee,
    addDept:addDept, 
    addRole:addRole,
    addEmployee:addEmployee,
    updateDept:updateDept, 
    updateRole:updateRole,
    updateEmployee:updateEmployee,
    queryAdd
};

module.exports = questions;