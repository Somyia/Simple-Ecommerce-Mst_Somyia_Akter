import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './SingleProduct.css';
import StarRatings from 'react-star-ratings';

const SingleProduct = (props) => {
    const { id, title, description, image, price, rating } = props.product;
    return (
        //single product
        <Col xs={12} md={4}>
            <Card >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 100)}
                        <h6><StarRatings
                            rating={rating.rate}
                            starDimension="20px"
                            starSpacing="5px"
                        /> {rating.rate}({rating.count})</h6>
                        <h5>Price: ${price}</h5>
                        <NavLink to={`/productDetails/${id}`}>
                            <Button className="my-btn">View Details</Button>
                        </NavLink>

                        <Link to="/cart">
                            <Button className="card-btn" >Add To Card</Button>
                        </Link>


                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleProduct;