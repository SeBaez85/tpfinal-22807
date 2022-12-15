import { Sequelize } from "sequelize";

const db = new Sequelize ("employeelist", "root", "admin", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
})

export default db