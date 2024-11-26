import React from "react";
import "./Home.css";

function Home() {
  return (

    <div>
      <div>
        <header className= "Cabeçalho"></header>
        <div className="btnlogin"><button type="button" class="btn btn-outline-secondary">Login</button></div>
        <div className="btncadastro"></div>
        <h1 id="logado"></h1> 
        <button onclick="sair()">Sair</button>
      </div>
    </div>

  );
}

export default Home;
