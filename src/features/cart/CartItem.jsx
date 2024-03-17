import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item, key }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  // console.log(typeof pizzaId);
  console.log("Key is", key);

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className=" py-3 sm:flex sm:items-center sm:justify-between">
      <p className=" mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className=" flex items-center justify-between sm:gap-6 ">
        <p className=" text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />

        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.object,
  key: PropTypes.string,
};
