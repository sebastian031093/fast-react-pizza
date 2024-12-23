import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../feactures/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

//TODO: Oulet component is the way to use the children routs setup in your router

function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === "loading";

  //if(navigation.state === 'loading')

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen bg-stone-100">
      {isLoading && <Loader />}
      <Header />

      <div className="overflow-scroll">
        <main className="">
          {/* <main className=" max-w-3xl mx-auto bg-red-400"> */}
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
