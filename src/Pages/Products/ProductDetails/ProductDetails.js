import React, { useEffect, useState } from 'react';
import { Button, Col, Container, NavLink, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../../Shared/Banner/Banner';
import './ProductDetails.css';
import StarRatings from 'react-star-ratings';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [])
    return (

        //details of a product
        <div>
            <Navigation />
            <Banner />

            <Container className="my-4 py-4">
                <Row className="d-flex align-items-center">
                    <Col md={5}>
                        <div>
                            <img className="img-fluid" src={product.image} alt="" />
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="product-detail">
                            <h4>{product.title}</h4>
                            <small>{product.category}</small>
                            <p>{product.description}</p>
                            <h6><StarRatings
                                rating={product.rating?.rate}
                                starDimension="20px"
                                starSpacing="5px"
                            /> {product.rating?.rate}({product.rating?.count})</h6>
                            <h5>Price: ${product.price}</h5>

                            <Link to="/cart">
                                <Button className="my-btn">Add To Cart</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetails;