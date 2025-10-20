import React, { useEffect, useState } from "react";

const Collatz = (props) => {
  const [collatz, setCollatz] = useState([]);

  const generarCollatz = () => {
    let numero = parseInt(props.numero);
    console.log(numero);
    let aux = [];
    aux.push(numero);
    let num;

    while (numero !== 1) {
      if (numero % 2 === 0) {
        num = numero / 2;
      } else {
        num = numero * 3 + 1;
      }
      aux.push(num);
      numero = num;
    }
    setCollatz(aux);
  };

  useEffect(() => {
    generarCollatz();
  }, []);
  return (
    <div>
      <ul>
        {collatz.map((num, index) => {
          return <li key={index}>{num}</li>;
        })}
      </ul>
    </div>
  );
};

export default Collatz;
