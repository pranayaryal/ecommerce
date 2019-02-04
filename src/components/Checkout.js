import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { CardElement, injectStripe } from 'react-stripe-elements';
import { ProductConsumer } from '../context';


const Checkout = props => {

    const submit = async(ev) => {
        let { token } = await props.stripe.createToken({name: 'Name'});
        let response = await fetch('/charge', {
            method: 'POST',
            headers: { "Content-Type": "text/plain"},
            body: token.id
        })

        if (response.ok) console.log('Purchase Complete')
    }

    return (
       <ProductConsumer>
           {value => { 
            return <div className="container">
                        <div className="columns">
                            <div className='column'>
                            <p>{ `Would you like to complete the purchase total of $${value.cartTotal}?` }</p>
                            </div>
                            <div className='column'>
                                <CardElement />
                            </div>
                            <div className='column'>
                                <button className="button is-primary"
                                onClick={submit}
                                >Send</button>
                            </div>
                        </div>
                    </div>
            }
           }
       </ProductConsumer>
    );

};

export default injectStripe(Checkout);