import React, { useEffect, useRef, useState } from "react";
import Global from "../Global";
import axios from "axios";

const EmpleadosDepartamento = () => {
  const urlEmpleados = Global.empleadosUrl;
  const urlDepartamentos = Global.departamentosUrl;
  const selectDepartamento = useRef();
  const [empleados, setEmpleados] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);

  const buscarEmpleados = (e) => {
    e.preventDefault();
    let request = "api/Empleados/EmpleadosDepartamento/";
    let id = selectDepartamento.current.value;
    axios.get(urlEmpleados + request + parseInt(id)).then((response) => {
      console.log(response.data);
      setEmpleados(response.data);
    });
  };

  const loadDepartamentos = () => {
    let request = "webresources/departamentos";
    axios.get(urlDepartamentos + request).then((response) => {
      setDepartamentos(response.data);
    });
  };

  useEffect(() => {
    loadDepartamentos();
  }, []);

  return (
    <div>
      <h1 style={{ color: "blue" }}>Api Empleados Departamento</h1>
      <form>
        <label htmlFor="selectDepartamento">Seleccione Departamento </label>
        <select
          name="selectDepartamento"
          ref={selectDepartamento}
          onChange={buscarEmpleados}
        >
          {departamentos.map((dep, index) => {
            return (
              <option key={index} value={dep.numero}>
                {dep.nombre}
              </option>
            );
          })}
        </select>
        <button onClick={buscarEmpleados} style={{ marginLeft: "5px" }}>
          Buscar
        </button>
      </form>
      <div style={{ display: "flex" }}>
        {empleados.map((empleado, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: "lightblue",
                width: "25%",
                borderRadius: "10px",
                padding: "3px",
                margin: "3px",
              }}
            >
              <p>
                <b>ID Empleado:</b> {empleado.idEmpleado}
              </p>
              <p>
                <b>Apellido:</b> {empleado.apellido}
              </p>
              <p>
                <b>Oficio:</b> {empleado.oficio}
              </p>
              <p>
                <b>Salario:</b> {empleado.salario}
              </p>
              <p>
                <b>Departamento:</b> {empleado.departamento}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmpleadosDepartamento;
