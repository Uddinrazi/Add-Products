import React from "react";
import Button from "../UI/Button";
import classes from "./ProductList.module.css";
import Card from "../UI/Card";


const ProductList = (props) => {


  const totalPrice = props.products.reduce((total, product) => {
    const price = parseFloat(product.price);

    return total + price;
  }, 0);

  // console.log(products);
  return (
    <div>
      <Card className={classes.users}>
        <ul>
          {props.products.map((product) => {
            //console.log(product);
            return (
              <li key={product.id}>
                {product.id} - Rs{product.price} - {product.name}
                <Button
                  type="submit"
                  onClick={() => props.onDeleteProduct(product.id)}
                >
                  Delete
                </Button>
              </li>
            );
          })}
        </ul>
        <p> Total Price of Products : Rs {totalPrice}</p>
      </Card>
    </div>
  );
};

export default ProductList;
