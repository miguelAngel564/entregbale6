import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterHeadlineThunk, filterProductsThunk, getProducThunk } from '../store/slices/product.slice';

const Home = () => {

    const dispatch = useDispatch();
    const produ = useSelector(state => state.product)

    const [categoryList, setCategoryList] = useState([])
    const [inputSearch, setInputSearch] = useState("")
    useEffect(() => {
        dispatch(getProducThunk())

        axios.get("https://e-commerce-api.academlo.tech/api/v1/products/categories")
            .then(res => setCategoryList(res.data.data.categories))
    }, [])
    console.log(categoryList)

    return (
        <div className='home'>
            <Row>
                <Col lg={3}>
                    <ListGroup>
                        {
                            categoryList.map(category => (
                                <ListGroup.Item onClick={() => dispatch(filterProductsThunk(category.id))}
                                    style={{ cursor: "pointer" }}
                                    key={category.id}
                                >
                                    {category.name}
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg={9}>
                    <h1>Component home</h1>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={inputSearch}
                            onChange={(e) => setInputSearch(e.target.value)}
                        />
                        <Button
                            variant='outline-secondary'
                            onClick={() => dispatch(filterHeadlineThunk(inputSearch))}></Button>

                    </InputGroup>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {produ.map(product => (
                            <Col key={product.id}>
                                <Card>
                                    <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
                                        <Card.Img style={{ height: 200, objectFit: "contain" }} className="img-2" variant="top" src={product.productImgs[0]} />
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text>
                                                <h3>Price:</h3>
                                                {product.price}
                                            </Card.Text>
                                        </Card.Body>
                                    </Link>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Home;