import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ShowEmployees.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const url = "http://localhost:8000/employees/";

const ShowEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    const res = await axios.get(url);
    setEmployees(res.data);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`${url}${id}`);
    getEmployees();
  };

  const confirmDelete= (id)=>{
    MySwal.fire({
        title:"Está seguro/a que desea eliminar el/la empleado/a?",
        text: "Este proceso no se puede revertir",
        icon: "Warning",
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, deseo eliminar'
    }).then((result) => {
        if (result.isConfirmed) {
            deleteEmployee(id);
    Swal.fire(
            'Eliminado/a!',
            'Empleado/a eliminado/a.',
            'success'
    )
        }
    })
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="titulo-show mt-3">Manejo nómina de empleados</p>
          <div className="d-grid gap-2">
            <Link to="/create" className="bt-crear btn btn-primary mt-2 mb-2">
              CREAR
            </Link>
          </div>
          <div className="table-responsive">
            <table className="table table-success table-striped mt-3">
              <thead className="table-success">
                <tr>
                  <th>Legajo N°</th>
                  <th>Nombre/s</th>
                  <th>Apellido/s</th>
                  <th>Salario</th>
                  <th>Sector</th>
                  <th>Creado el</th>
                  <th>Editado el</th>
                  <th>Acciones (EDITAR/BORRAR)</th>
                </tr>
              </thead>

              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.first_name}</td>
                    <td>{employee.last_name}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.sector}</td>
                    <td>{employee.createdAt}</td>
                    <td>{employee.updatedAt}</td>
                    <td>
                      <Link to={`edit/${employee.id}`} className="btn btn-info me-3">
                        <i className="fas fa-edit"></i>
                      </Link>
                      <button
                        onClick={() => {confirmDelete(employee.id)}}
                        className="btn btn-danger"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowEmployees;
