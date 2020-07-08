import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

export const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails key={book.id} book={book} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read, free time :)</div>
  );
};
