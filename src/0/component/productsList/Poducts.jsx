import React from "react";
import ProductsList from "./list/ProductsList";
import { useParams } from "react-router-dom";
import Hero from "./hero/Hero";
const Products = () => {
  let { productname } = useParams();
  return (
    <>
      <Hero productName={productname}/>
      <ProductsList productName={productname}/>
    </>
  );
};

export default Products;
