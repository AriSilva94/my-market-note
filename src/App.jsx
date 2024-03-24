import PurchaseCategoryList from "./components/PurchaseCategoryList";
import ItemsList from "./components/ItemsList";
import Header from "./components/Header";
import { useState, useEffect } from "react";

function App() {
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/posts", requestOptions)
      .then((response) => response.json())
      .then((result) => setCategoryItems(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="App">
      <Header />
      <div className="card">
        <PurchaseCategoryList {...{ categoryItems }} />
      </div>
    </div>
  );
}

export default App;
