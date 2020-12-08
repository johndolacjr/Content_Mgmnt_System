-- Drops the teamDB if it exists currently --
DROP DATABASE IF EXISTS teamDB;
-- Creates the "teamDB" database --
CREATE DATABASE teamDB;

-- Makes it so all of the following code will affect teamDB --
USE teamDB;

-- Creates the table "Team_Table" within teamDB --
CREATE TABLE Department_table (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE Role_table (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);

CREATE TABLE Employee_table (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30), 
    role_id INT,
    manager_id INT
);

INSERT INTO Department_table (department_name) VALUES ("Sales"), ("Marketing"), ("Technology"), ("Supplier Services");

INSERT INTO Role_table (title, salary, department_id) VALUES ("Manager", 1000000000.00, 1), ("Sales Rep", 500000.50, 2);

INSERT INTO Employee_table (first_name, last_name, role_id) VALUES ("John", "Dolac", 1), ("Sarah", "Connor", 2); 

SELECT * FROM Department_table;
SELECT * FROM Role_table;
SELECT * FROM Employee_table;