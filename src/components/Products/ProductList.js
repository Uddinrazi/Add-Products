import React, { useState, useEffect } from "react";
import Button from "../UI/Button";
import classes from "./ProductList.module.css";
import Card from "../UI/Card";

// const getProductsFromLocalStorage = () => {
//   const storedProducts = Object.keys(localStorage).map((key) =>
//     JSON.parse(localStorage.getItem(key))
//   );
//   console.log(storedProducts);
//   if (storedProducts) {
//     return storedProducts;
//   }
// };
const ProductList = (props) => {
  // const [products, setUpdatedProducts] = useState(props.product);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Function to retrieve products from local storage
    const getProductsFromLocalStorage = () => {
      const storedProducts = Object.keys(localStorage).map((key) =>
        JSON.parse(localStorage.getItem(key))
      );
      //console.log(storedProducts);
      if (storedProducts) {
        setProducts(storedProducts);
      }
    };

    // Call the function to retrieve products from local storage when the component mounts
    getProductsFromLocalStorage();
  }, []);

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
