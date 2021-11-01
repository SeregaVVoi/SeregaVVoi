import React, { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./components/HomePage/HomePage";
import { ProductsPage } from "./components/ProductsPage/ProductsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

export const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(
      "https://api.thedogapi.com/v1/breeds?limit=8&page=0"
    );
    setProducts(await response.json());
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/products">
            <ProductsPage products={products} />
          </Route>
          <Route path="/">
            <HomePage products={products} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
