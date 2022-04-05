import React from 'react';
import { ButtonGroup, Button, InputGroup, FormControl, Container } from 'react-bootstrap';
import './NavBar.css';

const NavBar = (props) => {
    const { categorizedProduct, categories, getInput, handleSearch } = props;

    return (
        //category list and search area
        <Container>
            <div className="my-4 py-4 d-flex justify-content-between">

                <div>

                    <ButtonGroup>
                        <Button variant="light">All</Button>
                        {
                            categories.map(item => <Button variant="light" value="Jewelery" onClick={() => categorizedProduct(item)}>{item}</Button>)
                        }

                    </ButtonGroup>
                </div>
                <div>
                    <InputGroup>

                        <FormControl
                            type="text"
                            placeholder="Search"
                            aria-label="Input group example"
                            aria-describedby="btnGroupAddon2"
                            onChange={getInput}
                        />
                        <Button variant="dark" onClick={handleSearch}>Search</Button>
                    </InputGroup>
                </div>
            </div>
        </Container>
    );
};

export default NavBar;