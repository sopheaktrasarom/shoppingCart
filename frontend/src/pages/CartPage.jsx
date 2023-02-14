import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCart,
  removeCart,
  getTotal,
} from "../Components/features/cartSlice";
import "./CartPage.css";
export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  function handleDeleteCart(item) {
    dispatch(removeCart(item));
  }
  function handleDecreaseCart(item) {
    dispatch(decreaseCart(item));
    console.log("decrease");
  }
  function handleIncreaseCart(item) {
    dispatch(addToCart(item));
  }
  function handleClear() {
    dispatch(clearCart());
  }
  return (
    <section className="section">
      <div className="cart_container">
        <h2 style={{ textAlign: "center", marginBlock: "50px" }}>
          Shopping Cart
        </h2>
        {cart.cartItems.length === 0 ? (
          <div className="cart_empty">
            <p>Your cart is current empty</p>
            <div className="start_shopping">
              <Link to="/">
                <span>Start shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="item_info">
            <div className="item">
              <div className="item_title">
                <h2>Product</h2>
                <h2>Price</h2>
                <h2>Quantity</h2>
                <h2>Total</h2>
              </div>
              {cart.cartItems &&
                cart.cartItems.map((item) => {
                  return (
                    <>
                      <div className="cart_info">
                        {/* cart Item */}
                        <div className="cart_item">
                          <div className="image_cart">
                            <img src={item.img} alt={item.img} />
                          </div>
                          <div className="cart_content">
                            <h2>{item.name}</h2>
                            <p>{item.des} inch display</p>
                            <button onClick={() => handleDeleteCart(item)}>
                              Remove
                            </button>
                          </div>
                        </div>

                        {/* cart price */}

                        <div>
                          <p className="pricd">${item.price}</p>
                        </div>
                        {/* cart quantity */}
                        <div className="quantity">
                          <span onClick={() => handleDecreaseCart(item)}>
                            -
                          </span>
                          <span>{item.cartQuantity}</span>
                          <span onClick={() => handleIncreaseCart(item)}>
                            +
                          </span>
                        </div>
                        {/* total price */}
                        <div className="total_price">
                          ${item.price * item.cartQuantity}
                        </div>
                      </div>
                    </>
                  );
                })}
              <div className="summary">
                <div className="clear_cart">
                  <button
                    className="clear_cartbtn"
                    onClick={() => handleClear()}
                  >
                    Clear Cart
                  </button>
                </div>
                <div className="subtotal">
                  <div className="sutotal_content">
                    <h2>Subtotal</h2>
                    <span className="total">${cart.cartTotalAmount}</span>
                  </div>
                  <p>Taxes and shipping calculate at checkout</p>
                  <button className="checkoutbutton">Check out</button>
                  <div className="continue_shpping">
                    <i className="bx bx-left-arrow-alt"></i>
                    <p>Continue shipping</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
