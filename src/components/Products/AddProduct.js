import React, { useState } from "react";
import Button from "../UI/Button";
import classes from './AddProduct.module.css';
import Card from '../UI/Card';

const AddProduct = (props) => {
  const [enteredId, setEnteredId] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredName, setEnteredName] = useState("");

  const idChangeHandler = (e) => {
    setEnteredId(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setEnteredPrice(e.target.value);
  };

  const nameChangeHandle = (e) => {
    setEnteredName(e.target.value);
  };

  const addProductHandler = (e) => {
    e.preventDefault();
    if (
      enteredId.trim().length === 0 ||
      enteredPrice.trim().length === 0 ||
      enteredName.trim().length === 0
    ) {
      alert("pls enter valid data!!");
      return;
    }
    if (enteredId < 1 || enteredPrice < 1) {
      alert("pls enter valid digit > 1");
      return;
    }

    const product = {
      id: enteredId,
      price: enteredPrice,
      name: enteredName,
    };

    const existingProducts = JSON.parse(localStorage.getItem("list")) || [];

    const updatedProducts = [...existingProducts, { ...product }];

    localStorage.setItem("list", JSON.stringify(updatedProducts));

    props.onAddProduct(enteredId, enteredPrice, enteredName);
    setEnteredId("");
    setEnteredPrice("");
    setEnteredName("");
  };
  return (
    <div>
      <Card className={classes.input}>
      <form action="" onSubmit={addProductHandler}>
        <div>
          <label htmlFor="id">Product ID</label>
          <input
            type="number"
            name="id"
            id="id"
            value={enteredId}
            onChange={idChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="price">Selling Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="pname">Product Name</label>
          <input
            type="text"
            name="pname"
            id="pname"
            value={enteredName}
            onChange={nameChangeHandle}
          />
        </div>

        <Button type="submit"> Add Product</Button>
      </form>
      </Card>
    </div>
  );
};

export default AddProduct;
