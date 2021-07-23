import { Row, Col, Card } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Button, Radio } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import BaseLayout from "../layout";
import {
  RemoveSelectedProduct,
  SelectedProduct,
} from "../redux/actions/Actions";
const { Meta } = Card;

const ProductStyle = styled.div`
  padding: "10px";
`;

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { id, title, image, description, price } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err ", err);
      });
    dispatch(SelectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(RemoveSelectedProduct());
    };
  }, [productId]);
  return (
    <BaseLayout title="Detail">
      <Row justify="center">
        <Col>
          {Object.keys(product).length === 0 ? (
            <div>
              ...loading
              <LoadingOutlined />
            </div>
          ) : (
            <div style={{ display: "flex", marginTop: "20px" }}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={<img alt={title} src={image} />}
              >
                <Meta title={title} />
              </Card>
              <div style={{ marginLeft: "2rem" }}>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3>{description}</h3>
                <Button
                  type="danger"
                  shape="round"
                  icon={<DownloadOutlined />}
                  size="large"
                >
                  Add to Card
                </Button>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </BaseLayout>
  );
};

export default ProductDetail;
