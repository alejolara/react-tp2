import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../cart/CartContext';
import { Link } from 'react-router-dom';
import {products} from '../../data';

function ItemDetail() {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity <= product.stock) {
      for (let i = 0; i < quantity; i++) {
        dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
      }
    } else {
      alert('No hay suficiente stock');
    }
  };

  useEffect(() => {
    const selectedProduct = products.find((product) => product.id.toString() === id);
    setProduct(selectedProduct);
  }, [id]);


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
                <div className="text-center">
                  <p>Cantidad:</p>
                  <button onClick={handleDecrement} disabled={quantity === 1}>-</button>
                  <span>{quantity}</span>
                  <button onClick={handleIncrement} disabled={quantity >= product.stock}>+</button>
                </div>
                <button onClick={handleAddToCart} className="btn btn-primary mx-auto d-block mb-2 mt-2">
                  Agregar al carrito
                </button>
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
