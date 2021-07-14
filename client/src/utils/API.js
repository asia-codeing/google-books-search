import axios from "axios";

export default {
    // Search Google Books - working!
    searchBooks: function(searchKey) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchKey}`);
    },

    // Saves a book to MongoDB
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    },

    // Gets all books saved to MongoDB
    getBooks: function () {
        return axios.get("/api/books");
    },

    // Deletes the book with the given id from MongoDB
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },

    // Not used
    // Gets the book with the given id from MongoDB
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    }
};


// import axios from "axios";

// export default {
//   googleBook: function (req) {
//     return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req}`);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   },
//     // Gets saved books from DB
//     getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
  
// };



// import axios from "axios";

// export default {
//     // Gets all books from Google API 
//   getBooks: function() {
//       return axios.get("/api/books");
//   },
//   // Gets one book from mongodb
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//     // Deletes the book with the given id
//   deleteBook: function(id) {
//       return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//       return axios.post("/api/books", bookData)
//   }
// };
