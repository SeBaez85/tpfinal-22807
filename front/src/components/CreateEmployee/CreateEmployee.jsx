import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./CreateEmployee.css"

const url = "http://localhost:8000/employees/";

const CreateEmployee = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [salary, setSalary] = useState(0);
  const [sector, setSector] = useState("");

  const navigate = useNavigate();

  const crear = async (event) => {
    event.preventDefault();

    await axios.post(url, {

      //campo BD: const de mi estado  
      first_name: first_name,
      last_name: last_name,
      salary: salary,
      sector: sector,
    });
    navigate("/");
  };

  return (
    <div>
      <h3 className="titulo-crear mb-4">Crear/agregar empleado/a</h3>
      <form onSubmit={crear}>
        <div className="mb-3">
            <label className="form-label">Ingrese el nombre del/la empleado/a:</label>
            <input value={first_name} onChange={(event)=>setFirst_name(event.target.value)} type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Ingrese el apellido del/la empleado/a:</label>
            <input value={last_name} onChange={(event)=>setLast_name(event.target.value)} type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Ingrese el salario del/la empleado/a:</label>
            <input value={salary} onChange={(event)=>setSalary(event.target.value)} type="number" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Ingrese el sector del/la empleado/a:</label>
            <input value={sector} onChange={(event)=>setSector(event.target.value)} type="text" className="form-control" />
        </div>
        
        <button type="submit" className="bt-crea btn btn-primary">CREAR</button>
        <br />
        <Link to="/" className="bt-atras btn btn-secondary mt-3">
                       ATRÁS
                      </Link>
      </form>
    </div>
  );
};

export default CreateEmployee;
