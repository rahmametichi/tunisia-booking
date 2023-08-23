import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Carrousel from "../Caroussel/Caroussel";
import CollectionCaroussel from "../Caroussel/CollectionCaroussel";
import Reviews from "../Reviews/Reviews";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllMusees } from "../../redux/actions/museeActions";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

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
const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;

const CollectionContainer = styled.div`
  margin: -21px 235px 0px 1px
  display: flex;
  margin-bottom:50px;
`;

const CollectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 100;
  margin-top: 15px;
`;

const ImageCollectionContainer = styled.div`
  flex: 2;
  margin-top: 15px;
  margin-left:30%;
  width:500px;
`;

const AddContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  justify-content: space-between;
`;

const ReviewsContainer = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #cb896a;
  font-weight: 300;
  width: 150px;
  background-color: #cb896a;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const MuseeDetails = () => {
  let { id } = useParams();
  const { musees } = useSelector((state) => state.getAllMuseesReducer);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllMusees());
  }, []);

  useEffect(() => {
    musees.length !== 0 ? setLoading(false) : setLoading(true);
  }, [musees]);

  var museeDetails = musees && musees.find((el) => el._id == id);

  return (
    <div>
      <Navbar />
      {loading ? (
       <Loading />
        
      ) :  (
        <Container>
          <Wrapper>
            <CollectionContainer>
              <Carrousel musee={museeDetails} />
              <CollectionTitle>COLLECTIONS</CollectionTitle>
              <ImageCollectionContainer>
                <CollectionCaroussel musee={museeDetails} />
              </ImageCollectionContainer>
            </CollectionContainer>
            <InfoContainer>
              <Title>{museeDetails && museeDetails.nom}</Title>
              <Desc>{museeDetails && museeDetails.description}</Desc>
              
              <AddContainer>
                <CollectionTitle>Ticket :</CollectionTitle>

                <Price>{museeDetails && museeDetails.prix} TND</Price>
                <Button
                  onClick={() => {
                    dispatch(addToCart(museeDetails));
                    alert("Ticket ajouté à la carte ");
                    history.push("/cart");
                  }}
                >
                  Réserver ticket
                </Button>
              </AddContainer>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Desc>
                  <CollectionTitle>Horraires</CollectionTitle>
                  Du 01/06 au 15/09 : De 9:00 à 17:00 <br />
                  Du 16/09 au 30/05 : De 9:30 à 16:30 <br />
                  <br />
                  <b>Musée fermé le lundi</b>
                </Desc>
                
                <iframe
                  width="150"
                  height="180"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=MUS%C3%89E%20DE%20BARDO&t=&z=19&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  style={{ marginTop: "15px", marginLeft: "150px" }}
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
              <ReviewsContainer>
                <Reviews museeDetails={museeDetails} />
              </ReviewsContainer>
            </InfoContainer>
          </Wrapper>
        </Container>
      )}

      <Footer />
    </div>
  );
};

export default MuseeDetails;
