import React, { useEffect, useState } from "react";
import "./product.scss";
import { useProduct } from "../../context/productContext";
import Sort from "../../components/sort/sort";
import ProductCard from "../../components/productCard/productCard";

const Product = () => {
  const { products, dispatchProduct } = useProduct();
  console.log("products", products);
  const [sizes, setSizes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [ideal, setIdeal] = useState([]);

  const filterData = [
    {
      type: "Gender",
      options: [
        { key: "men", name: "Men" },
        { key: "women", name: "Women" },
        { key: "unisex", name: "Unisex" },
      ],
    },
    {
      type: "Brands",
      options: [
        { name: "HANUMNTRA" },
        { name: "KPI" },
        { name: "Manayavor" },
        { name: "Lama" },
      ],
    },
    {
      type: "Sizes",
      options: [
        { name: "l" },
        { name: "xl" },
        { name: "xxl" },
        { name: "free" },
      ],
    },
  ];

  const handleFilter = (type, filter) => {
    // let sizes = [];
    console.log('12345', type, ...sizes, filter)
    if (type === 'Sizes') { 
        setSizes([...sizes, filter]);
    } else if (type === 'Brands') {
        setBrands([...brands, filter])
    } else if (type === 'Gender') {
        setIdeal([...ideal, filter.toLowerCase()])
    }
    
    
  }

  useEffect(() => {
    dispatchProduct({type: 'FILTER', payload: {sizes, brands, ideal}})
  }, [sizes, brands, ideal])

  return (
    <div className="product_container">
      <div className="filter_section">
        {filterData &&
          filterData.length > 0 &&
          filterData.map((filter, index) => (
            <div className="filter_container" key={index}>
              <div className="title">{filter.type}</div>
              <ul>
                {filter.options &&
                  filter.options.length > 0 &&
                  filter.options.map((opt, index) => (
                    <li onClick={() => handleFilter(filter.type, opt.name)} key={index}>{opt.name}</li>
                  ))}
              </ul>
            </div>
          ))}
      </div>
      <div className="product_details_container">
        <Sort />
        <div className="card_area">
          {products &&
            products.product.length > 0 &&
            products.product.map((data, index) => {
              return (
                <div className="product_card_section" key={index}>
                  <ProductCard data={data} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Product;
