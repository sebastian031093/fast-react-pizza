import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  //TODO: To compute state do it at this form. derive state
  const totalQuantity = useSelector(getTotalQuantity);
  const totalPrice = useSelector(getTotalPrice);
  console.log("total", totalQuantity);

  if (!totalPrice) return null;

  return (
    <div className=" flex items-center justify-between bg-stone-800 text-stone-200 uppercase px-4 py-4 sm:px-6">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6 ">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
