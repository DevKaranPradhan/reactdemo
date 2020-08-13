import React from 'react';
import productList from './productList.json'
import ProductCard from './ProductCard';
import { Container } from 'reactstrap';
const ProductList = () => {
    return(
        <Container>
            {productList.map((product) => <ProductCard product={product} />)}
        </Container>
    );
}

export default ProductList;