import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

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
          <Button type="small">Add to cart</Button>
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
