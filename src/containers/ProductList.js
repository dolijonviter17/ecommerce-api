import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BaseLayout from "../layout";
import { Col, Row } from "antd";
import { SetProducts } from "../redux/actions/Actions";
import ProductComponent from "./ProductComponent";

const ProductList = () => {
  //   const products = useSelector((state) => state);
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err :", err);
      });
    dispatch(SetProducts(response.data));
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  console.log("Products :", products);
  return (
    <BaseLayout title="E-commerce">
      <Row gutter={[16, 24]} justify="center">
        <ProductComponent />
      </Row>
    </BaseLayout>
  );
};

export default ProductList;
