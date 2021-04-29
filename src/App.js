
import React from 'react';
import './App.css';
import Logo from './logo.PNG';
import Home from './Home';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Menu from './Menu';
import Favorites from './Favorites';
function App() {
  
  return (
   <Router>
    <div className="App container-fluid">
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={Logo} width="60px"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Menu">Menu</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/Favorites" > Favorites</Link>
        </li>
      </ul>
      </div>
      </div>
        </nav>
        
        <Route path="/" exact component={Home} />
        <Route path="/Menu"exact component={Menu} />
        <Route path="/Favorites"exact component={Favorites} />
    </div>
    </Router>
  );
}

export default App;
  
