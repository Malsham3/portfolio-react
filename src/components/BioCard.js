import React, { useContext } from "react";
import { Link } from "react-router-dom"
import InfoContext from "../utils/InfoContext"
import PDF from "../utils/MostafaAlshammaryResume.pdf"

// TO BE USED IN THE HOME PAGE
function BioCard() {
  const info = useContext(InfoContext);

  return (
    <div className="container d-flex justify-content-center mt-5">
    <div id="bio-card" className="card">
      {/* Heading */}
      <div className="row mt-3 justify-content-center">
        {/* Image + Bio row */}
        <div className="row mt-3 mx-4">
          {/* Image column */}
          <div className="text-center col-md-4">
            <img
              id="profile-pic"
              src="https://i.ibb.co/g4xNt53/IMG-4431.jpg"
              alt="Profile Picture"
              className="card-img"
            />
            <br />
            <br />
            <br />
          </div>
          {/* Bio column*/}
          <div id="bio" className="col-md-8">
            <h3>Hello, I'm </h3>
            <span id = "name">Mostafa Alshammary</span>
            <h3 id= "web-dev">Full stack web developer.</h3>
            <br />
            <p id="p-tags">{info.bio1}</p>
            <p id = "p-tags"> {info.bio2}</p>
          </div>
        </div>
      </div>
      
      {/* Work and resume  */}
      <div className="row justify-content-center">
        <div className="alert border-0" role="alert">

          {/* directs to Github projects / work page*/}
          <Link className="alert-link" to={`/work`}>WORK</Link>

          ·{/*  Resume */}
          <a
            href= {PDF}
            target="_blank"
            className="alert-link"
          >
            RESUME
          </a>

          ·{/* Contact page */}
          <Link className="alert-link" to={`/contact`}>CONTACT</Link>
          
        </div>
      </div>
      
      {/* Social-Media / Contact */}
      <div id= "social-media" className="row justify-content-center">
        <a href={info.gitHub} target="_blank" className="fa fa-github fa-2x mr-1" />

        <a
          href={info.linkedIn}
          target="_blank"
          className="fa fa-linkedin fa-2x ml-1"
        />
      </div>
    </div>
    </div>
  );
}

export default BioCard;
