import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Col } from "antd";
const { Meta } = Card;

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderListProduct = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Link to={`/product/${id}`}>
        {/* <ul key={id}>
          <li>{title}</li>
        </ul> */}
        <Col style={{ marginTop: "2rem" }}>
          <Card
            key={id}
            hoverable
            style={{ width: 240 }}
            cover={<img alt={title} height={200} src={image} />}
          >
            {category}
            <Meta title={title} description={price} />
          </Card>
        </Col>
      </Link>
    );
  });
  //   const { id, title } = products[0];
  return <>{renderListProduct}</>;
};

export default ProductComponent;
