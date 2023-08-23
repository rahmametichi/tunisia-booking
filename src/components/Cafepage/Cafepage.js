import CafeCard from "../CafeCard/CafeCard";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import React, { useEffect } from "react";
import { getAllCafes } from "../../redux/actions/cafeActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const Cafepage = () => {
  const dispatch = useDispatch();
  const cafesState = useSelector((state) => state.getAllCafesReducer);
  const { cafes, error, loading } = cafesState;
  useEffect(() => {
    dispatch(getAllCafes());
  }, []);
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
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error={console.log(error)} />
        ) : (
          cafes.map((item) => {
            return <CafeCard item={item} key={item._id} />;
          })
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cafepage;
