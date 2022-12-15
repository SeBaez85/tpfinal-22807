import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./EditEmployee.css";

const url = "http://localhost:8000/employees/";

const EditEmployee = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [salary, setSalary] = useState(0);
  const [sector, setSector] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  const update = async (event) => {
    event.preventDefault();
    await axios.put(url + id, {
      first_name: first_name,
      last_name: last_name,
      salary: salary,
      sector: sector
    });

    navigate("/");
  };

  useEffect(() => {
    getEmployeeById();
    //eslint-disable-next-line
  }, []);

  const getEmployeeById = async () => {
    const res = await axios.get(url + id);
    setFirst_name(res.data.first_name);
    setLast_name(res.data.last_name);
    setSalary(res.data.salary);
    setSector(res.data.sector);
  };

  return (
    <div>
      <h3 className="titulo-editar">Editar empleado/a</h3>
      <form onSubmit={update}>
      <div className="mb-3">
            <label className="form-label">Ingrese el nombre del/la empleado/a que desea modificar:</label>
            <input value={first_name} onChange={(event)=>setFirst_name(event.target.value)} type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Ingrese el apellido del/la empleado/a que desea modificar:</label>
            <input value={last_name} onChange={(event)=>setLast_name(event.target.value)} type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Ingrese el salario del/la empleado/a que desea modificar:</label>
            <input value={salary} onChange={(event)=>setSalary(event.target.value)} type="number" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Ingrese el sector del/la empleado/a que desea modificar:</label>
            <input value={sector} onChange={(event)=>setSector(event.target.value)} type="text" className="form-control" />
        </div>
        <button type="submit" className="bt-edit btn btn-info">EDITAR</button>
        <br />
        <Link to="/" className="bt-atras btn btn-secondary mt-3">
                       ATRÁS
                      </Link>

      </form>
           
    </div>
  );
};

export default EditEmployee
