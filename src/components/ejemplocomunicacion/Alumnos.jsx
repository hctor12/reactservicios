import React, { useEffect, useState } from "react";
import Global from "../Global";
import axios from "axios";

const Alumnos = (props) => {
  const urlAlumnos = Global.urlAlumnos;
  const [alumnos, setAlumnos] = useState([]);
  let curso = props.idCurso;

  const loadAlumnos = () => {
    console.log(curso);
    let request = parseInt(props.idCurso);
    request !== 0 &&
      !isNaN(curso) &&
      axios.get(urlAlumnos + request).then((response) => {
        console.log(response.data);
        setAlumnos(response.data);
      });
  };

  useEffect(() => {
    loadAlumnos();
  }, [curso]);

  return (
    <div>
      <ul>
        {alumnos.map((alumno, index) => {
          return (
            <li key={index}>
              {alumno.nombre} {alumno.apellidos}
              <button
                onClick={() => {
                  let alu = {
                    nombre: alumno.nombre,
                    apellidos: alumno.apellidos,
                    idAlumno: alumno.idAlumno,
                    img: alumno.imagen,
                  };
                  props.setDetalleAlumno(alu);
                }}
              >
                Detalles
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Alumnos;
