import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AllBooking from './components/AllBookings/AllBookings';
import Booking from './components/Home/Booking/Booking';
import Home from './components/Home/Home';
import Login from './components/login/Login/Login';
import PrivateRoute from './components/login/PrivateRoute/PrivateRoute';
import MyBooking from './components/MyBooking/MyBooking';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Header from './components/Shared/Header/Header'
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/home">
              <Home></Home>
          </Route>
          <PrivateRoute path="/booking/:id">
              <Booking/>
          </PrivateRoute>
          <PrivateRoute path="/myBooking">
              <MyBooking/>
          </PrivateRoute>
          <PrivateRoute path="/allBooking">
              <AllBooking/>
          </PrivateRoute>
          <Route path="/login">
              <Login/>
          </Route>
          <Route path="/register">
              <Register></Register>
          </Route>
          <Route path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
