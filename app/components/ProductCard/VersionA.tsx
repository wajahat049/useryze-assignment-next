import React from "react";

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
}

const ProductCardVersionA: React.FC<ProductCardProps> = ({
  title,
  price,
  imageUrl,
}) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        textAlign: "center",
        width: "200px",
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{ width: "200px", height: "100px" }}
      />
      <h3>{title}</h3>
      <p>${price}</p>
      <button
        style={{
          padding: "5px 10px",
          backgroundColor: "#007bff",
          color: "#fff",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCardVersionA;
