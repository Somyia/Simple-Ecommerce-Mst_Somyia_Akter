import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import Banner from '../Shared/Banner/Banner';
import Navigation from '../Shared/Navigation/Navigation';
import './Cart.css';

const Cart = () => {
    const [cart, setCart] = useState([]);

    //getting cart according to user id 1
    useEffect(() => {
        fetch('https://fakestoreapi.com/carts/user/1')
            .then(res => res.json())
            .then(json => setCart(json))
    }, [])
    return (
        //cart area
        <div>
            <Navigation />
            <Banner />
            <Container className="my-4 py-4">
                <Row>
                    <div>
                        <h1>Cart</h1>
                    </div>
                </Row>
                <Row>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Product Id</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map(item => <tr key={item.id}>
                                    <td>{item.date}</td>
                                    <td>{
                                        item.products.map(product => <tr className="inner-row">
                                            <td>{product.productId}</td>
                                        </tr>)
                                    }</td>
                                    {
                                        item.products.map(product => <tr>
                                            <td>{product.quantity}</td>
                                        </tr>)
                                    }
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;