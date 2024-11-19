import React from "react";
import Home from "./Pag/home";
import Login from "./Pag/login";
import Cadastro from "./Pag/cadastro";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>  
        <Link to="/login">Login</Link>  
        <Link to="/cadastro">Cadastro</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
