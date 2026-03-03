import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <main className="principal">    
            <h2>Página não encontrada</h2>
            <p>Desculpe, a página que você está procurando não existe.</p>
            <Link to="/">Voltar à página inicial</Link>
        </main>
    );
};
export default NotFound;