import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const SingleLink = (props) => {
  return (
    <li className="my-2">
      <FontAwesomeIcon icon={props.icon} className="mr-2" />
      <Link to="/">{props.link}</Link>
    </li>
  );
};

export default SingleLink;
