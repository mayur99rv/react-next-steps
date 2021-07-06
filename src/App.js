import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactMe from "./pages/ContactMe";
import MovieDetail from "./pages/MovieDetail";

// Router
import { Switch, Route, useLocation } from "react-router-dom";
// animation
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>

          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail></MovieDetail>
          </Route>
          <Route path="/contact" exact>
            <ContactMe />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
