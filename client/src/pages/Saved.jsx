import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import API from '../utils/API';
import BookCard from "../components/BookBox/BookBox";

const Saved = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, []);

    const loadBooks = () => {
        API.getBooks()
            .then(res => {
                setBooks(res.data);
            })
            .catch(err => console.log(err));
    };

    const handleBookDelete = id => {
        API.deleteBook(id)
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }

    return (
        <Container style={{ marginTop: 28}}>
            <h2>Saved Books:</h2>
            <Row>
                <Col>
                    {books
                        ? books.map((book) => (
                            <BookCard
                                key={book._id}
                                data={book}
                                page="saved"
                                handleBookDelete={handleBookDelete}
                            />
                        ))
                        : null}
                </Col>
            </Row>
        </Container>
    )
}

export default Saved;