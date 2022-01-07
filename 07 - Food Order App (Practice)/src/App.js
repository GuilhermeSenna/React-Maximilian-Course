import { useState } from 'react';
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from './store/CartProvider';

function App() {

  // Cart modal handler
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    // React Context Usage
    // Used to show current cart contents
    // More informations in CartProvider.js
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}

      {/* Header: Navbar w/ title, cart icon and image below */}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
