import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllCafes } from "../../redux/actions/cafeActions";
import Loading from "../Loading/Loading";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import ReviewCafe from "../ReviewCafe/ReviewCafe";

const Container = styled.div`
  background: white;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const InfoContainer = styled.div`
  padding: 0px 50px;
  flex: 1;
`;

const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;

const CollectionContainer = styled.div`
  margin: -21px 235px 0px 1px
  display: flex;
  margin-bottom:50px;
`;

const CollectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 100;
  margin-top: 5%;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  margin-right: 20px;
  justify-content: center;
  color: white;
`;
const ImageCollectionContainer = styled.div`
  flex: 2;
  margin-top: 15px;
`;
const ReviewsContainer = styled.div`
  margin-top: 10px;
`;

const CafeDetails = () => {
  let { id } = useParams();
  const { cafes } = useSelector((state) => state.getAllCafesReducer);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllCafes());
  }, []);

  useEffect(() => {
    cafes.length !== 0 ? setLoading(false) : setLoading(true);
  }, [cafes]);
  var cafe = cafes && cafes.find((el) => el._id == id);
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
                  src={cafe.image}
                  style={{
                    height: "500px",
                    width: "800px",
                    borderRadius: "10px",
                  }}
                />
              </ImageCollectionContainer>
            </CollectionContainer>
            <InfoContainer>
              <Title>{cafe && cafe.nom}</Title>

              <CollectionTitle>Description</CollectionTitle>
              <Desc>{cafe && cafe.description}</Desc>

              <ContactItem>
                <Room />
                <Desc>{cafe && cafe.adresse} </Desc>
              </ContactItem>
              <ContactItem>
                <Phone />
                <Desc>{cafe && cafe.phone} </Desc>
              </ContactItem>
              <CollectionTitle>Réseaux sociaux:</CollectionTitle>
              <SocialContainer>
                <SocialIcon color="#385999">
                  {" "}
                  <a
                    href={cafe.fb}
                    style={{
                      color: "white",
                      display: "flex",
                    }}
                  >
                    <Facebook />
                  </a>
                </SocialIcon>
                <SocialIcon color="#E4405F">
                  {" "}
                  <a
                    href={cafe.insta}
                    style={{
                      color: "white",
                      display: "flex",
                    }}
                  >
                    <Instagram />
                  </a>
                </SocialIcon>
              </SocialContainer>

              <ReviewsContainer>
                <ReviewCafe cafe={cafe} />
              </ReviewsContainer>
            </InfoContainer>
          </Wrapper>
        </Container>
      )}
      <Footer />
    </div>
  );
};

export default CafeDetails;
