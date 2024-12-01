import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (

    
    <header class="navbar navbar-expand-lg bg-primary text-white py-2">
  <div class="container">
    <a href="#" class="navbar-brand text-white d-flex align-items-center">

      <span>MUNDO PET</span>
    </a>
    <div class="ms-auto">
       <Link to="/Login">
       <button type="button" class="btn btn-outline-primary me-2">Entrar</button>
       </Link>
        <Link to="/Cadastro">
      <button type="button" class="btn btn-outline-primary">Cadastrar </button>
      </Link>
    </div>
  </div>

  
</header>


  );
}

export default Home;
