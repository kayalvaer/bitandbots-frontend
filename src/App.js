import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AuthProvider from "./components/AuthProvide";
import { SignIn } from "./scenes/Auth/SignIn";
import { SignUp } from "./scenes/Auth/SignUp";
import Cart from "./scenes/cart/Cart";
import ConfirmOrder from "./scenes/cart/ConfirmOrder";
import GameDetails from "./scenes/gameDetails/GameDetails";
import CollectionList from "./scenes/home/CollectionList";
import Home from "./scenes/home/Home";
import CartList from "./scenes/shared/CartList";
import Nav from "./scenes/shared/Navbar";

const ScrollTotop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <ScrollTotop />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="game/:gameId" element={<GameDetails />} />
            <Route path="browser" element={<CollectionList />} />
            <Route path="cart" element={<Cart />} />
            <Route path="cart/success" element={<ConfirmOrder />} />
            <Route path="login" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Routes>
        </AuthProvider>

        <CartList />
      </BrowserRouter>
    </div>
  );
}

export default App;
