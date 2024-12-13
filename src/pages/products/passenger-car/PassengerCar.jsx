import React, { useEffect } from "react";
import Layout from "../../Layout";

function PassengerCar() {
  useEffect(() => {
    document.title = "Hyrax Oil | Passenger Car Motor Oils"; // Quick solution
  }, []);

  return (
    <div>
      <Layout />

      <h1>Passenger Car</h1>
    </div>
  );
}

export default PassengerCar;
