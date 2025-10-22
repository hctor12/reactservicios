import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Global from "./Global";
import Trabajadores from "./Trabajadores";

const HospitalesMultiples = () => {
  const selectHospital = useRef();
  const cajaIncremento = useRef();
  const [hospitales, setHospitales] = useState([]);
  const [hospitalesSeleccionados, setHospitalesSeleccionados] = useState([]);
  const url = Global.apiTrabajadores;

  const loadHospitales = () => {
    let request = "api/hospitales";
    axios.get(url + request).then((response) => {
      setHospitales(response.data);
    });
  };

  const getHospitalesSeleccionados = (e) => {
    e.preventDefault();
    let aux = [];
    let options = selectHospital.current.options;
    for (var option of options) {
      if (option.selected == true) {
        aux.push(option.value);
      }
    }
    setHospitalesSeleccionados(aux);
  };

  const incrementarSalario = (e) => {
    e.preventDefault();
    let aux = [];
    let options = selectHospital.current.options;
    for (var option of options) {
      if (option.selected == true) {
        aux.push(option.value);
      }
    }
    let data = "";
    let incremento = parseInt(cajaIncremento.current.value);
    console.log(aux);
    for (var id of aux) {
      data += `idhospital=${id}&`;
    }
    data = data.substring(0, data.length - 1);
    let request =
      "api/Trabajadores/UpdateSalarioTrabajadoresHospitales?incremento=" +
      incremento +
      "&" +
      data;

    axios.put(url + request).then((response) => {});
  };

  useEffect(() => {
    loadHospitales();
  }, []);
  return (
    <div>
      <h1>Hospitales múltiple</h1>
      <form>
        <select size={8} multiple ref={selectHospital}>
          {hospitales.map((hosp, index) => {
            return (
              <option key={index} value={hosp.idHospital}>
                {hosp.nombre}
              </option>
            );
          })}
        </select>
        <label>Incrementar Salario</label>
        <input type="number" ref={cajaIncremento} />
        <button onClick={incrementarSalario}>Incrementar</button>
        <button onClick={getHospitalesSeleccionados}>
          Mostrar Trabajadores
        </button>
      </form>
      {hospitalesSeleccionados.length != 0 && (
        <Trabajadores idhospitales={hospitalesSeleccionados} />
      )}
    </div>
  );
};

export default HospitalesMultiples;
