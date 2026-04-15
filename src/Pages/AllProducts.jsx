import shopData from "../Data/ShopsData";

const AllProducts = () => {
  const addToCart = (product) => {
    console.log("Added:", product);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <div className="text-yellow-500 text-sm">
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
      </div>
    );
  };

  return (
    <div>
      {/* GRID */}
      <div className="grid grid-cols-4 gap-6 px-20 py-6">
        {shopData.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded"
            />

            <h2 className="mt-3 font-semibold text-lg">
              {item.title}
            </h2>

            {renderStars(item.rating)}

            <p className="text-gray-600 mt-1">₹{item.price}</p>

            <p className="text-xs text-gray-400 capitalize">
              {item.category}
            </p>

            <button
              onClick={() => addToCart(item)}
              className="mt-3 w-full bg-[#155DFC] text-white py-2 rounded hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;