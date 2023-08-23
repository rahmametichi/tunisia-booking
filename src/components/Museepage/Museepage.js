import React , {useEffect} from "react";
import MuseeCard from "../MuseeCard/MuseeCard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { getAllMusees } from "../../redux/actions/museeActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const Museepage = () => {
  const dispatch = useDispatch();
  const museesState = useSelector((state) => state.getAllMuseesReducer);
  const { musees, error, loading } = museesState;
  useEffect(() => {
    dispatch(getAllMusees());
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
          musees.map((item) => {
            return <MuseeCard item={item} key={item._id} />;
          })
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Museepage;
