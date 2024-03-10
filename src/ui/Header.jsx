import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <div>
      <header className=" bg-yellow-500 uppercase">
        <Link to="/" className=" tracking-widest">
          B.Pizza Co.
        </Link>
        <SearchOrder />
        <Username />
      </header>
    </div>
  );
};

export default Header;
