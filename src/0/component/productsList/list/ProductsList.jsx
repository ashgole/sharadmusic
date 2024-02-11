import React from "react";
import ProductsArray from "../../../static/Product.json";
import ProductCard from "./ProductCard";

const ProductsList = ({productName}) => {
  return (
    <>
      <div className="h-auto  -blue-500 flex flex-col justify-center items-center">
        {ProductsArray &&
          Object.values(ProductsArray[productName]).map((item, index) => {
            return <ProductCard key={index} details={item} />;
          })}
      </div>
    </>
  );
};

export default ProductsList;
