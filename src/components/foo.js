import React, { useContext, useState } from "react";
import { Link, Carousel } from "react-router-dom";
import InfoContext from "../utils/InfoContext";
import Project1 from "../utils/gifs/employee-tracker.gif";
import Project2 from "../utils/gifs/budget-tracker.gif";
import Project3 from "../utils/gifs/Workout-tracker.gif";
import Project4 from "../utils/gifs/employees-tracker-react.gif";

// TO BE USED IN THE HOME PAGE
function WorkCard() {
  const info = useContext(InfoContext);

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
            </div>
          </div>
          <div className="row mx-3 my-3 justify-content-center">
            <div
              id="carouselExampleCaptions"
              className="carousel slide carousel-fade"
              data-interval="false"
            >

              {/* Actual slides */}
              <div className="carousel-inner">



                {/* First project */}
                <div className="carousel-item active">
                  <img
                    src={Project1}
                    className="d-block w-100"
                    alt="Employee-tracker"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <a
                      id="project-link"
                      href="https://github.com/Malsham3/employee-tracker"
                      target="_blank"
                    >
                      Employee Tracker
                    </a>
                    <p>Staff management CLI application.</p>
                  </div>
                </div>

                {/* Second project */}
                <div className="carousel-item">
                  <img
                    src={Project2}
                    className="d-block w-100"
                    alt="Budget-tracker"
                  />
                  <div
                    id="projects"
                    className="carousel-caption d-none d-md-block"
                  >
                    <a
                      id="projects-link"
                      href="https://github.com/Malsham3/budget-tracker"
                      target="_blank"
                    >
                      Budget Tracker
                    </a>
                    <p id="project-desc">
                      Track your budget and spendings offline. es, offline.
                    </p>
                  </div>
                </div>

                {/* Third project */}
                <div className="carousel-item">
                  <img
                    src={Project3}
                    className="d-block w-100"
                    alt="Workout-Tracker"
                  />
                  <div
                    id="projects"
                    className="carousel-caption d-none d-md-block"
                  >
                    <a
                      id="projects-link"
                      href="https://github.com/Malsham3/workout-tracker"
                      target="_blank"
                    >
                      Workout Tracker
                    </a>
                    <p id="project-desc">
                      Create workout plans, add exercises, and track your
                      progress.
                    </p>
                  </div>
                </div>

                {/* Fourth project */}
                <div className="carousel-item">
                  <img
                    src={Project4}
                    className="d-block w-100"
                    alt="employees-tracker-with-react"
                  />
                  <div
                    id="projects"
                    className="carousel-caption d-none d-md-block"
                  >
                    <a
                      id="projects-link"
                      href="https://github.com/Malsham3/employees-directory-react"
                      target="_blank"
                    >
                      Employee/User directory
                    </a>
                    <p id="project-desc">
                      React application that allows management to access
                      employees information, with ease.
                    </p>
                  </div>
                </div>

                {/* Fifth project */}
                <div className="carousel-item">
                  <img
                    src={Project4}
                    className="d-block w-100"
                    alt="twitch-clips"
                  />
                  <div
                    id="projects"
                    className="carousel-caption d-none d-md-block"
                  >
                    <a
                      id="projects-link"
                      href="https://github.com/eriklowrance/Project-TwitchClips"
                      target="_blank"
                    >
                      Twitch Clips
                    </a>
                    <p id="project-desc">
                      Sign up, Log in, Search your favorite game or streamer and save their clips in your watch list.
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <a
                className="carousel-control-prev"
                href={2}
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>

              <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          {/* guide instructions */}
          <div className="row mx-3 my-3 alert-link">
            <div className="col">
              <p>
                · Click on the name of the project to be directed to it's Github
                repository{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkCard;
