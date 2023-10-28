import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryProductView from './CategoryProductView';
import { categories } from '../../data';

function CategoryProducts({ products }) {
  const { categoryId } = useParams();
  const filteredProducts = products.filter((product) => product.categoryId.toString() === categoryId);
  const category = categories.find((cat) => cat.id.toString() === categoryId);

  const categoryName = category ? category.name : 'Categoría no encontrada';
  return (
    <div className="container">
        <h1 className="text-center">Categoría: {categoryName}</h1>
      <div className="row">
          {filteredProducts.map((product) => (
            product ? <CategoryProductView product={product} /> : <p>Producto no encontrado</p>
        ))}
      </div>
    </div>
  );
}
export default CategoryProducts;