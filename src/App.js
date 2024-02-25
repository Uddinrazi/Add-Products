import React, { useEffect, useState } from "react";
import AddProduct from "./components/Products/AddProduct";
import ProductList from "./components/Products/ProductList";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const locaItem = localStorage.getItem("list");
    const items = JSON.parse(locaItem);
    setProductList(items || []) ;
  }, []);

  const deleteProductHandler = (id) => {
    const updatedProducts = productList.filter((product) => product.id !== id);
    setProductList(updatedProducts);
    localStorage.setItem("list", JSON.stringify(updatedProducts));
  };

  const onAddProductHandler = (pId, pPrice, pName) => {
    setProductList((prevProductList) => {
      //console.log(productList);
      return [
        ...prevProductList,
        {
          id: pId,
          price: pPrice,
          name: pName,
        },
      ];
    });
  };

  return (
    <div>
      <AddProduct onAddProduct={onAddProductHandler} />
      <ProductList
        products={productList}
        onDeleteProduct={deleteProductHandler}
      />
    </div>
  );
}

export default App;
