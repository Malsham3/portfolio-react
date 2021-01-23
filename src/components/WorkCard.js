import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Project1 from "../utils/gifs/employee-tracker.gif";
import Project2 from "../utils/gifs/budget-tracker.gif";
import Project3 from "../utils/gifs/Workout-tracker.gif";
import Project4 from "../utils/gifs/employees-tracker-react.gif";
import Project5 from "../utils/gifs/twitchclips.gif";

function WorkCard() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {/* First Project */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Project1}
            alt="Employee-tracker"
          />
          <Carousel.Caption>
            <a
              id="project-link1"
              href="https://github.com/Malsham3/employee-tracker"
              target="_blank"
            >
              Employee Tracker
            </a>
            <p id= "project-p">Staff management CLI application.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Second Project */}
        <Carousel.Item>
          <img className="d-block w-100" src={Project2} alt="Budget-tracker" />

          <Carousel.Caption className="project-details">
            <a
              id="project-link"
              href="https://github.com/Malsham3/budget-tracker"
              target="_blank"
            >
              Budget Tracker
            </a>
            <p id= "project-p">Track your budget and spendings offline. Yes, offline.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Third Project */}
        <Carousel.Item>
          <img className="d-block w-100" src={Project3} alt="Workout-Tracker" />

          <Carousel.Caption className="project-details">
            <a
              id="project-link"
              href="https://github.com/Malsham3/workout-tracker"
              target="_blank"
            >
              Workout Tracker
            </a>
            <p id= "project-p">Create workout plans, add exercises, and track your progress.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Fourth Project */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Project4}
            alt="employees-tracker-with-react"
          />

          <Carousel.Caption className="project-details">
            <a
              id="project-link"
              href="https://github.com/Malsham3/employees-directory-react"
              target="_blank"
            >
              Employee / User directory
            </a>
            <p id= "project-p">
              React application that allows management to access employees
              information, with ease.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Fifth Project */}
        <Carousel.Item>
          <img className="d-block w-100" src={Project5} alt="Twitch-Clips" />

          <Carousel.Caption className="project-details">
            <a
              id="project-link"
              href="https://github.com/eriklowrance/Project-TwitchClips"
              target="_blank"
            >
              Twitch Clips
            </a>
            <p id= "project-p">
              Sign up, Log in, Search your favorite game or streamer and save
              their clips in your watch list.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default WorkCard;
