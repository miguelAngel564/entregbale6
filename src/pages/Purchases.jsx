import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFavoritesThunk } from '../store/slices/favorites.slice';

const Purchases = () => {
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites)
    useEffect(() => {
        dispatch(getFavoritesThunk())
    }, [])
    const getFormatedDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString()
    }
    return (
        <div>
            <h1>MY PURCHASE</h1>
            <ul>
                {
                    favorites.map(favorite => (
                        <div style={{ listStyle: "none" }} key={favorite.id}>
                            {
                                favorite.cart.products.map(product => (
                                    <div className='addProduct' key={product.id}>

                                        <Link to={`/product/${product.id}`} >
                                            <div className="productos" style={{ margin: "40px" }} >
                                                <div className='titles' style={{ border: "1px solid blue", padding: "40px", borderRadius: "20px" }}>
                                                    <h4 ><b>Purchase Date: </b>   {getFormatedDate(product.createdAt)} </h4>
                                                    <h3 style={{ marginTop: "40px", textDecoration: "none" }}><b>Title: </b> {product.title}</h3>
                                            <h4 style={{ marginTop: "40px" }}><b>Price: </b>{product.price} $</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </ul>
        </div>
    );
};

export default Purchases;