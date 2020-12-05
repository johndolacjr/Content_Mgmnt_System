-- Drops the teamDB if it exists currently --
DROP DATABASE IF EXISTS teamDB;
-- Creates the "teamDB" database --
CREATE DATABASE teamDB;
-- Makes it so all of the following code will affect teamDB --
USE teamDB;

-- Creates the table "department_table" within teamDB --
CREATE TABLE Department_table(
  id INTEGER AUTO_INCREMENT,
  Department_Name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id) NOT NULL
);

CREATE TABLE Role_table(
    id INTEGER AUTO_INCREMENT NOT NULL, 
    title VARCHAR(30) to hold role title
    salary DECIMAL to hold role salary
    department_id INT to hold reference to department role belongs to,
    PRIMARY KEY (id) NOT NULL
);

CREATE TABLE Employee_table (
    id INT PRIMARY KEY
    first_name VARCHAR(30) to hold employee first name
    last_name VARCHAR(30) to hold employee last name
    role_id INT to hold reference to role employee has
    manager_id INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
);

-- INSERT INTO Role_table (id) values ((id));
-- INSERT INTO Role_table (title) values ('Manager', 'Sales Rep', 'Engineer', 'Payment Analyst');
-- INSERT INTO Role_table (salary) values (???????????);
-- INSERT INTO Role_table () values ((id));


-- INSERT INTO books (title, authorId) values ('Pride and Prejudice', 1);
-- INSERT INTO books (title, authorId) values ('Emma', 1);
-- INSERT INTO books (title, authorId) values ('The Adventures of Tom Sawyer', 2);
-- INSERT INTO books (title, authorId) values ('Adventures of Huckleberry Finn', 2);
-- INSERT INTO books (title, authorId) values ('Alice''s Adventures in Wonderland', 3);
-- INSERT INTO books (title, authorId) values ('Dracula', null);

-- SELECT * FROM authors;
-- SELECT * FROM books;