import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts, addToCart } from "../../redux/actions";


import ProductList from "./productList";

class ProductUI extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
    
        <ProductList
        productData={this.props.productReducer}
        onAddToCart={this.props.addToCart}
        cartData={this.props.cartReducer}
      />
  
    );
  }
}

const mapStateToProps = state => {
  return {
    productReducer: state.productReducer.items,
    cartReducer: state.cartReducer.items
  };
};

export default connect(
  mapStateToProps,
  { fetchProducts, addToCart }
)(ProductUI);
