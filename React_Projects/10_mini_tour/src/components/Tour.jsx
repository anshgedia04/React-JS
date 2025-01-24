import React from "react";
import Single_card from "./Single_card";

export default function Tour(props) {
  const { Tours, removeTours } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Tours.map((tour) => (
        <Single_card key={tour.id} details={tour} removeTours={removeTours} />
      ))}
    </div>
  );
}
