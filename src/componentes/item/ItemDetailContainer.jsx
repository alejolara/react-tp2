import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {products} from '../../data';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find((product) => product.id.toString() === id);
    setProduct(selectedProduct);
  }, [id]);

  return (
    <div>
       {product ? <ItemDetail product={product} /> : <p>Producto no encontrado</p>}
    </div>
  );
}

export default ItemDetailContainer;