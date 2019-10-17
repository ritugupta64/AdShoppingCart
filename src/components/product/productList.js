import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utilities from "../../utilities";

class ProductList extends Component {
  render() {
    const { productData, cartData, onAddToCart } = this.props;
    // console.log(this.props.cartData)
    const listing = productData.map(item => {
      return (
        <div className="items" key={item.id}>
          {item.discount > 0 ? (
            <span className="discount">{item.discount}% </span>
          ) : (
            ""
          )}

          <figure>
            <figcaption>Image Not Available</figcaption>
          </figure>

          <div className="information">
            <p>
              <mark>{item.name}</mark>
            </p>

            <div className="innerContainer">
              <div className="priceInfo">
                {item.discount ? (
                  <span className="oldPrice">${item.price}</span>
                ) : (
                  ""
                )}
                <span className="newPrice">
                  ${Utilities.savePrice(`${item.price}`, `${item.discount}`).toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                className="addToCartBtn"
                onClick={() => onAddToCart(cartData, item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <React.Fragment>
        <div className="productHeader">
          <h3>All Items</h3>
          {cartData.length > 0 ? (
            <Link className="cartHeaderInfo" to="/cart">Go to Cart {cartData.length}</Link>
          ) : (
            <span className="cartHeaderInfo">Go to Cart 0</span>
          )}
        </div>
        <div className="productContainer">{listing}</div>
      </React.Fragment>
    );
  }
}

export default ProductList;
