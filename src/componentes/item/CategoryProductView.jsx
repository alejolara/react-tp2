import React from 'react';
import { useParams , Link } from 'react-router-dom';

function CategoryProductsView({ product }) {

  return (
    <div className="col-md-4" key={product.id}>
        <div className="card">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">Stock: {product.stock} unidades</p>
            <p className="card-text">Descripción: {product.description}</p>
            <p className="card-text">Precio: ${product.price}</p>
            <Link to={`/item/${product.id}`} className="btn btn-primary">
                Ver detalles
            </Link>
            </div>
        </div>
    </div>
  );
}

export default CategoryProductsView;
