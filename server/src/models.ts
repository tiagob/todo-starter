import { Sequelize, Table, Column, Model } from "sequelize-typescript";

@Table
export class Todo extends Model<Todo> {
  @Column
  name!: string;

  @Column
  complete!: boolean;
}

let db: Sequelize;
db = new Sequelize({
  database: process.env.DB_NAME || "todo",
  username: process.env.DB_USER || "todo",
  password: process.env.DB_PASS || "todo",
  dialect: "mysql"
});
db.addModels([Todo]);
export { db };
