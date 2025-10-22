import React, { useEffect, useState } from "react";

const TablaMultiplicar = (props) => {
  const [tabla, setTabla] = useState([]);

  const generarTablaMultiplicar = () => {
    let aux = [];

    let numero = parseInt(props.numero);

    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;

      aux.push(resultado);
    }
    setTabla(aux);
  };

  useEffect(() => {
    generarTablaMultiplicar();
  }, []);
  return (
    <div>
      <h1>Tabla Multiplicar Rutas</h1>
      <h3>Numero {props.numero}</h3>
      <ul>
        {tabla.map((num, index) => {
          return <li key={index}>{num}</li>;
        })}
      </ul>
    </div>
  );
};

export default TablaMultiplicar;
