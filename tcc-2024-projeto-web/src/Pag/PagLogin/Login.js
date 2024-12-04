import React from "react";
import "./Login.css";

function Login() {
  return (

     <div className="Cabeçalho">
    <header className="navbar navbar-expand-lg bg-primary text-white py-2">
        <div className="container"></div>
          <a href="#" className="navbar-brand text-white d-flex align-items-center">
            <span>MUNDO PET</span>
          </a>
        </header>
      
    <div className="Bodylogin">
      
      <div className="login-container">
        <div className="login-box">
          <h2 className="text-center">Entre na sua conta</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Digite seu e-mail:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="usuariomundopet@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Digite sua senha"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Entrar
            </button>
            <p className="text-center mt-3">
              Não tem uma conta? <a href="#">Cadastre-se</a>
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
