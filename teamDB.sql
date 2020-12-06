-- Drops the teamDB if it exists currently --
DROP DATABASE IF EXISTS teamDB;
-- Creates the "teamDB" database --
CREATE DATABASE teamDB;

-- Makes it so all of the following code will affect teamDB --
USE teamDB;

-- Creates the table "Team_Table" within teamDB --
CREATE TABLE Department_table (
  id INT PRIMARY KEY NOT NULL,
  DepartmentName VARCHAR(30) NOT NULL
);

CREATE TABLE Role_table (
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    departmentId INT
);

CREATE TABLE Employee_table (
    id INT PRIMARY KEY NOT NULL,
    firstName VARCHAR(30),
    lastName VARCHAR(30), 
    roleId INT,
    managerId INT
);

INSERT INTO Department_table (id) VALUES ("");
INSERT INTO Department_table (DepartmentName) VALUES ("Sales"), ("Marketing"), ("Development"), ("Supplier Services");

INSERT INTO Role_table (id) VALUES ("");
INSERT INTO Role_table (title) VALUES ("Manager"), ("Sales Rep"), ("Developer"), ("Customer Service Rep");
INSERT INTO Role_table (salary) VALUES ("$75K"), ("$65K"), ("$90K"), ("$45K");
INSERT INTO Role_table (departmentId) VALUES ("");

INSERT INTO Employee_table (id) VALUES ("");
INSERT INTO Employee_table (firstName) VALUES ("first name");
INSERT INTO Employee_table (lastName) VALUES ("last name");
INSERT INTO Employee_table (roleId) VALUES ("role id");
INSERT INTO Employee_table (managerId) VALUES ("manager id");

SELECT * FROM Department_table;
SELECT * FROM Role_table;
SELECT * FROM Employee_table;