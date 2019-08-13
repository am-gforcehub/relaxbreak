import React from "react";
import "./style.css";

import { Link } from "react-router-dom";
function HomeCard(props) {
  console.log(props.image);
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <p> {props.content}</p>
      </div>
      <div className="btn">
        <div className="button-col">
          <Link to={`/personality/${props.name}`}>
            <button> {props.button} </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
