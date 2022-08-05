import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function POSPage() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const result = await axios.get("products");
    setProducts(await result.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <Link to="/" className="navbar-brand">
              Home
            </Link>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
            </form>
          </div>
        </nav>

      <main>
        <div className="container">
          <div className="bg-light p-3 mt-4 rounded-3">
            <h2> Shop Our Products! </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            {products.map((product, key) => (
              <div key={key} className="col-lg-4">
                <div className="border">
                  <p>{product.name}</p>
                  <img src={product.image} className="img-fluid" />
                  <p>${product.price}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}

export default POSPage;
