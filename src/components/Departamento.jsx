import React, { useEffect, useState } from "react";
import Empleados from "./Empleados";
import Global from "./Global";
import axios from "axios";

const Departamento = () => {
  const [departamentos, setDepartamentos] = useState([]);
  const [idDepartamento, setIdDepartamento] = useState(0);
  const selectDepartamento = React.useRef();
  const URL = Global.urlDepartamentos;

  const loadDepartamentos = () => {
    let request = "webresources/departamentos";
    axios.get(URL + request).then((response) => {
      setDepartamentos(response.data);
    });
  };

  const buscarEmpleados = (e) => {
    e.preventDefault();
    let idDepartamento = selectDepartamento.current.value;
    setIdDepartamento(idDepartamento);
  };

  useEffect(() => {
    loadDepartamentos();
  }, []);
  return (
    <div>
      <h1>Departamentos Component</h1>
      <form>
        <select className="bg-[#222]" ref={selectDepartamento}>
          {departamentos.map((departamentos, index) => {
            return (
              <option key={index} value={departamentos.numero}>
                {departamentos.nombre}
              </option>
            );
          })}
        </select>
        <button onClick={buscarEmpleados}>Buscar Empleados</button>
      </form>
      {idDepartamento != 0 && <Empleados iddepartamento={idDepartamento} />}
    </div>
  );
};

export default Departamento;
