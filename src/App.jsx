import { useState, useEffect } from "react";
import PurchaseCategoryList from "./components/PurchaseCategoryList";
import ItemsList from "./components/ItemsList";
import Header from "./components/Header";
import { IoAddCircle } from "react-icons/io5";

function App() {
  const [isCard, setIsCard] = useState(true);
  const [categoryItems, setCategoryItems] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setIsCard(true);
    getData();
  }, []);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/places", requestOptions)
      .then((response) => response.json())
      .then((result) => setCategoryItems(result))
      .catch((error) => console.log("error", error));
  };

  const getItems = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/foods", requestOptions)
      .then((response) => response.json())
      .then((result) => setItems(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div className="App">
        <Header />
        {isCard ? (
          <div className="card">
            <PurchaseCategoryList {...{ categoryItems }} />
          </div>
        ) : (
          <div className="">
            <ItemsList />
          </div>
        )}
      </div>
      <div className="add">
        <IoAddCircle style={{ color: "#163020", fontSize: "4em", zIndex: 1 }} />
      </div>
    </>
  );
}

export default App;
