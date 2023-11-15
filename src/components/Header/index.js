import React from 'react';
import { Link } from 'react-router-dom';
import { HiBars3 } from 'react-icons/hi2';
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaUserAlt,
  FaUserCircle,
} from 'react-icons/fa';
import { BsHouseHeartFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import 'bootstrap';
import { Nav } from './styled';
import history from '../../services/history';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const ong = useSelector((state) => state.auth.ong);
  const { id } = user || ong;
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.authFailure());
    history.push('/login');
  };

  return (
    <Nav className="navbar navbar-expand-md sticky-top">
      <Link to={isLoggedIn ? '/adote' : '/'} className="navbar-brand mr-0">
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
                <Link to="/adote" className="nav-link">
                  Adoção
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/info" className="nav-link">
                  Informações
                </Link>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    type="button"
                    // className="dropdown-toggle"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <FaUserAlt size={28} />
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link
                      className="dropdown-item"
                      to={user ? `/user/${id}` : `/ong/${id}`}
                    >
                      <FaUserCircle size={22} /> Seu Perfil
                    </Link>
                    <Link
                      className="dropdown-item"
                      to={
                        user
                          ? `/user/${id}/minhas-doacoes`
                          : `/ong/${id}/minhas-doacoes`
                      }
                    >
                      <BsHouseHeartFill size={22} /> Minhas doações
                    </Link>
                    <div className="dropdown-divider" />
                    <Link
                      onClick={handleLogout}
                      to="/"
                      className="dropdown-item"
                    >
                      <FaSignOutAlt size={22} /> Sair
                    </Link>
                  </div>
                </div>
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
