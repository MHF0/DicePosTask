import React, { useEffect } from "react";
import { setProduct } from "../redux/product";
import { useDispatch, useSelector } from "react-redux";
import { productFunction, addToTable, getTableData } from "../APIs";
import "./product.css";
import { setTable } from "../redux/Table";

const Product = () => {
  const dispatch = useDispatch();

  const productsArray = useSelector((state) => state.product.products);

  const getAllProduct = () => {
    productFunction().then((result) => {
      if (result.success) {
        dispatch(setProduct(result.products));
      }
    });
  };

  const handleAddToTable = (product) => {
    addToTable(product._id, product.price, 1).then((result) => {
      if (result.success) {
        getTableData().then((res) => {
          if (res.success) {
            dispatch(setTable(res));
          }
        });
      }
    });
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div className="productButtons">
      {productsArray?.map((item) => (
        <button
          className="item-container"
          key={item._id}
          onClick={() => handleAddToTable(item)}
        >
          <p className="product-name">{item.name}</p>
          <p className="product-price">{item.price}</p>
        </button>
      ))}
    </div>
  );
};

export default Product;
