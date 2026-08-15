import React, { useState } from "react";
import "./new-arrivals.css";

const products = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    image: "/assets/images/product-tshirt-black.jpg",
    rating: 4.5,
    price: 120,
    oldPrice: null, 
    discount: null,
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    image: "/assets/images/product-jeans.jpg",
    rating: 3.5,
    price: 240,
    oldPrice: 260,
    discount: "-20%",
  },
  {
    id: 3,
    name: "Checkered Shirt",
    image: "/assets/images/product-checkered-shirt.jpg",
    rating: 4.5,
    price: 180,
    oldPrice: null,
    discount: null,
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    image: "/assets/images/product-striped-tshirt.jpg",
    rating: 4.5,
    price: 130,
    oldPrice: 160,
    discount: "-30%",
  },
  {
    id: 5,
    name: "Vertical Striped Shirt",
    image: "/assets/images/product-vertical-striped-shirt.jpg",
    rating: 5,
    price: 212,
    oldPrice: 232,
    discount: "-20%",
  },
  {
    id: 6,
    name: "Courage Graphic T-shirt",
    image: "/assets/images/product-courage-tshirt.jpg",
    rating: 4,
    price: 145,
    oldPrice: null,
    discount: null,
  },
  {
    id: 7,
    name: "Loose Fit Bermuda Shorts",
    image: "/assets/images/product-bermuda-shorts.jpg",
    rating: 3,
    price: 80,
    oldPrice: null,
    discount: null,
  },
  {
    id: 8,
    name: "Faded Skinny Jeans",
    image: "/assets/images/product-faded-jeans.jpg",
    rating: 4.5,
    price: 210,
    oldPrice: null,
    discount: null,
  },
];

const INITIAL_VISIBLE_COUNT = 4;

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="rating">
      {Array.from({ length: 5 }).map((_, i) => {
        let type = "empty";
        if (i < fullStars) type = "full";
        else if (i === fullStars && hasHalfStar) type = "half";

        return (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            className={`star-icon ${type}`}
          >
          
            <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7L5.8 21l1.6-7L2 9.2l7.1-.6z" />
          </svg>
        );
      })}
      <span className="rating-value">{rating}/5</span>
    </div>
  );
}

export default function NewArrivals() {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll
    ? products
    : products.slice(0, INITIAL_VISIBLE_COUNT);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section className="new-arrivals">
      <h2 className="section-title">NEW ARRIVALS</h2>

      <div className="product-grid">
        {visibleProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>

            <h3 className="product-name">{product.name}</h3>

            <StarRating rating={product.rating} />

            <div className="price-row">
              <span className="price">${product.price}</span>
              {product.oldPrice && (
                <span className="old-price">${product.oldPrice}</span>
              )}
              {product.discount && (
                <span className="discount-badge">{product.discount}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {products.length > INITIAL_VISIBLE_COUNT && (
        <button className="view-all-btn" onClick={handleToggle}>
          {showAll ? "View Less" : "View All"}
        </button>
      )}
    </section>
  );
}