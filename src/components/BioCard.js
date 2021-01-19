import React from "react";

function BioCard() {
  return (
    <div id="bio-card" class="card">
      {/* Heading */}
      <div class="row mt-3 justify-content-center">
        <div class="col text-center">
          <h3>Hello, I'm Mostafa Alshammary.</h3>
          <h3>I'm a future full stack web developer.</h3>
        </div>

        <div class="row mt-3 mx-4">
          <div class="text-center col-md-6">
            <img
              id="profile-pic"
              src="https://i.ibb.co/g4xNt53/IMG-4431.jpg"
              alt="Profile Picture"
              class="card-img"
            />
            <br />
            <br />
            <br />
          </div>

          {/* Bio Column */}
          <div id="bio" class="align-self-center text-center col-md-6">
            <p>
              I first became interested in coding when I was in college. A
              couple of the pre-requesites I had to take for my Mechanical
              Engineering degree were introduction to programming courses. After
              successfully completing those courses, I wanted more!
            </p>
            <p>
              {" "}
              I have been enjoying the University of Arizona Coding BootCamp and
              looking forward to working in the field of web development and the
              tech industry.
            </p>
          </div>
        </div>
      </div>

      {/* Social-media / Contact */}
      <div class="row justify-content-center">
        <a
          href="https://github.com/Malsham3"
          target="_blank"
          class="fa fa-github fa-2x"
        ></a>
        <a
          href="https://www.linkedin.com/in/mostafa-alshammary-22698a1b9/"
          target="_blank"
          class="fa fa-linkedin fa-2x"
        ></a>
      </div>

      {/* Work and Resume */}
      <div class="row justify-content-center">
        <div class="alert border-0" role="alert">
          <a href="work.html" class="alert-link">
            WORK
          </a>
          ·
          <a
            href="MostafaAlshammaryResume.pdf"
            target="_blank"
            class="alert-link"
            download
          >
            RESUME
          </a>
          ·
          <a href="contact.html" target="_blank" class="alert-link" download>
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
}

export default BioCard;
