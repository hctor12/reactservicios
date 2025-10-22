import axios from "axios";
import { useState, useRef, useEffect } from "react";
import Global from "../Global";

const ServiceApiSuppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [buscado, setBuscado] = useState({});
  const cajaID = useRef();

  const loadSuppliers = () => {
    let request = "Suppliers";
    axios.get(Global.northWindUrl + request).then((response) => {
      setSuppliers(response.data.value);
    });
  };

  const getSupplier = (e) => {
    e.preventDefault();
    for (const sup of suppliers) {
      if (parseInt(sup.SupplierID) === parseInt(cajaID.current.value)) {
        console.log(sup.CompanyName);
        setBuscado({
          ContactName: sup.ContactName,
          City: sup.City,
        });
      }
    }
  };

  useEffect(() => {
    loadSuppliers();
  }, []);

  return (
    <div>
      <h1>Service Api Suppliers</h1>
      <form onSubmit={getSupplier}>
        <input type="number" ref={cajaID} placeholder="Introduzca ID" />
        <button>Buscar</button>
      </form>
      <ul>
        {suppliers.map((supplier) => {
          return (
            <li key={supplier.SupplierID} style={{ listStyle: "none" }}>
              ID: {supplier.SupplierID}, Contact Name: {supplier.ContactName}
            </li>
          );
        })}
      </ul>
      <div style={{ color: "green" }}>
        {buscado.ContactName ? (
          <>
            {console.log(buscado)}
            <h1>ContactName: {buscado.ContactName}</h1>
            <h1>City: {buscado.City}</h1>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ServiceApiSuppliers;
