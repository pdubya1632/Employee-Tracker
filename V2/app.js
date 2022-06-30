const user = "";
const host = "localhost";
const database = "company_db";
const password = "";
const port = "5432";

import cTable from 'console.table';
import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: "postgres",
  logging: false,
});

const Department = sequelize.define(
  "Department",
  {
    title: Sequelize.STRING,
  },
  {
    timestamps: false,
  }
);

const results = await Department.findAll({
  raw: true,
});
console.table(results);
