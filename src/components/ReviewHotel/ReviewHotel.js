import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addHotelReviewh } from "../../redux/actions/hotelActions";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { VerticalAlignBottom } from "@material-ui/icons";

const ReviewHotel = ({ hotel }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const token = localStorage.getItem("JWT");

  function sendreview() {
    if (token) {
      const currentUser = jwt_decode(token);


      // for (var i = 0; i < musee.reviews.length; i++) {
      //   if (musee.reviews[i].userid === currentUser.id) {
      //     alreadyreviewed = true;
      //   }
      // }
     {
        const review = {
          rating: rating,
          comment: comment,
          
        };

        

        dispatch(addHotelReviewh(review, hotel._id, currentUser));
        alert("Votre AVIS est publié avec succès");
      }
    }
  }

  const handleChange = (e) => {
    setComment(e.target.value);
  };
 


  const Button = styled.button`
    padding: 15px;
    border: 2px solid #cb896a;
    width: 150px;
    font-weight: 300;
    background-color: #cb896a;
    cursor: pointer;
    &:hover {
      color: white;
    }
  `;

  return (
    <div>
     
     <h3 style={{transform: "translateY(43px)"}}>Donner un avis</h3>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <ReactStars
          count={5}
          size={40}
          color={"black"}
          char={"☆"}
          isHalf={true}
          activeColor="#cb896a"
          onChange={(e) => {
            setRating(e);
          }}
        />
      </div>
      {/* </Container> */}

      {/* <Container> */}
      <input placeholder='Tapez Votre Commentaire Ici'style={{height:"100px",width:"180px"}} onChange={handleChange}></input>
      <Button onClick={sendreview} style={{ transform: "translateX(233px)" }}>
        Publier avis
      </Button>
      {/* </Container> */}

      <h5 className="titlerev">Dernier Avis</h5>
      {hotel.reviews &&
        hotel.reviews.map((review) => {
          console.log(review,'revvvv')

          return (
            <div>
              <ReactStars
                count={review.rating}
                size={28}
                color={"#BF382C"}
                activeColor={"#BF382C"}
                char={"☆"}
                isHalf={true}
                readonly
              />

              <p>Commentaire : {review.comment}</p>
              <p>de : {review.nom} </p>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default ReviewHotel;
