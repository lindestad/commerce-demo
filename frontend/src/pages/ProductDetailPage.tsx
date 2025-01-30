// src/pages/ProductDetailPage.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../types";

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;
    axios
      .get<Product>(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  const imageUrl = product.images && product.images[0] 
    ? product.images[0] 
    : "https://via.placeholder.com/400";

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row md:space-x-6">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full md:w-1/2 object-cover mb-4 md:mb-0"
        />
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-2">${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
