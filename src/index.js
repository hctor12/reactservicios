import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ServicioApiCustomers from "./components/ServicioApiCustomers";
import ServiceApiSuppliers from "./components/ServiceApiSuppliers";
<<<<<<< HEAD
import EmpleadosDepartamento from "./components/EmpleadosDepartamento";
import EmpleadosOficios from "./components/EmpleadosOficios";
=======
import Departamento from "./components/Departamento";
import Cursos from "./components/ejemplocomunicacion/Cursos";
import TablaMultiplicar from "./components/TablaMultiplicar";
import Router from "./components/Router";
import MenuRutas from "./components/MenuRutas";
>>>>>>> 99248d0cd898242bf81f662a45acd3dac906f626

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
<<<<<<< HEAD
    <EmpleadosOficios />
=======
    <MenuRutas />
    <Router />
>>>>>>> 99248d0cd898242bf81f662a45acd3dac906f626
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
