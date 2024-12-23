import { Link } from "react-router-dom";
import SearchOrder from "../feactures/order/SearchOrder";
import UserName from "../feactures/user/UserName";

function Header() {
  return (
    <header className=" flex items-center justify-between bg-yellow-400 oppercase px-5 py-4 border-b border-stone-200 sm:px-6 font-pizza">
      <Link className="uppercase tracking-widest font-bold ">
        Fast React Pizza CO.
      </Link>

      <UserName />
      <SearchOrder />
    </header>
  );
}

export default Header;
