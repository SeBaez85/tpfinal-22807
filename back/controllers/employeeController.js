import EmployeeModel from "../models/EmployeeModel.js";

export const getAllEmployees = async (req, res)=>{
    try {
        const employees = await EmployeeModel.findAll();
        res.json(employees);
    } catch (error) {
        res.json({message: error.message});
    }

}

export const getEmployee = async (req, res)=>{
    try {
        const employee = await EmployeeModel.findOne({
            where:{id:req.params.id}
        });
        res.json(employee);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const createEmployee = async (req, res)=>{
    try {
        await EmployeeModel.create(req.body);
        res.json({message: "Empleado/a creado/a satisfactoriamente"});
    } catch (error) {
        res.json({message: error.message});
    }
}

export const updateEmployee = async (req, res)=>{
    try {
        await EmployeeModel.update(req.body,{
            where:{id:req.params.id}
        });
        res.json({message: "Empleado/a actualizado/a satisfactoriamente"});
    } catch (error) {
        res.json({message: error.message});
    }
}

export const deleteEmployee = async (req, res)=>{
    try {
        await EmployeeModel.destroy({
            where:{id:req.params.id}
        });
        res.json({message: "Empleado/a borrado/a satisfactoriamente"});
    } catch (error) {
        res.json({message: error.message});
    }
}