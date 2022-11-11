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

  return (
    <div className="App">
      <div id="first-row">
        <Kerbonaut />
        <div id="logo-container">
          <img src="/jebs-garage-logo.svg" />
        </div>
      </div>
      <div id="second-row">
        <div id="first-col"></div>
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
          productName={productName}
          minimumPrice={minimumPrice}
          maximumPrice={maximumPrice}
          setOrder={setOrder}
          order={order}
        />
        <div id="last-col"></div>
      </div>
      <div id="free-row">
        <CartSection 
          products={products}
          setProducts={setProducts}
        />
      </div>
    </div>
  )
}

export default App
