import React from "react";
import "./brands.css";

export default function Brands() {
  const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"];

  return (
    <section className="brands-bar">
      {brands.map((brand, index) => (
        <span key={index} className="brand-name">
          {brand}
        </span>
      ))}
    </section>
  );
}