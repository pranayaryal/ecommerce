import React from 'react'

const CartColumns = props => {
        return (
        <div>
            <div className="columns is-hidden-touch">
                <div className='column'>
                    <p className="is-uppercase">product</p>
                </div>
                <div className='column is-centered'>
                    <p className="is-uppercase">name of product</p>
                </div>
                <div className='column'>
                    <p className="is-uppercase">price</p>
                </div>
                <div className='column'>
                    <p className="is-uppercase">quantity</p>
                </div>
                <div className='column'>
                    <p className="is-uppercase">remove</p>
                </div>
                <div className='column'>
                    <p className="is-uppercase">total</p>
                </div>

            </div>
        </div>
    )
};

export default CartColumns;