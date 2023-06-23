import React from "react";
import "./navbar.css";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
const Navbar = ({ searchInput, handleSearchInputChange, setSearchInput }) => {
  const notify = () =>
    toast.warn("You have clear the search input", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const handleReove = () => {
    notify();
    setSearchInput("");
  };
  return (
    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">Snack Catalog</div>
      </div>
      <div className="search">
        <input
          placeholder="Search by product name or ingredients..."
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        {searchInput && <RxCross2 size={24} onClick={handleReove} />}
      </div>
      <div className="Link">
        <a href="#">Home</a>
      </div>
    </div>
  );
};

export default Navbar;
