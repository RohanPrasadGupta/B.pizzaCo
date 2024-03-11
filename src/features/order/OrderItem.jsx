import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";

function OrderItem({ item }) {
  const { quantity, name, totalPrice } = item;

  // isLoadingIngredients, ingredients console.log(isLoadingIngredients, ingredients);

  return (
    <li className=" py-3 ">
      <div className=" flex items-center justify-between gap-4 text-sm">
        <p>
          <span className=" font-bold">{quantity}&times;</span> {name}
        </p>
        <p className=" font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

OrderItem.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default OrderItem;
