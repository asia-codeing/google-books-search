import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SearchBox, SearchBtn } from "../components/SearchBox/SearchBox";
import API from "../utils/API";
import BookCard from "../components/BookBox/BookBox";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("Boston"); 
        // enter what I want to load on page here - initializing starting searchTerm as "Boston"
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, []);

    function loadBooks() {
        API.searchBooks(searchTerm)
            .then(res =>
                setBooks(res.data.items)
            )
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { value } = event.target;
        setSearchTerm(value);
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (searchTerm) {
            loadBooks();
            console.log(books);
        };
    };

    function handleBookSubmit(book) {
        if (book.title) {
            API.saveBook(
                //bookData
                {
                    title: book.title,
                    subtitle: book.subtitle,
                    authors: book.authors,
                    description: book.description,
                    image: book.imageLinks.thumbnail,
                    link: book.infoLink
                }
            )
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    };

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <form>
                            <h2>Search for a book here:</h2>
                            <SearchBox
                                onChange={handleInputChange}
                                name="book search box"
                                placeholder="Keywords"
                            />
                            <SearchBtn
                                onClick={handleFormSubmit}
                            >
                                Search
                            </SearchBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
            <section className="pt-5">
                <Container>
                    <h2>Search results</h2>
                    <Row>

                        {books
                            ? books.map((book) => (
                                <BookCard 
                                    key={book.id} 
                                    data={book.volumeInfo} 
                                    page="search"
                                    handleBookSubmit={handleBookSubmit}
                                    />
                            ))
                            : null}
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Search;