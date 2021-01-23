import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Work from "./pages/Work/Work";
import Home from "./pages/Home/Home";


function App() {

  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/work" component={Work} />
    </BrowserRouter>
  );
}

export default App;
