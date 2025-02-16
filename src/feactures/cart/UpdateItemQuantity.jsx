import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItermQuantity, increaseItermQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItermQuantity(pizzaId))}
      >
        _
      </Button>
      <p>{currentQuantity}</p>
      <Button
        type="round"
        onClick={() => dispatch(increaseItermQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
