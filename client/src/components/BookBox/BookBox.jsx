import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import {Image} from 'react-bootstrap';

const Book = (props) => {

    return (
        <Col md={12}>
            <Card className='mb-4 shadow-sm d-flex' page={props.page}>
                <Card.Body>
                    {
                        (props.data.image || props.data.imageLinks)
                        ? <Card.Text 
                            className='text-center'
                        ><Image 
                        src={props.data.image || props.data.imageLinks.thumbnail} alt='Book Cover'
                        thumbnail 
                        />
                        </Card.Text>
                        : <Card.Text
                            className='text-center'
                        >
                           Google Books does not provide image for that book...
                        </Card.Text>
                    }
                    <Card.Title 
                        className='text-center'
                    >
                        {props.data.title}
                    </Card.Title>
                    <Card.Subtitle 
                        className='text-center'
                    >
                        {props.data.subtitle}
                    </Card.Subtitle>
                    <br />
                    <Card.Subtitle 
                        className='text-center'
                    >
                        {'Written By' + props.data.authors}
                    </Card.Subtitle>
                    <br />
                    <Card.Text>
                        {props.data.description || 'Google Books does not provide description for that book...'}
                    </Card.Text>
                    <div className="d-flex align-items-center">
                        <ButtonGroup page={props.page}>
                            <Button style={{ margin: 10, fontSize:20}}
                                className='btn-outline-info'
                                href={props.data.link || props.data.infoLink} 
                                target='_blank'
                                variant='outline-secondary'>
                                View
                            </Button>
                        {props.page === 'search' ? 
                            <Button style={{ margin: 10, fontSize:20}}
                                className='btn-outline-success' 
                                variant='outline-secondary' 
                                onClick={() => props.handleBookSubmit(props.data)}
                                >
                                    Save
                            </Button> :
                            <Button style={{ margin: 10,fontSize:20}}
                                className='btn-outline-warning' 
                                variant='outline-secondary'
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
