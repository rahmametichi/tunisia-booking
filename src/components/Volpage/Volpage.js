import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import VolCard from "../VolCard/VolCard";

const Volpage = ({ voldata }) => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "3%",
        }}
      >
        {voldata.map((item) => {
          return <VolCard item={item} key={item.id} />;
        })}
      </div>
      <Footer/>
    </div>
  );
};

export default Volpage;
