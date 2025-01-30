// src/components/ProductCard.tsx
import { Link } from "react-router-dom";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.images && product.images[0] 
    ? product.images[0] 
    : "https://via.placeholder.com/200";

  return (
    <div className="border p-4 rounded shadow-sm bg-white flex flex-col">
      <img
        src={imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover mb-2"
      />
      <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <Link
        to={`/products/${product._id}`}
        className="mt-auto text-indigo-600 hover:text-indigo-800"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
