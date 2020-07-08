import React, { createContext, useState, useEffect } from "react";
import { uuid } from "uuidv4";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState(() => {
    // added local storage
    const localData = localStorage.getItem("books");
    // ternary operator to check if localData has data return it as an object using JSON.parse
    // else return empty array as the default value for "books"
    return localData ? JSON.parse(localData) : [];
  });
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  useEffect(() => {
    console.log("Mounted");
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ addBook, removeBook, books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
