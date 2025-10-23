import axios from "axios";
import React, { useEffect, useState } from "react";
import Global from "./Global";

const Trabajadores = (props) => {
  const [mensaje, setMensaje] = useState();
  const [trabajadores, setTrabajadores] = useState([]);
  const url = Global.apiTrabajadores;

  const loadTrabajadores = () => {
    let idsHospitales = props.idhospitales;
    let data = "";
    for (var id of idsHospitales) {
      data += `idhospital=${id}&`;
    }
    data = data.substring(0, data.length - 1);
    setMensaje(data);

    let request = "api/trabajadores/trabajadoreshospitales?" + data;
    axios.get(url + request).then((response) => {
      setTrabajadores(response.data);
    });
  };

  useEffect(() => {
    loadTrabajadores();
  }, [props.idhospitales]);
  return (
    <div>
      <h1 style={{ color: "blue" }}>Trabajadores</h1>
      <h2 style={{ color: "red" }}>{mensaje}</h2>
      <table
        style={{
          textAlign: "center",
          borderCollapse: "collapse",
        }}
        border={1}
      >
        <thead>
          <tr>
            <th>Apellido</th>
            <th>Oficio</th>
            <th>Salario</th>
            <th>ID Hospital</th>
          </tr>
        </thead>
        <tbody>
          {trabajadores.map((worker, index) => {
            return (
              <tr key={index}>
                <td>{worker.apellido}</td>
                <td>{worker.oficio}</td>
                <td>{worker.salario}</td>
                <td>{worker.idHospital}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Trabajadores;
