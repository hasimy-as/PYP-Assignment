import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Features from "./pages/Features";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route exact path="/features" exact component={Features} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
