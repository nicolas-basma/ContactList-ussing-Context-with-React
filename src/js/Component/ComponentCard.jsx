import React from "react";
import { Card } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";


const ComponentCard = (props) => {
    console.log(`props`,props)
    return(
        <>
        <Card className="Card">
        <Card.Img
          className="imgProfile"
          variant="top"
          src={props.img}
        />
        <Card.Body>
          <Card.Title className="title"> {props.name}
            <div>
              <i className="fa-solid fa-pencil"></i>
              <i className="fa-regular fa-trash-can"></i>
              </div>
          </Card.Title>
          <Card.Text>
            <i className="fa-solid fa-location-dot"></i>
            {props.location}
          </Card.Text>
          <Card.Text>
            <i className="fa-solid fa-phone"></i>
            {props.phone}
          </Card.Text>
          <Card.Text>
            <i className="fa-solid fa-envelope"></i>
            {props.email}
          </Card.Text>
        </Card.Body>
      </Card>
        </>
    )
}

export default ComponentCard;