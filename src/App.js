import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch }  from 'react-router-dom'
import Cart from './views/Cart'
import Home from './views/Home'
function App() {
  
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/cart" component={Cart} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
