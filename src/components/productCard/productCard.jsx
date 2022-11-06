import React from "react";
import "./productCard.scss";

const ProductCard = (props) => {
  const { data } = props;

  return (
    <div className="product_Card">
      <div className="prod_img">
        <img src={data.image} alt="Product" />
      </div>
      <div className="prod_details">
        <div className="brand">{data.brand}</div>
        <div className="subtitle">{data.subTitle}</div>
        <div className="price">
          <span className="amount">₹{data.price}</span>
          {/* <span className="strikethrough">
            ₹{data.price + (((data.price) / 100) * data.discount)}
          </span> */}
          <span className="discount">{data.discount}% off</span>
        </div>
        <div className="size">Size: {data.size && data.size.length > 0 && data.size.map((size, index) => (<span key={index}>{size}{data.size.length > 1 && data.size.length -1 !== index && <span>,</span>}</span>))}</div>
      </div>
    </div>
  );
};

export default ProductCard;
