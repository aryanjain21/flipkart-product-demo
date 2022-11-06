import React, { useEffect, useState } from "react";
import "./filter.scss";
import Checked from "../../assets/icons/checked.svg";
import Unchecked from "../../assets/icons/unchecked.svg";
import { useProduct } from "../../context/productContext";

const filterData = [
  {
    type: "Gender",
    options: [
      { key: "men", name: "Men", isChecked: false },
      { key: "women", name: "Women", isChecked: false },
      { key: "unisex", name: "Unisex", isChecked: false },
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
    options: [{ name: "l" }, { name: "xl" }, { name: "xxl" }, { name: "free" }],
  },
];

const Filter = () => {
  const { dispatchProduct } = useProduct();
  const [sizes, setSizes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [ideal, setIdeal] = useState([]);
  //   const [filterData, setFilterData] = useState(filterOpt);

  useEffect(() => {
    dispatchProduct({ type: "FILTER", payload: { sizes, brands, ideal } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizes, brands, ideal]);

  const handleFilter = (data, filter) => {
    if (data.type === "Sizes") {
      if (!sizes.includes(filter)) {
        setSizes([...sizes, filter]);
      } else {
        setSizes(sizes.filter((val) => filter !== val));
      }
    } else if (data.type === "Brands") {
      if (!brands.includes(filter)) {
        setBrands([...brands, filter]);
      } else {
        setBrands(brands.filter((val) => filter !== val));
      }
    } else if (data.type === "Gender") {
      if (!ideal.includes(filter.toLowerCase())) {
        setIdeal([...ideal, filter.toLowerCase()]);
      } else {
        setIdeal(ideal.filter((val) => filter.toLowerCase() !== val));
      }
    }
  };

  const filterCheckbox = (filter, name) => {
    return filter.includes(name) ? (
      <img src={Checked} alt="checked" />
    ) : (
      <img src={Unchecked} alt="unchecked" />
    );
  };

  return (
    <div className="filter_section">
      <div className="header">
        <div className="title">Filters</div>
        <div
          onClick={() => {
            setSizes([]);
            setBrands([]);
            setIdeal([]);
            dispatchProduct({ type: "CLEAR_ALL" });
            window.location.reload();
          }}
          className="clear_link"
        >
          Clear All
        </div>
      </div>
      {filterData &&
        filterData.length > 0 &&
        filterData.map((filter, index) => (
          <div className="filter_container" key={index}>
            <div className="filter_title">{filter.type}</div>
            <ul>
              {filter.options &&
                filter.options.length > 0 &&
                filter.options.map((opt, index) => (
                  <li
                    onClick={() => handleFilter(filter, opt.name)}
                    key={index}
                  >
                    <span>
                      {filterCheckbox(
                        filter.type === "Sizes"
                          ? sizes
                          : filter.type === "Brands"
                          ? brands
                          : ideal,
                        filter.type === "Gender"
                          ? opt.name.toLowerCase()
                          : opt.name
                      )}
                    </span>
                    {opt.name}
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Filter;
