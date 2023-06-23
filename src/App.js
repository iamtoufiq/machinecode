import React, { useState } from "react";
import SnacksTable from "./components/tabel/SnacksTable";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const snacks = [
  {
    id: 1,
    product_name: "Granola Bar",
    product_weight: "21g",
    price: 299,
    calories: 150,
    ingredients: ["Oats", "Honey", "Nuts", "Dried Fruits"],
  },
  {
    id: 2,
    product_name: "Fruit and Nut Mix",
    product_weight: "73g",
    price: 749,
    calories: 353,
    ingredients: [
      "Almonds",
      "Cashews",
      "Dried Cranberries",
      "Dried Blueberries",
    ],
  },
  {
    id: 3,
    product_name: "Veggie Chips",
    product_weight: "28g",
    price: 279,
    calories: 130,
    ingredients: ["Sweet Potatoes", "Beets", "Kale", "Sea Salt"],
  },
  {
    id: 4,
    product_name: "Protein Balls",
    product_weight: "100g",
    price: 499,
    calories: 318,
    ingredients: ["Dates", "Almond Butter", "Protein Powder", "Chia Seeds"],
  },
];

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar
        searchInput={searchInput}
        handleSearchInputChange={handleSearchInputChange}
        setSearchInput={setSearchInput}
      />

      <h1
        style={{
          marginTop: "5rem",
          textAlign: "center",
          color: "green",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Snacks Data Table
      </h1>
      <SnacksTable
        snacksData={snacks}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearchInputChange={handleSearchInputChange}
      />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
