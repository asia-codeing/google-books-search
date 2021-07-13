import React from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const Book = (props) => {

    return (
        <Col md={12}>
            <Card className="mb-4 shadow-sm" page={props.page}>
                <Card.Body>
                    <Card.Title 
                        className="text-center"
                    >
                        {props.data.title}
                    </Card.Title>
                    <Card.Subtitle 
                        className="text-center"
                    >
                        {props.data.subtitle}
                    </Card.Subtitle>
                    <br />
                    <Card.Subtitle 
                        className="text-center"
                    >
                        {"Written By " + props.data.authors}
                    </Card.Subtitle>
                    <br />
                    {
                        (props.data.image || props.data.imageLinks)
                        ? <Card.Text 
                            className="text-center"
                        ><Image 
                        src={props.data.image || props.data.imageLinks.thumbnail} alt="Book Cover" 
                        thumbnail 
                        />
                        </Card.Text>
                        : <Card.Text
                            className="text-center"
                        >
                            No image provided by Google Books.
                        </Card.Text>
                    }
                    <Card.Text>
                        {props.data.description || "No description provided by Google Books."}
                    </Card.Text>
                    <div className="d-flex justify-content-center align-items-center">
                        <ButtonGroup aria-label="Project Links" page={props.page}>
                            <Button 
                                href={props.data.link || props.data.infoLink} 
                                target="_blank" 
                                size="sm" 
                                variant="outline-secondary">
                                View
                            </Button>
                        {props.page === "search" ? 
                            <Button 
                                className="save-btn" 
                                size="sm" 
                                variant="outline-secondary" 
                                onClick={() => props.handleBookSubmit(props.data)}
                                >
                                    Save
                            </Button> :
                            <Button 
                                className="del-btn" 
                                size="sm" 
                                variant="outline-secondary" 
                                onClick={() => props.handleBookDelete(props.data._id)}
                                >
                                Delete
                            </Button>}
                        </ButtonGroup>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}
export default Book;

// import React from 'react'
// import styled from 'styled-components';

// const BoxContainer = styled.div`
//     width: 89%;
//     min-height: 550px;
//     top:180px;
//     margin: auto;
//     display: flex;
//     flex-direction: column;
//     border-radius: 19px;
//     background-color:red;
//     box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
//     position: relative;
//     overflow: hidden;
// `;

// export default function BookBox() {
//     return (
       
//        <BoxContainer>

//        </BoxContainer>
//     )
// }
