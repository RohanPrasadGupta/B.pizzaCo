import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className=" mx-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className=" p-8 mt-7 font-bold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
