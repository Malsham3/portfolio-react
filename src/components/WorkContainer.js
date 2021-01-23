import React from "react";
import { Link } from "react-router-dom";
import WorkCard from "./WorkCard";

function WorkContainer() {
  return (
    <>
      <Link className="alert-link" id="go-back" to={`/`}>
        Go Back
      </Link>
      <div className="container d-flex justify-content-center mt-5">
        <div className="card">
          {/* Heading */}
          <div className="row mt-3 justify-content-center">
            <div className="col text-center">
              <h3>Recent work that I am proud of.</h3>
              <p id="project-p">
                Click on the name of the project in the caption to be directed to it's Github
                repository
              </p>
            </div>
          </div>
          <div className="row mx-3 my-3 justify-content-center">
            <WorkCard />
          </div>
        </div>
      </div>
      {/* guided instructions */}
    </>
  );
}

export default WorkContainer;
