import React from "react";
import { Link } from "react-router-dom";

const Review = () => {
  return (
    <div className="review-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="review-head">
              <h2>Best Phone In 2025</h2>
              <p>Only $599</p>
              <form className="form-section">
                <Link to="/products">
                  <button type="button" className="shop-now-btn">Shop Now</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
