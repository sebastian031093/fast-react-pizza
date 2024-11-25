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
    <div>
      {isLoading && <Loader />}
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
