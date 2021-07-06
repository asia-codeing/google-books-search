import axios from 'axios';
// eslint-disable-next-line import/no-anonymous-default-export
export default {

    googleBook: function (req) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req}`);
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    // Gets saved books from DB
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Gets book with the given ID
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id).then(result => result.data);
    },

}