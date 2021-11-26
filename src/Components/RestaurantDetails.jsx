import React from "react";

const RestaurantDetails = (props) => {
  const {
    name,
    cuisine,
    costForTwo,
    minOrder,
    deliveryTime,
    payment_methods: { cash, card },
    rating,
    votes,
    reviews,
    src
  } = props.data;

  return (
    <div className="restaurant">
      <div className="inRest">
        <div className="image">
          <img src={src} alt={name} />
        </div>
        <div className="restDetails">
          <h4> {name} </h4>
          <p> {cuisine.join(", ")} </p>
          <p> Cost for two: ₹{costForTwo} </p>
          <p>
            {" "}
            Min: ₹{minOrder} • Upto {deliveryTime} min{" "}
          </p>
          {cash && card ? (
            <p> Accepts : "Cash and Card" </p>
          ) : card ? (
            <p> Accepts : "Card" </p>
          ) : (
            <p> Accepts : "Cash" </p>
          )}
        </div>
        <div className="rating">
          <div className="rate"> {rating} </div>
          <div> {votes} votes </div>
          <div> {reviews} reviews</div>
        </div>
      </div>
      <div className="order">
        <div className="orderButton">Order Online ></div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
