// import logo from './logo.svg';
import './App.css';
import AboutUs from './Pages/AboutUs/AboutUs';
import AllNews from './Pages/AllNews/AllNews';
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error'
import ContactUS from './Pages/ContactUs/ContactUS';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OurCourse from './Components/OurCourses/OurCourse';





function App() {
  return (
    <div className="App">

      <Router>

        <Switch>

          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/AboutUs">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/ContactUS">
            <ContactUS></ContactUS>
          </Route>
          <Route exact path="/news/:sourceId">
            <AllNews></AllNews>
          </Route>

          <Route exact path="/OurCourses">
            <OurCourse></OurCourse>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
