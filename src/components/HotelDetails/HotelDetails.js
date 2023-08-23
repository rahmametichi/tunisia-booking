import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllHotels } from "../../redux/actions/hotelActions";
import Loading from "../Loading/Loading";
import ReviewHotel from "../ReviewHotel/ReviewHotel";
import {
  MailOutline,
  Phone,
  Room,
} from "@material-ui/icons";
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
const Container = styled.div`
  background: white;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const InfoContainer = styled.div`
  padding: 0px 50px;
  flex-direction: row;
  flex: 1;
`;

const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;

const CollectionContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const CollectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 100;
`;

const ImageCollectionContainer = styled.div`
  flex: 2;
  margin-top: 15px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const ReviewsContainer = styled.div`
  margin-top: 10px;
`;

const HotelDetails = () => {
  let { id } = useParams();
  const { hotels } = useSelector((state) => state.getAllHotelsReducer);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllHotels());
  }, []);

  useEffect(() => {
    hotels.length !== 0 ? setLoading(false) : setLoading(true);
  }, [hotels]);

  var hotel = hotels && hotels.find((el) => el._id == id);
  return (
    <div>
      {" "}
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Wrapper>
            <CollectionContainer>
              <ImageCollectionContainer>
                <img
                  src={hotel.image}
                  style={{
                    height: "500px",
                    width: "800px",
                    borderRadius: "10px",
                  }}
                />
              </ImageCollectionContainer>
            </CollectionContainer>
            <InfoContainer>
              <Title>{hotel && hotel.nom}</Title>

              <ContactItem>
                <Room/><Desc>{hotel && hotel.adresse} </Desc>
              </ContactItem>

              <ContactItem>
                <MailOutline/><Desc>{hotel && hotel.email} </Desc>
              </ContactItem>

              <ContactItem>
                <Phone/><Desc>{hotel && hotel.phone} </Desc>
              </ContactItem>
                  
              <ContactItem>
                <OpenInBrowserIcon/><Desc> <a href={hotel.siteweb}>{hotel && hotel.siteweb} </a></Desc>
              </ContactItem>

            
              <ReviewsContainer>
                <ReviewHotel hotel={hotel} />
              </ReviewsContainer>
            </InfoContainer>
          </Wrapper>
        </Container>
      )}
      <Footer />
    </div>
  );
};

export default HotelDetails;
