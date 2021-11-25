import React, { useContext } from 'react';
import logoImg from '../../assets/canal10.png';
import { AuthContext } from '../../context/AuthContext';
import { LoginComp } from './LoginComp';
import { RegisterComp } from './RegisterComp';

export const NavComp = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className="container navbar navbar-light ">
      <div className="container d-flex flex-column">
        <div className="navbar-brand mb-4">
          <img src={logoImg} alt="logo" height="50" />
        </div>
        <div className="d-flex">
          <div className="col mb-4">
            {currentUser ? (
              <>
                <div className="btn btn-secondary mx-2 disabled">
                  {currentUser.email}
                </div>
                <div onClick={() => logout()} className="btn btn-outline-secondary mx-2">
                  SALIR
                </div>
              </>
            ) : (
              <>
                <LoginComp />
                <RegisterComp />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
