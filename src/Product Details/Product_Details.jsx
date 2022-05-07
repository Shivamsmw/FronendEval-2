import React from "react";
import "./Product_Details.css";
import { useParams } from "react-router";
import { Books } from "../books";
import "./Product_Details.css";
export default function Product_Details() {
  const { isbn } = useParams();
  let individualProduct = Books.find(item => item.isbn === isbn);

  return (
    <div className="pd_main_div">
      <div>
        <div className="pd_individual_product">
          <img
            src={individualProduct.image}
            className="pd_individual_image"
            alt="image"
          />
          <div className="pd_individual_information">
            <div className="pd_individual_title">{individualProduct.title}</div>

            <p className="pd_individual_price">
              Price: <strong>Price:</strong>
              <strong>{individualProduct.price}</strong>
            </p>
            <div className="pd_individual_specify">
              <h4>Reviews</h4>
              {individualProduct.reviews &&
                individualProduct.reviews.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
            </div>
            <div className="pd_individual_desc">
              <h4>Product Description</h4>
              <p>{individualProduct.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
