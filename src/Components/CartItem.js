import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useHover from "../Hooks/useHover";

export default function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);

  const [hovered, ref] = useHover();
  const iconName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={iconName}
        onClick={() => removeFromCart(item.id)}
        ref={ref}
      ></i>
      <img src={item.url} width="130px" alt="item" />
      <p>$5.99</p>
    </div>
  );
}
CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};
