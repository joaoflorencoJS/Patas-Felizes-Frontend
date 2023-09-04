import React from 'react';
import { Link } from 'react-router-dom';
import { HiBars3 } from 'react-icons/hi2';
import { FaSignInAlt } from 'react-icons/fa';
import { Nav } from './styled';
import 'bootstrap';

export default function Header() {
  return (
    <Nav className="navbar navbar-expand-md sticky-top">
      <Link to="/" className="navbar-brand">
        Patas Felizes - Adoção e Amor
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <HiBars3 size={30} />
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/adocao" className="nav-link">
              Adoção
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/denuncia" className="nav-link">
              Denunciar
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/info" className="nav-link">
              Informações
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <FaSignInAlt size={22} />
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link btn-outline-register">
              Registrar
            </Link>
          </li>
        </ul>
      </div>
    </Nav>
  );
}
