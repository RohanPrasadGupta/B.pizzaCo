import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  // console.log(currentQuantity);

  const isInCart = currentQuantity > 0;

  function handleAddTOCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  // console.log(id, name, unitPrice, ingredients, soldOut, imageUrl);
  return (
    <li className=" flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className=" flex flex-col grow py-0.5">
        <p className=" font-medium">{name}</p>
        <p className=" hidden">{id}</p>
        <p className=" text-sm italic text-stone-500 capitalize">
          {ingredients.join(", ")}
        </p>
        <div className=" mt-auto flex  items-center justify-between">
          {!soldOut ? (
            <p className=" text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className=" uppercase text-sm font-medium text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className=" flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddTOCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    soldOut: PropTypes.bool.isRequired,
    unitPrice: PropTypes.number.isRequired,
  }),
};

export default MenuItem;
