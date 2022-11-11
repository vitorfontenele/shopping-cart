import CardsSection from "./components/CardsSection/CardsSection";
import SearchSection from "./components/SearchSection/SearchSection";
import Kerbonaut from "./components/Kerbonaut/Kerbonaut";
import "./App.css";

import { useState } from "react";

function App() {
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
          productName={productName}
          minimumPrice={minimumPrice}
          maximumPrice={maximumPrice}
          setOrder={setOrder}
          order={order}
        />
        <div id="last-col"></div>
      </div>
    </div>
  )
}

export default App
