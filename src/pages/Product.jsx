import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProducThunk } from '../store/slices/product.slice';
import { Carousel, Col, ListGroup, Row } from 'react-bootstrap';

const Product = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    // que me traiga todo al momento de recargar y no se quede cargando
    useEffect(() => {
        dispatch(getProducThunk())
    }, [])

    const productList = useSelector(state => state.product)

    const productsFounf = productList.find(product => product.id === Number(id))
    const relateProduct = productList.filter(produc =>
        produc.category.id === productsFounf.category.id 
        &&
        produc.id !== productsFounf.id
    )

    console.log(relateProduct)

    return (
        <div>
            <h1>{productsFounf?.title}</h1>
            <Row>
                <Col lg={7}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 ma"
                                src={productsFounf?.productImgs[0]}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 ma"
                                src={productsFounf?.productImgs[1]}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 ma"
                                src={productsFounf?.productImgs[2]}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col lg={3}>
                    <h2>Description: </h2>
                    <p>{productsFounf?.description}</p>
                    <h3>Relate Products: </h3>
                    <br />
                    <ListGroup variant="flush">
                        {relateProduct.map(product => (
                            <ListGroup.Item key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                    {product.title}
                                    <br />
                                    <img className='img-fluid' src={product.productImgs[0]} alt="" style={{ width: "80px" }} />
                                </Link>

                            </ListGroup.Item>

                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
};

export default Product;



