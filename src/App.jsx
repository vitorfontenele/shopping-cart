import CardsSection from "./components/CardsSection/CardsSection";
import SearchSection from "./components/SearchSection/SearchSection";
import "./App.css";

import { useState } from "react";

function App() {
  const [productName, setProductName] = useState("");
  const [maximumPrice, setMaximumPrice] = useState("");
  const [minimumPrice, setMinimumPrice] = useState("");

  return (
    <div className="App">
      <div id="first-col"></div>
      <SearchSection 
        productName={productName}
        setProductName={setProductName}
        maximumPrice={maximumPrice}  
        setMaximumPrice={setMaximumPrice}
        minimumPrice={minimumPrice}
        setMinimumPrice={setMinimumPrice}
      />
      <CardsSection 
        productName={productName}
        minimumPrice={minimumPrice}
        maximumPrice={maximumPrice}
      />
      <div id="last-col"></div>
    </div>
  )
}

export default App
