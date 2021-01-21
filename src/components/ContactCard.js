import React, { useContext } from "react";
import { Link } from "react-router-dom";
import InfoContext from "../utils/InfoContext";

function ContactCard() {
  const info = useContext(InfoContext);

  return (
      <>
      <Link className="alert-link" id = "go-back" to={`/`}>
        Go Back
      </Link>
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div id="contact-card" className="card">
        {/* Go back to main page link */}
        <div className="row mt-3 justify-content-center">
          <div className="col">
            {/* <Link className="alert-link" to={`/`}>Go Back</Link> */}
          </div>
        </div>
        {/* Heading */}
        <div className="row mt-3">
          <div className="col text-center">
            <h3>{info.name}</h3>
            <br />
            <a
              href="mailto:m.alsham627@gmail.com"
              id="contact-string"
              className="alert-link"
            >
              {info.email}
            </a>
            <br />
            <br />
            <a
              id="contact-string"
              href="tel:623-363-5283"
              className="alert-link"
            >
              {info.phoneNumber}
            </a>
          </div>
        </div>
      </div>
      {/* End container */}
    </div>
    </>
  );
}

export default ContactCard;
