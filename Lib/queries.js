const employee =
    "SELECT first_name, last_name, title, salary, department_name FROM Employee_table LEFT JOIN Role_table ON Employee_table.role_id = Role_table.id LEFT JOIN Department_table ON Role_table.department_id = Department_table.id";

const managers = 
    "SELECT t.first_name, t.last_name, e.first_name as manager_name, e.last_name as manager_surname FROM employee as t LEFT JOIN employee as e on t.manager_id = e.id";

const depts = "SELECT DepartmentName, id FROM Department_table";
const employeeId = "SELECT CONCAT (first_name, ' ', last_name) AS name, id";
const roles = "SELECT title, id, department_id FROM role";
const managerId = "SELECT CONCAT (first_name, ' ' , last_name) AS name, id FROM employee";
const insertEmployees = "INSERT INTO employee SET ?";
const rolesByDept = "SELECT title, salary, name AS department_name FROM role LEFT JOIN department ON department_id = department.id";

const queriesList = {
    employee: employee,
    managers: managers,
    depts: depts,
    employeeId: employeeId,
    roles: roles,
    managerId: managerId,
    insertEmployees: insertEmployees,
    rolesByDept: rolesByDept
}

module.exports = queriesList;
