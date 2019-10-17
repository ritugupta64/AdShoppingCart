import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ProductUI from "./components/product/productUI";
import CartUI from "./components/cart/cartUI";

import "./App.css";


function App() {
  return (
    <div className="mainContainer">
        <BrowserRouter>
            <Route exact path="/" component = {ProductUI} />
            <Route path="/cart" component = {CartUI} />
        </BrowserRouter>
    </div>
  );
}

export default App;
