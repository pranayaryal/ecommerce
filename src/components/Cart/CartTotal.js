import React, { useEffect }  from 'react'

const CartTotal = ({value}) => {
        const { cartTotal, cartSubtotal, cartTax, clearCart} = value

        return (
        <div className='columns'>
            <div className='column is-four-fifths'></div>
            <div className='column is-pulled-right'>
                <button className="button is-danger is-uppercase"
                onClick={clearCart}>Clear Cart</button>
                <br/><br/>
                <p>Subtotal: ${cartSubtotal}</p>
                <p>Tax: ${cartTax}</p>
                <p>Total: ${cartTotal}</p>
                <br/>
            </div>
        </div>
    )
};

export default CartTotal;