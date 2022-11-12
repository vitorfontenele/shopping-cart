import CardsSection from "./components/CardsSection/CardsSection";
import SearchSection from "./components/SearchSection/SearchSection";
import Kerbonaut from "./components/Kerbonaut/Kerbonaut";
import CartSection from "./components/CartSection/CartSection";
import parts from "./parts.json";
import "./App.css";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(parts);
  const [productName, setProductName] = useState("");
  const [maximumPrice, setMaximumPrice] = useState("");
  const [minimumPrice, setMinimumPrice] = useState("");
  const [order, setOrder] = useState("");

  const STEAL = () => {
      let CARRINHO = document.getElementById("cart-section");
      CARRINHO.classList.toggle("see");
  }

  return (
    <div className="App">
      <div id="first-row">
        <Kerbonaut />
        <div id="logo-container">
          <img src="/jebs-garage-logo.svg" />
        </div>
      </div>
      <div id="see-cart-container">
        <div className="first-col"></div>
        <h3 onClick={STEAL}>See/hide cart <i class="fa-solid fa-cart-shopping"></i></h3>
        <div className="last-col"></div>
      </div>
      <CartSection 
        products={products}
        setProducts={setProducts}
      />
      <div id="grid-area">
        <div className="first-col"></div>
        <SearchSection 
          productName={productName}
          setProductName={setProductName}
          maximumPrice={maximumPrice}  
          setMaximumPrice={setMaximumPrice}
          minimumPrice={minimumPrice}
          setMinimumPrice={setMinimumPrice}
          setOrder={setOrder}
        />
        <CardsSection 
          products={products}
          setProducts={setProducts}
          productName={productName}
          minimumPrice={minimumPrice}
          maximumPrice={maximumPrice}
          setOrder={setOrder}
          order={order}
        />
        <div className="last-col"></div>
      </div>
    </div>
  )
}

export default App
