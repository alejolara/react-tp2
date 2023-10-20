import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../cart/CartWidget';

function NavBar({ categories }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <a className="navbar-brand" href="/inicio">Tiiiiienda</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            {categories.map((category) => (
              <li className="nav-item" key={category.id}>
                <Link to={`/categoria/${category.id}`} className="nav-link">
                  {category.name}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
