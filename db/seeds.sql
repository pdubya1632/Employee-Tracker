CREATE TABLE Departments (
    id serial not null primary key,
    name varchar(30) not null
);

CREATE TABLE Roles (
    id serial not null primary key,
    title varchar(30) not null,
    departmentId int not null references Departments(id)
);

CREATE TABLE Employees (
    id serial not null primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    roleId int not null references Roles(id),
    salary decimal not null,
    is_manager boolean not null,
    managerId int references Employees(id),
    is_active boolean not null
);

INSERT INTO "Departments" (name)
VALUES ('Engineering'),
       ('Finance'),
       ('Legal'),
       ('Sales'),
       ('Service'),
       ('Marketing');

INSERT INTO "Roles" (name, "departmentId")
VALUES ('Sales Lead', 4),
       ('Salesperson', 4),
       ('Lead Engineer', 1),
       ('Software Engineer', 1),
       ('Legal Team Lead', 3),
       ('Lawyer', 3),
       ('Marketing Manager', 5);
       
INSERT INTO "Employees" (first_name, last_name, "roleId", salary, is_manager, "managerId", is_active)
VALUES
  ('Matt', 'Jacobson', 6, 150000, false, 8, true),
  ('Malia', 'Brown', 4, 110000, false, 4, true),
  ('John', 'Belinger', 4, 120000, false, 4, true),
  ('Kevin', 'Tupik', 2, 90000, true, null, true),      
  ('Alex', 'Crown', 1, 140000, false, 8, true),
  ('Mike', 'Chan', 1, 70000, false, 1, true),
  ('Ashley', 'Rodriquez', 1, 80000, false, 1, true),
  ('Kunal', 'Singh', 3, 100000, false, 4, true),
  ('Pete', 'Bolotin', 3, 130000, true, null, true),   
  ('John', 'Doe', 3, 60000, true, null, true);