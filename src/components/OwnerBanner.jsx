import "./OwnerBanner.css";
import carImg from "../assets/fortuner.png";

export default function OwnerBanner() {
  return (
    <section className="owner-banner">
      <div className="banner-content">
        <h2>Do You Own a Luxury Car?</h2>

        <p>
          Monetize your vehicle effortlessly by listing it on CarRental.
          <br />
          We take care of insurance, driver verification and secure payments —
          so you can earn passive income, stress-free.
        </p>

        <button className="list-btn">List your car</button>
      </div>

      <div className="banner-image">
        <img src={carImg} alt="Luxury car" />
      </div>
    </section>
  );
}
