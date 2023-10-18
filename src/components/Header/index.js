import React from 'react';
import { Link } from 'react-router-dom';
import { HiBars3 } from 'react-icons/hi2';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import 'bootstrap';
import { Nav } from './styled';
import history from '../../services/history';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.authFailure());
    history.push('/');
  };

  return (
    <Nav className="navbar navbar-expand-md sticky-top">
      <Link to="/" className="navbar-brand mr-0">
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
          {isLoggedIn ? (
            <>
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
                <Link onClick={handleLogout} to="/" className="nav-link">
                  Sair
                </Link>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </div>
    </Nav>
  );
}
