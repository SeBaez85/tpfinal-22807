import db from "../database/db.js"
import { DataTypes } from "sequelize"

const EmployeeModel = db.define("employees", {
    first_name:{type:DataTypes.STRING},
    last_name:{type:DataTypes.STRING},
    salary:{type:DataTypes.FLOAT},
    sector:{type:DataTypes.STRING}
})

export default EmployeeModel