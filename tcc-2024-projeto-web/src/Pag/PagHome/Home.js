import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import imgcarrocel from '../../assets/img/imgcarrocel1.png';
import imgcarrocel2 from '../../assets/img/imgcarrocel2.png';

function Home() {
  return (
    <div>
      {/* Cabeçalho */}
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

      {/* Carrossel */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Primeira imagem */}
          <div className="carousel-item active">
            <img src={imgcarrocel} alt="Imagem do Carrossel" />
          </div>
          {/* Segunda imagem */}
          <div className="carousel-item">
            <img src={imgcarrocel2} alt="Imagem do Carrossel" />
          </div>
        </div>
        {/* Botões de navegação */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Seção Serviços */}
      <section className="servicos">
        <h3 className="servicos-titulo">Serviços</h3>
        <div className="servicos-container">
          <div className="servico-item">
            <img src="/path/to/atendimento.png" alt="Atendimento Veterinário" />
            <p>Atendimento Veterinário</p>
          </div>
          <div className="servico-item">
            <img src="/path/to/castracao.png" alt="Castração" />
            <p>Castração</p>
          </div>
          <div className="servico-item">
            <img src="/path/to/cirurgia.png" alt="Cirurgias" />
            <p>Cirurgias</p>
          </div>
          <div className="servico-item">
            <img src="/path/to/procedimentos.png" alt="Procedimentos" />
            <p>Procedimentos</p>
          </div>
          <div className="servico-item">
            <img src="/path/to/internacao.png" alt="Internação" />
            <p>Internação</p>
          </div>
          <div className="servico-item">
            <img src="/path/to/vacinacao.png" alt="Vacinação" />
            <p>Vacinação</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
