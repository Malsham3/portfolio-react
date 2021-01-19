import { BrowserRouter, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Home from "./pages/Home";
import Container from "./components/Container";

function App() {
  return (
      <BrowserRouter>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/work" component={Work} />
      </BrowserRouter>
  );
}

export default App;
