import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  const coffee = books.length !== 0 ? `need coffee?` : "";
  return (
    <div className="navbar">
      <h1>Bestie's Book List</h1>
      <p>
        Currently you have {books.length} book(s) to complete...{coffee}
      </p>
    </div>
  );
};

export default Navbar;
