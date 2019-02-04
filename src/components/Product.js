import React from 'react'
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

const Product = props => {

        const { id, title, img, price, company, count, inCart, info } = props.product;
        return (
        <ProductConsumer>
            {value => (
            <div className="card">
                    <div className="card-image" onClick={() => value.handleDetail(id)}>
                        {/* <Link to={{ pathname: "/details", id: props.product.id}}>
                        <figure className="image is-4by3">
                            <img src={props.product.img} alt="" />
                        </figure>
                        </Link> */}
                        <Link to="/details">
                        <figure className="image is-4by3">
                            <img src={props.product.img} alt="" />
                        </figure>
                        </Link>
                    </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{props.product.title}</p>
                            <p className="subtitle is-5">{props.product.company}</p>
                            <p className="subtitle is-6">${props.product.price}</p>
                        </div>
                    </div>
                    <div className="content">
                        <p>{props.info}</p>
                    </div>
                </div>
            <footer className="card-footer">
            {/* <Link to="/details" className="card-footer-item" state={{id: props.product.id}}>Details</Link> */}

            <Link to="/details" onClick={() => value.handleDetail(id)} className="card-footer-item">Details</Link>
            <button  className="button is-large card-footer-item" 
                disabled={props.product.inCart? true: false}
                onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                    }}>
                <span className="icon">
                <i className="fas fa-shopping-cart"></i>
                </span>
            </button>
            </footer>
        </div>
            )}
    </ProductConsumer>

    )
};

export default Product;