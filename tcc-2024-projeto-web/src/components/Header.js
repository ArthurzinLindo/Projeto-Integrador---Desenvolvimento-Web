import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Estilos para o cabeçalho

function Header() {
  return (
    <header className="navbar navbar-expand-lg bg-primary text-white py-2">
      <div className="container">
        <a href="#" className="navbar-brand text-white d-flex align-items-center">
          <span>MUNDO PET</span>
        </a>
        <div className="ms-auto">
          <Link to="/Login">
            <button type="button" className="btn btn-outline-primary me-2">Entrar</button>
          </Link>
          <Link to="/Cadastro">
            <button type="button" className="btn btn-outline-primary">Cadastrar</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;