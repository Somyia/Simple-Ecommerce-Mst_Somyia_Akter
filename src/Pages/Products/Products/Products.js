import React, { useEffect, useState } from 'react';
import { Container, Pagination, Row } from 'react-bootstrap';
import Banner from '../../Shared/Banner/Banner';
import Navigation from '../../Shared/Navigation/Navigation';
import NavBar from '../NavBar/NavBar';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [inputData, setInputData] = useState("");
    const [categories, setCategories] = useState([]);

    //geting all products according to desc orde
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    //getting the product categories
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setCategories(json))
    }, [])

    //getting products according to category
    const categorizedProduct = item => {

        fetch(`https://fakestoreapi.com/products/category/${item}?sort=desc`)
            .then(res => res.json())
            .then(json => setProducts(json))

    }

    //get input data
    const getInput = e => {
        setInputData(e.target.value);
    }

    //getting product according to search data
    const handleSearch = () => {
        const filteredProducts = products.filter((product) => {
            if (
                product.title.toLowerCase().includes(inputData.toLowerCase()) ||
                product.category.toLowerCase().includes(inputData.toLowerCase())
            ) {
                return product;
            }
        });
        setProducts(filteredProducts)
    }



    return (
        <div>
            <Navigation />
            <Banner />
            <NavBar
                categorizedProduct={categorizedProduct}
                categories={categories}
                getInput={getInput}
                handleSearch={handleSearch}
            />
            <Container>
                <Row xs={12} md={12} className="g-4">
                    {
                        products.map(product => <SingleProduct
                            key={product.id}
                            product={product}
                        />)
                    }

                </Row>
            </Container>

        </div >
    );
};

export default Products;