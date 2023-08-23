import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import HotelCard from "../HotelCard/HotelCard";
import MuseeCard from "../MuseeCard/MuseeCard";
import Navbar from "../Navbar/Navbar";
import { getAllMusees } from "../../redux/actions/museeActions";
import { getAllHotels} from "../../redux/actions/hotelActions";
import {getAllCafes} from "../../redux/actions/cafeActions"
import { useDispatch, useSelector } from "react-redux";
import CafeCard from "../CafeCard/CafeCard";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const Accueil = () => {
  const dispatch = useDispatch();
  const museesState = useSelector((state) => state.getAllMuseesReducer);
  const { musees, errorM, loadingM } = museesState;
  const hotelsState = useSelector((state) => state.getAllHotelsReducer);
  const { hotels  ,errorH, loadingH} = hotelsState;
  const cafesState = useSelector((state) => state.getAllCafesReducer);
  const { cafes  ,errorC, loadingC} = cafesState;

  useEffect(() => {
    dispatch(getAllMusees());
    dispatch(getAllHotels());
    dispatch(getAllCafes());

  }, []);


  return (
    <div>
      <Navbar />
      <div>
        <center>
          <h1>Musées</h1>
        </center>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "3%",
          }}
        >
          {loadingM ? (
            <Loading />
          ) : errorM ? (
            <Error error={console.log(errorM)} />
          ) : (
            musees.map((item) => {
              return <MuseeCard item={item} key={item._id} />;
            })
          )}
        </div>
      </div>
      <div>
        <center>
          <h1>Hotels</h1>
        </center>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "3%",
          }}
        >
          {loadingH ? (
            <Loading />
          ) : errorH ? (
            <Error error={console.log(errorH)} />
          ) : (
            hotels.map((item) => {
              return <HotelCard item={item} key={item._id} />;
            })
          )}
        </div>
      </div>
      <div>
        <center>
          <h1>Café | Restaurant</h1>
        </center>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "3%",
          }}
        >
          {loadingC ? (
            <Loading />
          ) : errorC ? (
            <Error error={console.log(errorC)} />
          ) : (
            cafes.map((item) => {
              return <CafeCard item={item} key={item._id} />;
            })
          )}
        </div>
      </div>
    

      <Footer />
    </div>
  );
};

export default Accueil;
