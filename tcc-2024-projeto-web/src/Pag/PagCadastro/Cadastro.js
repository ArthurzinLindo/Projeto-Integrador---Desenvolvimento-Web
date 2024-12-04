import React from 'react';
import './Cadastro.css';

function Cadastro() {
  return (
    <>
      {/* Cabeçalho */}
      <header className="navbar navbar-expand-lg bg-primary text-white py-2">
        <div className="container">
          <a href="#" className="navbar-brand text-white d-flex align-items-center">
            <span>MUNDO PET</span>
          </a>
        </div>
      </header>

      {/* Conteúdo da página de Cadastro */}
      <div className="container-cadastro">
        <div className="form-cadastro">
          <h2>Criando seu perfil</h2>
          <p>Os campos com (*) são obrigatórios</p>
          <form>
            {/* Dados Pessoais */}
            <div className="form-group">
              <label>Nome Completo*</label>
              <input type="text" placeholder="Digite seu nome completo" required />
            </div>
            <div className="form-group">
              <label>Selecione seu gênero*</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="gender" value="masculino" required /> Masc.
                </label>
                <label>
                  <input type="radio" name="gender" value="feminino" required /> Fem.
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Data de Nascimento*</label>
              <input type="date" required />
            </div>
            <div className="form-group">
              <label>Telefone*</label>
              <input type="tel" placeholder="Digite seu telefone" required />
            </div>
            <div className="form-group">
              <label>CPF*</label>
              <input type="text" placeholder="Digite seu CPF" required />
            </div>
            <div className="form-row">
              <div className="form-group half">
                <label>Estado*</label>
                <select required>
                  <option value="">Selecione</option>
                  <option value="SP">São Paulo</option>
                  <option value="RJ">Rio de Janeiro</option>
                  {/* Outros estados */}
                </select>
              </div>
              <div className="form-group half">
                <label>Cidade*</label>
                <input type="text" placeholder="Digite sua cidade" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group half">
                <label>CEP*</label>
                <input type="text" placeholder="Digite seu CEP" required />
              </div>
              <div className="form-group half">
                <label>Logradouro*</label>
                <input type="text" placeholder="Digite seu endereço" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group half">
                <label>Nº*</label>
                <input type="text" placeholder="Nº" required />
              </div>
              <div className="form-group half">
                <label>Complemento</label>
                <input type="text" placeholder="Complemento" />
              </div>
            </div>

            {/* Dados da Conta */}
            <h3>Crie uma conta</h3>
            <div className="form-group">
              <label>E-mail*</label>
              <input type="email" placeholder="usuario@example.com" required />
            </div>
            <div className="form-group">
              <label>Senha*</label>
              <input type="password" placeholder="Crie uma senha" required />
            </div>
            <div className="form-group">
              <label>Confirme a senha*</label>
              <input type="password" placeholder="Confirme sua senha" required />
            </div>

            <button type="submit" className="btn-cadastro">Confirmar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
