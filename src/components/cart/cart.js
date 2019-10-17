import React, { Component } from "react";
import Utilities from "../../utilities";

class Cart extends Component {
  render() {
    const {
      cartData,
      onRemoveFromCart,
      onIncrementedItem,
      incrementData,
      onDecrementedItem
    } = this.props;

    let price =
      cartData.reduce((a, c) => a + c.price * c.count, 0) * incrementData;
    let discount = cartData.reduce(
      (a, c) => a + (c.discount / 100) * c.price,
      0
    );

    let totalPriceAfterDiscount = price - discount;

    const cartListing = cartData.map(item => {
      return (
        <div className="cartInfo cartSubHeader" key={item.id}>
          <span className="cartSelection">
            {item.name}{" "}
            <button
              type="button"
              onClick={() => onRemoveFromCart(cartData, item)}
              className="removeItem"
            >
              X
            </button>
          </span>

          <span className="cartButtonSelection">
            <button
              type="button"
              onClick={() => onIncrementedItem(incrementData, item)}
            >
              +
            </button>
            <input type="number" value={incrementData} />
            <button
              type="button"
              onClick={() => onDecrementedItem(incrementData, item)}
            >
              -
            </button>
          </span>

          <span className="cartPrice">
            $
            {Utilities.savePrice(`${item.price}`, `${item.discount}`).toFixed(
              2
            ) * incrementData}
          </span>
        </div>
      );
    });
    return (
      <React.Fragment>
        <h3 className="cartHead">Order Summary</h3>
        <div className="cartContainer">
          <div className="cartInner">
            <div className="cartSubHeader">
              <h4>Items ({cartData.length})</h4>

              <h4>Qty</h4>

              <h4>Price</h4>
            </div>
            {cartListing}
          </div>

          <div className="totalInfo">
            <strong>Total</strong>
            <p className="cartTotalItems">
              <span className="">Items ({cartData.length})</span>
              <span>${price}</span>
            </p>

            <p className="cartTotalItems">
              <span className="">Discount %</span>
              <span>${discount}</span>
            </p>

            <p className="cartTotalItems cartTotal">
              <span className="">Total Price</span>
              <span>{totalPriceAfterDiscount}</span>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
