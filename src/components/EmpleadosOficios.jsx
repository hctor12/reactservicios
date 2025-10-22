import React, { useState, useRef, useEffect } from "react";
import Global from "../Global";
import axios from "axios";

const EmpleadosOficios = () => {
  const url = Global.empleadosUrl;

  const [oficios, setOficios] = useState([]);
  const [empleados, setEmpleados] = useState([]);
  const [empleadosFiltrados, setEmpleadosFitlrados] = useState([]);
  const selectOficios = useRef();

  const loadOficios = () => {
    let aux = [];
    let requestEmpleados = "api/Empleados";
    axios.get(url + requestEmpleados).then((response) => {
      for (const empleado of response.data) {
        if (!aux.includes(empleado.oficio)) {
          aux.push(empleado.oficio);
        }
      }
      setOficios(aux);
    });
  };

  const loadEmpleados = () => {
    console.log("cargado");
    let oficioSeleccionado = selectOficios.current.value;
    console.log(oficioSeleccionado);
    let aux = [];
    for (const empleado of empleados) {
      if (empleado.oficio === oficioSeleccionado) {
        aux.push(empleado);
      }
    }
    console.log(empleados);
    setEmpleadosFitlrados(aux);
  };

  //   useEffect(() => {
  //     loadOficios();
  //     setTimeout(() => {
  //       loadEmpleados();
  //     }, 10000);
  //   }, []);

  return (
    <div>
      <h1>Empleados Oficios</h1>
      <form>
        <label htmlFor="selectOficios">Seleccione Oficio</label>
        <select
          name="selectOficios"
          ref={selectOficios}
          onChange={loadEmpleados}
        >
          {oficios.map((oficio, index) => {
            return <option key={index}>{oficio}</option>;
          })}
        </select>
      </form>

      <table border={1}>
        <thead>
          <tr>
            <th>Apellido</th>
            <th>Oficio</th>
            <th>Salario</th>
          </tr>
        </thead>
        <tbody>
          {empleadosFiltrados.map((empleado, index) => {
            return (
              <tr key={index}>
                <td>{empleado.apellido}</td>
                <td>{empleado.oficio}</td>
                <td>{empleado.salario}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmpleadosOficios;
