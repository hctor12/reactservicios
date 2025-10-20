import React, { useEffect, useRef, useState } from "react";
import Global from "../Global";
import axios from "axios";
import Alumnos from "./Alumnos";

const Cursos = () => {
  const selectCurso = useRef();
  const [cursos, setCursos] = useState([]);
  const [cursoSelected, setCursoSelected] = useState(0);
  const urlCursos = Global.urlCursos;
  const [detalleAlumno, setDetalleAlumno] = useState([]);

  const loadCursos = () => {
    axios.get(urlCursos).then((response) => {
      setCursos(response.data);
    });
  };

  const getCurso = () => {
    let idCurso = parseInt(selectCurso.current.value);
    setCursoSelected(idCurso);
  };

  useEffect(() => {
    loadCursos();
  }, []);
  return (
    <div>
      <h1>PRACTICA JQUERY</h1>
      <select ref={selectCurso} onChange={getCurso}>
        <option>SELECCIONE CURSO</option>
        {cursos.map((curso, index) => {
          return (
            <option key={index} value={curso}>
              {curso}
            </option>
          );
        })}
      </select>
      {detalleAlumno.nombre && (
        <div>
          <h1>
            {detalleAlumno.nombre} {detalleAlumno.apellidos}
          </h1>
          <h1>IdAlumno: {detalleAlumno.idAlumno}</h1>
          <img
            src={detalleAlumno.img}
            alt="Imagen alumno"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
      )}
      {cursoSelected != 0 && (
        <Alumnos idCurso={cursoSelected} setDetalleAlumno={setDetalleAlumno} />
      )}
    </div>
  );
};

export default Cursos;
