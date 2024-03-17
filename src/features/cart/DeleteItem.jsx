import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";
import PropTypes from "prop-types";

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  // console.log(pizzaId);

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

DeleteItem.propTypes = [
  {
    pizzaId: PropTypes.number,
  },
];
