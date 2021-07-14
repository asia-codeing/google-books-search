import axios from "axios";

export default {
    // Search Google Books
    searchBooks: function(searchKey) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchKey}`);
    },

   // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    },

    // Gets all books saved to the database
    getBooks: function () {
        return axios.get("/api/books");
    },

    // Gets the book with the given id from the database
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    // Deletes the book with the given id from the database
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }

};