import React, { useEffect, useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutThank, deleteProductsThunk, getCarsThunk } from '../store/slices/car.slice';

const Car = ({ show, handleClose }) => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cars)
    useEffect(() => {
        dispatch(getCarsThunk());
    }, [])

    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>SHOPPING CART </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        cart.map(product => (
                            <div>
                                <h1>Product: </h1>
                                {product.title}
                                <br />
                                <button style={{ margin: "20px 0", color: "red" }}
                                    className='btn btn-secondary'
                                    onClick={() => dispatch(deleteProductsThunk(product.id))}>
                                    <i class="bi bi-trash3-fill"></i>
                                </button>
                            </div>
                        ))
                    }
                    <Button onClick={() => dispatch(checkoutThank())}>Checkout</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Car;