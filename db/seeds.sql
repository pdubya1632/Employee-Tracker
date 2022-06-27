INSERT INTO departments (title)
VALUES  ('Engineering'),
        ('Finance'),
        ('Legal'),
        ('Sales'),
        ('Service');

INSERT INTO roles (title, department_id, salary)
VALUES  ('Sales Lead', 4, 100000),
        ('Salesperson', 4, 80000),
        ('Lead Engineer', 1, 150000),
        ('Software Engineer', 1, 110000),
        ('Legal Team Lead', 3, 240000),
        ('Lawyer', 3, 180000);

INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager, active)
VALUES  ('John', 'Doe', 1, null, true, true),
        ('Mike', 'Chan', 2, 1, false, true),
        ('Ashley', 'Rodriguez', 2, 1, false, true),
        ('Kevin', 'Tupik', 3, null, true, true),
        ('Kunal', 'Singh', 4, 2, false, true),
        ('Malia', 'Brown', 4, 2, false, true),
        ('John', 'Belinger', 4, 2, false, true),
        ('Pete', 'Bolotin', 5, null, true, true),
        ('Alex', 'Crown', 6, 3, false, true),
        ('Matt', 'Jacobson', 6, 3, false, true);

INSERT INTO managers (first_name, last_name)
SELECT first_name, last_name
FROM employees
WHERE is_manager = 1;