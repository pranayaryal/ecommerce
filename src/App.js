import React from 'react'; 
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Modal from './components/Modal'
import Checkout from './components/Checkout';
import { StripeProvider, Elements } from 'react-stripe-elements'


const App = () =>  {
    return (

      <React.Fragment>
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/cart" component={Cart} />
              <Route path="/details" component={Details} />

              <StripeProvider apiKey="pk_test_j8RzazkDnk8i4oaguikkv4gO">
                  <Elements>
                      <Route path="/checkout" component={Checkout}/>
                  </Elements>
              </StripeProvider>
              <Route component={Default}/>
            </Switch>
            <Modal/>
          </div>
      </React.Fragment>
    );
  }

export default App;
