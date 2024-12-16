import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, increaseQuantity, decreaseQuantity, removeItem, selectCartItems, selectTotalQuantity, selectTotalAmount } from './cartSlice';
import './CartPage.css'; // Import custom CSS

const CartPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalAmount = useSelector(selectTotalAmount);

  const handleAddItem = (product) => {
    dispatch(addItem(product));
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary"> Cart Page</h1>

      <div className="row">
        <div className="col-lg-6">
          <h3 className="text-warning">Products</h3>
          {products.map((product) => (
            <div key={product.id} className="product-card mb-4 p-3 border rounded shadow-sm">
              <div className="row align-items-center">
                <div className="col-4">
                  {/* Displaying the unique image for each product */}
                  <img
                    src={product.image || product.thumbnail} // Assuming each product has a unique image
                    alt={product.title}
                    className="img-fluid product-image"
                  />
                </div>
                <div className="col-8">
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => handleAddItem(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-6">
          <h3 className="text-info">Your Cart</h3>
          {cartItems.length === 0 ? (
            <p className="text-muted">Your cart is empty. Add some products!</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item mb-4 p-3 border rounded shadow-sm">
                <div className="row align-items-center">
                  <div className="col-3">
                    {/* Displaying the unique image for each cart item */}
                    <img
                      src={item.image || item.thumbnail} // Assuming each cart item has a unique image
                      alt={item.title}
                      className="img-fluid cart-item-image"
                    />
                  </div>
                  <div className="col-6">
                    <h5>{item.title}</h5>
                    <p>Price: ${item.price}</p>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-warning me-2"
                        onClick={() => handleDecrease(item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-warning ms-2"
                        onClick={() => handleIncrease(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="btn btn-danger mt-2"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                    <p className="mt-2">Total for this item: ${item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))
          )}

          <div className="cart-summary mt-3 p-3 border rounded shadow-sm">
            <h5 className="text-primary">Total Quantity: {totalQuantity}</h5>
            <h5 className="text-success">Total Amount: ${totalAmount}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
