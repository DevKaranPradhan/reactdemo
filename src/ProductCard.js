import React from "react";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardHeader,
  CardFooter,
} from "reactstrap";

const ProductCard = (props) => {
  const { name, stocked, category, description, price } = props.product;
  return (
    <div className="container pt-3">
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>
            {!stocked ? <p>Out of stock</p> : <p>In Stock</p>}
          </CardSubtitle>
          {/* { !stocked && <p>Out of stock</p> } */}
        </CardHeader>
        <CardBody>
          <CardSubtitle>{category}</CardSubtitle>
          <CardText>{description}</CardText>
          <Button>Add to cart</Button>
        </CardBody>
        <CardFooter>Price: ${price}</CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
