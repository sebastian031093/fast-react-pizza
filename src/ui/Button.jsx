import { Link } from "react-router-dom";

function Button({ children, isSubmitting, to, type }) {
  const base =
    "bg-yellow-400 uppercase text-slate-800  inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " py-3 px-4 sm:px-6 sm:py-4",
    small: base + " px-4 py-2 sm:px-5 sm:py-2.5 text-xs ",
  };

  if (to === "/order/new")
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <button className={styles[type]} disabled={isSubmitting}>
      {children}
    </button>
  );
}

export default Button;
