import React, { useEffect, useState } from "react";
import axios from "axios";
import Global from "./Global";

const Empleados = (props) => {
  const [empleados, setEmpleados] = useState([]);
  const URL = Global.urlEmpleados;

  const loadEmpleados = () => {
    let idDepartamento = props.iddepartamento;
    let request = "api/Empleados/empleadosdepartamento/" + idDepartamento;
    axios.get(URL + request).then((response) => {
      console.log("Leyendo empleados...");
      setEmpleados(response.data);
    });
  };

  useEffect(() => {
    loadEmpleados();
  }, [props.iddepartamento]);
  return (
    <div>
      <h2>Empleados Component {props.iddepartamento}</h2>
      <ul>
        {empleados.map((empleado, index) => {
          return (
            <li key={index}>
              {empleado.apellido} - {empleado.oficio} - {empleado.departamento}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Empleados;
