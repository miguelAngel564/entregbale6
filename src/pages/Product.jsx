import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { filterHeadlineThunk, getProducThunk } from '../store/slices/product.slice';
import { Button, Carousel, Col, ListGroup, Row } from 'react-bootstrap';
import { createFavoritesThunk } from '../store/slices/car.slice';

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
        produc?.category.id === productsFounf?.category.id
        &&
        produc.id !== productsFounf.id
    )

    const [rate, setRate] = useState("")

    const addToFavorites = () => {
        const products = {
            id: productsFounf?.id,
            quantity: rate
        }
        dispatch(createFavoritesThunk(products))
    }
    return (
        <div>
            <h1>{productsFounf?.title}</h1>
            <Row>
                <Col lg={8}>
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
                <Col lg={4}>
                    <h2>Description: </h2>
                    <p>{productsFounf?.description}</p>
                    <input value={rate} type="number" class="form-control" onChange={(e) => setRate(e.target.value)} />
                    <br /><br />
                    <Button onClick={addToFavorites}>Add TO CARS</Button>
                </Col>
                    </Row>
            <br />
            <h3>Relate Products: </h3>
          
                <ListGroup variant="flush">
                    {relateProduct.map(product => (

                        <ListGroup.Item key={product.id} >
                            <Link to={`/product/${product.id}`} >
                                <div className="conataciner" style={{padding: "40px"}} >

                                    <img className='img-fluid' src={product.productImgs[0]} alt="" style={{ width: "80px" }} />
                                    <h2>{product.title}</h2>
                                </div>
                            </Link>
                        </ListGroup.Item>

))}
                </ListGroup>
           
        </div>
    );
};

export default Product;



