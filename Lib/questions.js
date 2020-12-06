const home = {
    type:'list',
    name:'home',
    message:'What would you like to do:',
    choices:['add department', 'add role', 'add employee', 'view all departments', 'view all roles', 
            'view all employees', 'remove employee', 'remove role', 'remove department', 
            'update employee role', 'update employee manager', 'update employee department', 'exit']
}
// Questions to view dept, role, and employee
const viewDepartment = {
    type:'list',
    name: 'departmentName',
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

// Questions to add dept, role, and employee
const addDept = {
    type:'input',
    name: 'departmentName',
    message: 'What department are you adding?'
}

const addRole = {
    type: 'input',
    name: 'role',
    message: 'What role are you adding?'
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



// Questions to update employee
// const updateEmpRole = {}
// const exit = 

module.exports = questions;