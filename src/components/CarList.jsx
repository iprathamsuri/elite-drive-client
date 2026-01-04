import React from "react";
import CarCard from "./CarCard";
import BMW from "../assets/images/bmwm5.png";
import Corolla from "../assets/images/corolla.png";
import Camaro from "../assets/images/camaro.png";

const cars = [
  {
    id: 1,
    name: "BMW X5",
    type: "SUV",
    year: 2006,
    seats: 4,
    fuel: "Hybrid",
    gear: "Semi-Automatic",
    location: "New York",
    price: 300,
    image: BMW,
  },
  {
    id: 2,
    name: "Toyota Corolla",
    type: "Sedan",
    year: 2021,
    seats: 4,
    fuel: "Diesel",
    gear: "Automatic",
    location: "Los Angeles",
    price: 130,
    image: Corolla,
  },
  {
    id: 3,
    name: "Chevrolet Camaro",
    type: "Coupe",
    year: 2019,
    seats: 2,
    fuel: "Petrol",
    gear: "Automatic",
    location: "Nevada",
    price: 250,
    image: Camaro,
  },

];

const CarList = () => {
  return (
    <section className="featured-sectionn">
      <div className="heading">
        <h2>Featured Vehicles</h2>
        <p>
          Explore our selection of premium vehicles available for your next
          adventure.
        </p>
      </div>

      <div
        className="car-list-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1200px",
          margin: "2rem auto",
        }}
      >
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>

  );
};

export default CarList;
