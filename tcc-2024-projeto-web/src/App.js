import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Pag/PagHome/Home';
import Login from './Pag/PagLogin/Login';
import Cadastro from './Pag/PagCadastro/Cadastro';

function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
