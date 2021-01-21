import React from "react";

const InfoContext = React.createContext({
  name: "Mostafa Alshammary",
  phoneNumber: "(623)-363-5283",
  email: "m.alsham627@gmail.com",
  gitHub: "https://github.com/Malsham3",
  linkedIn: "https://www.linkedin.com/in/mostafa-alshammary-22698a1b9/",
  bio1: `I first became interested in coding when I was in college. A couple of the pre-requesites I had to take
  for
  my Mechanical Engineering degree were introduction to programming courses. After successfully completing
  those
  courses, I wanted more`,
  bio2: `I have been enjoying the University of Arizona Coding BootCamp and looking forward to working in the
  field
  of web development and the tech industry.`
  
});

export default InfoContext;