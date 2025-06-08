import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An eCommerce website is a digital platform that allows businesses to
          sell products or services online. It enables functions, and customer
          support. eCommerce websites benefit businesses by expanding their
          reach, reducing operational costs, and providing data for better
          decision-making.
        </p>
        <p>
          Businesses offer various services through eCommerce, including online
          product catalogs, secure payment options, doorstep delivery, customer
          support, order tracking, and return policies. These services enhance
          customer.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
