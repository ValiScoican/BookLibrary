import AppRoutes from "./appRoutes";
import { UserProvider } from "./provider/LoginProvider";
import { ShoppingCartProvider } from "./provider/ShoppingCartProvider";

const App = () => {
  return (
    <UserProvider>
      <ShoppingCartProvider>
        <AppRoutes />;
      </ShoppingCartProvider>
    </UserProvider>
  );
};

export default App;
