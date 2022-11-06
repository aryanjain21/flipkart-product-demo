import React, { useEffect, useState } from "react";
import './sort.scss';
import { useProduct } from "../../context/productContext";

const Sort = () => {
  const { dispatchProduct } = useProduct();
  const [selected, setSelected] = useState('');

  const handleSort = (selectedVal) => {
    setSelected(selectedVal);
  };

  useEffect(() => {
    if (selected === "LH") {
      dispatchProduct({ type: "LOW-TO-HIGH" });
    } else if (selected === "HL") {
      dispatchProduct({ type: "HIGH-TO-LOW" });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  return (
    <div className="sort_section">
      <div className="sort">
        <div className="title">Sort By</div>
        <div className="options">
            <span>Price -- <span className={`${selected === 'LH' ? 'link selected' : 'link'}`} onClick={() => handleSort("LH")}>Low to High</span></span>
            <span>Price -- <span className={`${selected === 'HL' ? 'link selected' : 'link'}`} onClick={() => handleSort("HL")}>High to Low</span></span>
        </div>
      </div>
    </div>
  );
};

export default Sort;
