import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import HotelCard from "../HotelCard/HotelCard";
import React , {useEffect} from "react";
import { getAllHotels } from "../../redux/actions/hotelActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const Hotelpage = () => {
  const dispatch = useDispatch();
  const hotelsState = useSelector((state) => state.getAllHotelsReducer);
  const { hotels, error, loading } = hotelsState;
  useEffect(() => {
    dispatch(getAllHotels());
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
          hotels.map((item) => {
            return <HotelCard item={item} key={item._id} />;
          })
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Hotelpage;
