import React, { useEffect } from "react";
import { setProduct } from "../redux/product";
import { useDispatch, useSelector } from "react-redux";
import { productFunction } from "../APIs";
import "./product.css";

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

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div className="flex">
      {productsArray?.map((item) => (
        <div className="item-container" key={item._id}>
          <p className="product-name">{item.name}</p>
          <p className="product-price">{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
