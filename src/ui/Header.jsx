import { Link } from "react-router-dom";
import SearchOrder from "../feactures/order/SearchOrder";
import UserName from "../feactures/user/UserName";

function Header() {
  return (
    <header className="bg-yellow-500 oppercase px-5 py-4 border-b border-stone-200 sm:px-6">
      <Link className="uppercase tracking-widest font-bold ">
        Fast React Pizza CO.
      </Link>
      <p>Jonas My sensei</p>

      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
