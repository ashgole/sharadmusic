import React from "react";
import ProductsArray from "../../static/Product.json";
import { Link } from "react-router-dom";

const ProductCard = ({ ...props }) => {
  const { productName, productUrl, productDescription, productCost } =
    props.details;
  return (
    <>
      <div className="my-2 h-1/2 w-full md:w-1/2 flex flex-col md:flex-row">
        <div className="flex justify-center items-center w-full md:w-1/2 ">
          <div className="w-1/2">
            {/* Image */}
            <img className="" src={productUrl} alt="Product Image" />
          </div>
        </div>
        <div className="w-full md:w-1/2  p-4 flex flex-col justify-center">
          {/* Title */}
          <div className="text-xl font-bold mb-2">{productName}</div>

          {/* Description */}
          <div className="text-sm mb-2">{productDescription}</div>

          {/* Button */}
          <div className="flex justify-center items-center md:justify-start">
            <Link to={'/sharadmusic/list/'+productName}>
              <button className="w-auto bg-blue-500 text-white px-4 py-2 rounded">
                Show more
              </button>
            </Link>
          </div>
        </div>
      </div>
      <hr className="w-3/4  mx-auto my-4 bg-gray-100 border-1 rounded md:my-10 dark:bg-gray-700" />
    </>
  );
};

const Category = () => {
  return (
    <div className="h-auto  -blue-500 flex flex-col justify-center items-center">
      {ProductsArray &&
        Object.values(ProductsArray.products).map((item, index) => {
          return <ProductCard key={index} details={item} />;
        })}
    </div>
  );
};

export default Category;
