import React, { Component } from "react";
import Cart from "./cart";
import { connect } from "react-redux";
import { removeFromCart, incrementedItem, decrementedItem } from "../../redux/actions";

class CartUI extends Component {
  render() {
    return (
      <Cart
        cartData={this.props.cartReducer}
        onRemoveFromCart={this.props.removeFromCart}
        onIncrementedItem = {this.props.incrementedItem}
        onDecrementedItem = {this.props.decrementedItem}
        incrementData = {this.props.IncrementReducer}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    cartReducer: state.cartReducer.items,
    IncrementReducer: state.IncrementReducer.items
  };
};

export default connect(
  mapStateToProps,
  { removeFromCart, incrementedItem, decrementedItem }
)(CartUI);
