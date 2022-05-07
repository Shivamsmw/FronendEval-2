import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
export default function Product({
  isbn,
  author,
  title,
  image,
  price,
  reviews,
  description,
}) {
  return (
    <div className="product_main_div">
      <div className="product_details">
        <Link to={`/product/` + isbn} className="product_title">
          <p>Title:{title}</p>
        </Link>
        <p className="product_price">
          <strong>Price:{price}</strong>
        </p>
      </div>
      <img src={image} alt="image" className="product_view"></img>
    </div>
  );
}
