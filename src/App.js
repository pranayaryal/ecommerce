import React from 'react'; 
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';


const App = () =>  {
    return (
      <React.Fragment>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/cart" component={Cart} />
            <Route path="/details" component={Details} />
            <Route component={Default}/>
          </Switch>
        </div>
      </React.Fragment>
    );
  }

export default App;
