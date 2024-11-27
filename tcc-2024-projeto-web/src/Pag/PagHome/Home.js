import React from "react";
import "./Home.css";

function Home() {
  return (

    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center" href="#">
      <span class="fw-bold text-primary">MUNDO PET</span>
      <i class="bi bi-house ms-2"></i>
    </a>
    <div class="d-flex">
      <button class="btn btn-outline-primary me-2">Entrar</button>
      <button class="btn btn-primary">Cadastrar</button>
    </div>
  </div>
</nav>
    </div>

  );
}

export default Home;
