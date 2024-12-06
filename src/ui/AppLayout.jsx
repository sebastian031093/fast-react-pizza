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
    <div className="layout">
      {isLoading && <Loader />}
      <Header />

      <main>
        <Outlet />
        <CartOverview />
      </main>
    </div>
  );
}

export default AppLayout;
