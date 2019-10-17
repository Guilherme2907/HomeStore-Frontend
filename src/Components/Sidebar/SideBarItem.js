import React from "react";
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function SidebarItem({categorie,handleCategory}) {

    // colocar esse código em uma função utilitária
   const nome =  categorie.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
  return (
    <li>
      <Link to={`/categorias/${nome}`} onClick={() => handleCategory(categorie.id)} className="nav-link">
        {categorie.nome}
      </Link>
    </li>
  );
}
