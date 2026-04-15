import React from "react";
import beautyProducts from "../Data/BeautyData";

const BeautySection = () => {
  const addToCart = (product) => {
    console.log("Added to cart:", product);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <div className="text-yellow-500">
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-4 gap-6 px-20 py-6">
      {beautyProducts.map((item) => (
        <div key={item.id} className="border p-4 rounded-lg shadow hover:scale-105 transition">
          <img
            src={item.image}
            alt={item.title}
            className="h-48 w-full object-cover rounded"
          />

          <h2 className="text-lg font-semibold mt-2">{item.title}</h2>

          {renderStars(item.rating)}

          <p className="text-gray-600">₹{item.price}</p>

          <button
            onClick={() => addToCart(item)}
            className="mt-3 w-full bg-[#155DFC] text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default BeautySection;