import { Link } from "react-router-dom";
import SearchOrder from "../feactures/order/SearchOrder";

function Header() {
  return (
    <div>
      <Link>Fast React Pizza CO.</Link>
      <p>Jonas My sensei</p>

      <SearchOrder />
    </div>
  );
}

export default Header;
