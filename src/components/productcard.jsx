// write product card here
import React from "react";
import Button from "../components/Button";

const Productcard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/150";
  const productName = "Stylish Sneakers";
  const price = "$49.99";

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-sm text-center">
      <img
        src={productImage}
        alt="Product"
        className="w-32 h-32 mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold">{productName}</h2>
      <p className="text-gray-700 font-bold">{price}</p>
      <Button text="View Product" onClick={() => alert("Product details clicked!")} />
    </div>
  );
};

export default Productcard;
