import React from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'

const CardForm = props => {
    return (
        <div>
            <form onSubmit={() => props.stripe.createToken().then(payload => console.log(payload))}>
                <label>
                    Card details
                    <CardElement />
                </label>
                <button>Pay</button>
            </form>
            )
        </div>
    )
};

export default injectStripe(CardForm);