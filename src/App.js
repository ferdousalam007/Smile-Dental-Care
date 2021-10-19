import './App.css';
import "@material-tailwind/react/tailwind.css";
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import Register from './components/Register/Register';
import SingleService from './components/SingleService/SingleService';
import Notfound from './components/NotFound/Notfound';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Apontment from './components/Apontment/Apontment';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
            <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute exact path="/Services/:id">
            <SingleService></SingleService>
            </PrivateRoute>
            <PrivateRoute exact path="/apointment">
            <Apontment></Apontment>
            </PrivateRoute>
            <PrivateRoute exact path="/privacypolicy">
            <PrivacyPolicy></PrivacyPolicy>
            </PrivateRoute>
            <Route path="*">
            <Notfound></Notfound>
          </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
