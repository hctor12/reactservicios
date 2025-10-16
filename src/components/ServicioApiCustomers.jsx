import axios from "axios";
import React, { useEffect, useState } from "react";

const ServicioApiCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const URL = "https://services.odata.org/V4/Northwind/Northwind.svc/Customers";

  const loadCustomers = () => {
    console.log("Antes del servicio");
    axios.get(URL).then((response) => {
      //console.log(response.data.value);
      setCustomers(response.data.value);
    });
    console.log("Después del servicio");
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  return (
    <div>
      <h1>Servicio Api Customers</h1>
      <button>Load Customers</button>
      {customers.map((customer) => {
        return (
          <h3 key={customer.CustomerID} style={{ color: "blue" }}>
            {customer.ContactName}
          </h3>
        );
      })}
    </div>
  );
};

export default ServicioApiCustomers;
