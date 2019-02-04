import React from 'react'
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotal from './CartTotal';

const Cart = props => {

    return (
        <div>
        <ProductConsumer>
            {value => {
                const { cart } = value;
                if (cart.length > 0){
                    return (
                        <React.Fragment>
                            <CartColumns />
                            <CartList value={value} />
                            <CartTotal value={value}/>
                            <Link to="/checkout" className="button is-primary">
                                Proceed To Checkout
                            </Link>
                        </React.Fragment>
                    )
                }
            }
            }
        </ProductConsumer>
        </div>
    )
};

export default Cart;