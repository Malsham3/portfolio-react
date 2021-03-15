import React from "react";

const InfoContext = React.createContext({
  name: "Mostafa Alshammary",
  phoneNumber: "(623)-363-5283",
  email: "m.alsham627@gmail.com",
  gitHub: "https://github.com/Malsham3",
  linkedIn: "https://www.linkedin.com/in/mostafa-alshammary-22698a1b9/",
  bio1: `Music enthusiast, fitness  and health fanatic, traveler and more. Fueld by high energy and passion. A quick learner, who's able to pick up new skills and take on different projects with relative ease`,
  bio2: `Loves to design, build clean and user-friendly web applications. Also enjoys finding bugs and fixing broken code.`
  
});

export default InfoContext;