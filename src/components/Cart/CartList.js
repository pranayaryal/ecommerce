import React from 'react'

const CartList = ({value}) => {
        const { cart, increment, decrement, removeItem } = value;
        return (
        <div>
            {cart.map(item => 
                <div className='columns is-centered' key={item.id}>
                    <div className='column'>
                        <figure className="image is-128x128">
                            <img src={item.img} alt="item" />
                        </figure>
                    </div>
                    <div className='column'>
                        <p>{item.title} by {item.company}</p>
                    </div>
                    <div className='column'>
                        Price: ${item.price}
                    </div>
                    <div className='column'>
                        <a href="#" className="button is-small" onClick={() => decrement(item.id)}>-</a>
                        <span className="subtitle">{item.count}</span>
                        <a href="#" className="button is-small" onClick={() => increment(item.id)}>+</a>
                    </div>
                    <div className='column'>
                        <span className="icon">
                            <i className="fa fa-trash" aria-hidden="true" onClick={() => removeItem(item.id)}></i>
                        </span>
                    </div>
                    <div className='column'>
                        <p>{item.price * item.count}</p>
                    </div>
                </div>
                )
            }
        </div>
    )
};

export default CartList;