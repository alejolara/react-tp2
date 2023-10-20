import React from 'react';
import { BrowserRouter as Router, Route, Routes ,Link} from 'react-router-dom';
import NavBar from './componentes/navbar/NavBar';
import CategoryProducts from './componentes/item/CategoryProducts';
import { categories, products } from './data';
import ItemDetail from './componentes/item/ItemDetail';
import { CartProvider } from './componentes/cart/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
            <NavBar categories={categories} />
            <Routes>
              <Route path="/" element={<Home products={products} />} />
              <Route path="/inicio" element={<Inicio greeting="¡Bienvenido a Tiiiiienda!"/>} />
              <Route path="/categoria/:categoryId" element={<CategoryProducts products={products} />} />
              <Route path="/item/:id" element={<ItemDetail />} />
            </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

function Home({ products }) {
  return (
    <div className="container">
      <h1>Todos los Productos</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-3">
              <img src={product.image} className="card-img-top"/>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Stock: {product.stock} unidades</p>
                <p className="card-text">Descripcion: {product.description}</p>
                <p className="card-text">Precio: ${product.price}</p>
                <Link to={`/item/${product.id}`} className="btn btn-primary">
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function Inicio({greeting}) {
  return (
        <div className="container mt-5">
      <div className="jumbotron">
        <h2 className="display-4">{greeting}</h2>
        <p className="lead">Bienvenido a nuestra tienda</p>
      </div>
    </div>
  );
}
export default App;
