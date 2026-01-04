import React from "react";
import "./CarCard.css";

const CarCard = ({ car }) => {
  return (
    
    <div className="car-card">
      <div className="car-image-container">
        <img src={car.image} alt={car.name} className="car-Image" />
        <span className="car-available">Available Now</span>
        <span className="car-price">${car.price} / day</span>
      </div>

      <div className="car-info">
        <h3 className="car-name">{car.name}</h3>
        <p className="car-type-year">{car.type} · {car.year}</p>

        <div className="car-details">
          <div className="detail-item">
            <span className="icon">👤</span>
            {car.seats} Seats
          </div>
          <div className="detail-item">
            <span className="icon">⛽</span>
            {car.fuel}
          </div>
        </div>

        <div className="car-details">
          <div className="detail-item">
            <span className="icon">🚗</span>
            {car.gear}
          </div>
          <div className="detail-item">
            <span className="icon">📍</span>
            {car.location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
