import React, { useState, useEffect } from "react";
import "./snaketable.css";
import { toast } from "react-toastify";
const SnacksTable = ({ snacksData, searchInput }) => {
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortedOrder, setSortedOrder] = useState("asc");
  const [filteredSnacks, setFilteredSnacks] = useState(snacksData);
  const notify = (sortedColumn) =>
    toast.success(`shorted by ${sortedColumn}`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  useEffect(() => {
    filterSnacks();
  }, [searchInput, snacksData]);

  const handleSort = (column) => {
    if (sortedColumn === column) {
      setSortedOrder(sortedOrder === "asc" ? "desc" : "asc");
    } else {
      setSortedColumn(column);
      setSortedOrder("asc");
    }
  };

  const filterSnacks = () => {
    const searchTerm = searchInput.toLowerCase();
    const filteredData = snacksData.filter((snack) => {
      const productName = snack.product_name.toLowerCase();
      const ingredients = snack.ingredients.join(", ").toLowerCase();
      return (
        productName.includes(searchTerm) || ingredients.includes(searchTerm)
      );
    });

    setFilteredSnacks(filteredData);
  };

  const sortSnacks = () => {
    if (sortedColumn) {
      const sortedData = [...filteredSnacks].sort((a, b) => {
        const columnA = a[sortedColumn];
        const columnB = b[sortedColumn];

        if (typeof columnA === "string" && typeof columnB === "string") {
          return columnA.localeCompare(columnB);
        } else {
          return columnA - columnB;
        }
      });

      if (sortedOrder === "desc") {
        sortedData.reverse();
      }
      notify(sortedColumn);
      setFilteredSnacks(sortedData);
    }
  };

  useEffect(() => {
    sortSnacks();
  }, [sortedColumn, sortedOrder]);

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("id")}>ID</th>
              <th onClick={() => handleSort("product_name")}>Product Name</th>
              <th onClick={() => handleSort("product_weight")}>
                Product Weight
              </th>
              <th onClick={() => handleSort("price")}>Price</th>
              <th onClick={() => handleSort("calories")}>Calories</th>
              <th onClick={() => handleSort("ingredients")}>Ingredients</th>
            </tr>
          </thead>
          <tbody>
            {filteredSnacks.map((snack) => (
              <tr key={snack.id}>
                <td>{snack.id}</td>
                <td>{snack.product_name}</td>
                <td>{snack.product_weight}</td>
                <td>{snack.price}</td>
                <td>{snack.calories}</td>
                <td>{snack.ingredients.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filteredSnacks.length === 0 && (
        <h1 style={{ textAlign: "center", marginTop: "30vh", color: "red" }}>
          Please search for the correct Data
        </h1>
      )}
    </>
  );
};

export default SnacksTable;
