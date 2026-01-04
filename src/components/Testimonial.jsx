import React from "react";
import TestimonialCard from "./TestimonialCard";
import "./Testimonial.css";

// Example images
import emma from "../assets/images/emma.png";
import john from "../assets/images/john.png";
import ava from "../assets/images/ava.png";

const testimonialsData = [
  {
    image: emma,
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    rating: 5,
    text: "I've rented cars from various companies, but the experience with CarRental was exceptional.",
  },
  {
    image: john,
    name: "John Smith",
    location: "New York, USA",
    rating: 5,
    text: "CarRental made my trip so much easier. The car was delivered right to my door, and the customer service was fantastic!",
  },
  {
    image: ava,
    name: "Ava Johnson",
    location: "Sydney, Australia",
    rating: 5,
    text: "I highly recommend CarRental! Their fleet is amazing, and I always feel like I'm getting the best deal with excellent service.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <h2>What Our Customers Say</h2>
      <p className="subtitle">
        Discover why discerning travelers choose StayVenture for their luxury accommodations around the world.
      </p>

      <div className="testimonials">
        {testimonialsData.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
