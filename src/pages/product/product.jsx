import React from "react";
import "./product.scss";
import { useProduct } from "../../context/productContext";
import Sort from "../../components/sort/sort";
import ProductCard from "../../components/productCard/productCard";
import Filter from "../../components/filter/filter";

const Product = () => {
  const { products } = useProduct();
  console.log("products", products);

  return (
    <div className="product_container">
      <Filter />
      <div className="product_details_container">
        <Sort />
        <div className="card_area">
          {products && products.product.length > 0 ? (
            products.product.map((data, index) => {
              return (
                <div className="product_card_section" key={index}>
                  <ProductCard data={data} />
                </div>
              );
            })
          ) : (
            <div className="warning">No Product found. Please select correct filter.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
