-- Drops the teamDB if it exists currently --
DROP DATABASE IF EXISTS teamDB;
-- Creates the "teamDB" database --
CREATE DATABASE teamDB;

-- Makes it so all of the following code will affect teamDB --
USE teamDB;

-- Creates the table "Team_Table" within teamDB --
CREATE TABLE Department_table (
  -- Creates Dept. Unique ID --
  id INT PRIMARY KEY NOT NULL,
  -- Contains the Department Name --
  Department_Name VARCHAR(30) NOT NULL
);

CREATE TABLE Role_table (
    id INT PRIMARY KEY
    title VARCHAR(30) to hold role title
    salary DECIMAL to hold role salary
    department_id INT to hold reference to department role belongs to
);

CREATE TABLE Employee_table (
    id INT PRIMARY KEY
    first_name VARCHAR(30) to hold employee first name
    last_name VARCHAR(30) to hold employee last name
    role_id INT to hold reference to role employee has
    manager_id INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
);