import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type }) {
  const base =
    " bg-yellow-400 text-sm p-4 font-semibold inline-block text-stone-800 uppercase tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:bg-yellow-300 focus:ring focus:outline-none focus:ring-yellow-300 focus:ring-offset-2 ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2,md:px-5 md:py-2.5 text-xs",
    secondary:
      " bg-stone-400 p-4 text-sm font-semibold inline-block text-stone-800 uppercase tracking-wide rounded-full hover:bg-stone-300 transition-colors duration-300 focus:bg-stone-300 focus:ring focus:outline-none focus:ring-stone-300 focus:ring-offset-4 px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
};
