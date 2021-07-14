import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SearchBox, SearchBtn } from "../components/SearchBox/SearchBox";
import API from "../utils/API";
import BookCard from "../components/BookBox/BookBox";

const Search = () => {
    const [searchKey, setSearchKey] = useState('Cat and dog'); 
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, []);

    const loadBooks = () => {
        API.searchBooks(searchKey)
            .then(res =>
                setBooks(res.data.items)
            )
            .catch(err => console.log(err));
    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        setSearchKey(value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (searchKey) {
            loadBooks();
            console.log(books);
        };
    };

    const handleBookSubmit = (book) => {
        if (book.title) {
            API.saveBook(
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
                    <Col style={{ marginTop: 28}}>
                        <form>
                            <h2>Search for a book here:</h2>
                            <SearchBox
                                onChange={handleInputChange}
                                name="search box"
                                placeholder='Search For Book..'
                            />
                            <SearchBtn onClick={handleFormSubmit}>
                                Search
                            </SearchBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
            <section className="pt-5">
                <Container>
                    <h2>Search results:</h2>
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