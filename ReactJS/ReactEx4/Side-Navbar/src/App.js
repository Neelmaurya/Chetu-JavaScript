import './App.css';
import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./pages/Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
import Sidebar from './components/Sidebar';
import Contact from './pages/ContactUs';
import {Events, EventsOne, EventsTwo} from './pages/Events';
import Support from './pages/Support';

function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar />
      <Switch>
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/about-us/aim" exact component={OurAim} />
        <Route path="/about-us/vision" exact component={OurVision} />
        <Route path="/services" exact component={Services} />
        <Route path="/services/services1" exact component={ServicesOne} />
        <Route path="/services/services2" exact component={ServicesTwo} />
        <Route path="/services/services3" exact component={ServicesThree} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/events" exact component={Events} />
        <Route path="/events/events1" exact component={EventsOne} />
        <Route path="/events/events2" exact component={EventsTwo} />
        <Route path="/support" exact component={Support} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
