import React from "react";
import { Route } from "react-router-dom";


<Route path="/" element={<Home />} />

function Home() {
    return <h1>Bem-vindo à Página Home</h1>;
}

export default Home;