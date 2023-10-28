import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  function handleOnAdd(quantity) {
    alert(`Agregaste ${quantity} a tu carrito`);
  }
  return (
    <div className="container">
      <h1 className="text-center">Detalles del Producto</h1>
      {product ? (
      <div>
        <div className="row">
          <div className="col-md-4">
            <img src={product.image} className="card-img-top"/>
          </div>
          <div className="col-md-4">
              <div className="card mb-2">
                <h2 className="text-center">{product.name}</h2>
                <p className="text-center">Precio: ${product.price}</p>
                <p className="text-center">Stock: {product.stock} unidades</p>
                <p className="text-center">Descripcion: {product.description} </p>
                <div className="text-center">
                  <ItemCount
                      initial={0}
                      stock={product.stock}
                      onAdd={handleOnAdd}
                      className="w-50"
                    />
                </div>
              </div>
              <Link to="/" className="text-center d-block">Volver a la lista de productos</Link>
          </div>
        </div>
      </div>

      ) : (
        <p className="text-center">Producto no encontrado</p>
      )} 
    </div>
    
  );
}

export default ItemDetail;
