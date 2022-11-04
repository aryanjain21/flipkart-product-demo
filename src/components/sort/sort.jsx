import React from "react";
import { useProduct } from "../../context/productContext";

const Sort = () => {
  const { dispatchProduct } = useProduct();

  const handleSort = (selected) => {
    if (selected === "LH") {
      dispatchProduct({ type: "LOW-TO-HIGH" });
    } else if (selected === "HL") {
      dispatchProduct({ type: "HIGH-TO-LOW" });
    }
  };

  return (
    <div className="sort_section">
      <div className="sort">
        <div className="title">Sort By</div>
        <div className="options">
            <span>Price -- <span onClick={() => handleSort("LH")}>Low to High</span></span>
            <span>Price -- <span onClick={() => handleSort("HL")}>High to Low</span></span>
        </div>
      </div>
    </div>
  );
};

export default Sort;
