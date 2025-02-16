import { Link } from "react-router-dom";

function Button({ children, isSubmitting, to, type, onClick }) {
  const base =
    "bg-yellow-400 text-sm uppercase font-semibold uppercase text-stone-800  inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " py-3 px-4 sm:px-6 sm:py-4",
    small: base + " px-4 py-2 sm:px-5 sm:py-2.5 text-xs",

    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",

    secondary:
      "border-2 text-sm border-stone-300 uppercase text-stone-500  inline-block tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 sm:px-5 sm:py-3.5 text-x",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={styles[type]}
        disabled={isSubmitting}
      >
        {children}
      </button>
    );
  }

  return (
    <button className={styles[type]} disabled={isSubmitting}>
      {children}
    </button>
  );
}

export default Button;
