import React, { createContext, useState } from "react";
import { uuid } from "uuidv4";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "School is Cool", author: "A.R. Ribgar", id: 1 },
    { title: "Coding Unlimited", author: "D.R. Iamar", id: 2 },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ addBook, removeBook, books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
