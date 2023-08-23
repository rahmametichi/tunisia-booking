import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
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
  margin-top: 15%;
`;

const ImageCollectionContainer = styled.div`
  flex: 2;
  margin-top: 15px;
`;

const VolDetails = ({ voldata }) => {
  const [vol, setVol] = useState({});
  let { id } = useParams();

  useEffect(() => {
      console.log(voldata)
    setVol(voldata.find((vol) => vol.id === +id));
    console.log(vol)
  }, [id]);

  return (
    <div>
      {" "}
      <Navbar />
      <Container>
        <Wrapper>
          <CollectionContainer>
            
            <Title>{vol.nom}</Title>
            <ImageCollectionContainer>
                <img src={vol.image}
                style={{height:"500px",width:"800px",borderRadius:"10px"}}/>
            </ImageCollectionContainer>
          </CollectionContainer>
          <InfoContainer>
          <CollectionTitle>Contact :</CollectionTitle>
            <Desc>{vol.email}</Desc>
            <CollectionTitle>Site web :</CollectionTitle>
            <a href={vol.website}><Desc>{vol.website}</Desc></a>
            <CollectionTitle>Phone :</CollectionTitle>
            <Desc>{vol.phone}</Desc>

            {/* <ReviewsContainer>
              <Reviews />
            </ReviewsContainer>
            
          <div style={{display:"flex",justifyContent:"space-between"}} >

            <Desc>
            <CollectionTitle>Horraires</CollectionTitle>
              Du 01/06 au 15/09 : De 9:00 à 17:00 <br />
              Du 16/09 au 30/05 : De 9:30 à 16:30 <br/><br/>
             <b>Musée fermé le lundi</b> 
            </Desc>
            <iframe
              width="150"
              height="180"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=MUS%C3%89E%20DE%20BARDO&t=&z=19&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              style={{ marginTop: "15px" ,marginLeft:"150px"}}
              marginheight="0"
              marginwidth="0"
            ></iframe>
            </div> */}
          </InfoContainer>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default VolDetails;
