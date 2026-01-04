import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ image, name, location, rating, text }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img src={image} alt={name} className="testimonial-image" />
        <div>
          <h3 className="testimonial-name">{name}</h3>
          <p className="testimonial-location">{location}</p>
        </div>
      </div>
      <div className="testimonial-stars">
        {Array(rating)
          .fill("★")
          .map((star, index) => (
            <span key={index} className="testimonial-star">{star}</span>
          ))}
      </div>
      <p className="testimonial-text">"{text}"</p>
    </div>
  );
};

export default TestimonialCard;
