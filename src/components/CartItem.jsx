import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import CartContext from "../store/CartContext";
export default function CartItem({ item }) {
  const cartCtx = useContext(CartContext);
  function handleIncreaseQuantity() {
    cartCtx.addItem(item);
  }
  function handleDecreaseQuantity() {
    cartCtx.removeItem(item.id);
  }
  return (
    <li className="cart-item">
      <p>
        {item.name} - {item.quantity} X {currencyFormatter.format(item.price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={handleDecreaseQuantity}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncreaseQuantity}>+</button>
      </p>
    </li>
  );
}
