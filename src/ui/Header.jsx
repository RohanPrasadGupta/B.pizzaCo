import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <div>
      <header className=" bg-yellow-400 uppercase px-4 py-3 border-b-2 border-stone-500 sm:px-6 flex  items-center justify-between">
        <Link to="/" className=" tracking-widest font-bold">
          B.Pizza Co.
        </Link>
        <SearchOrder />
        <Username />
      </header>
    </div>
  );
};

export default Header;
