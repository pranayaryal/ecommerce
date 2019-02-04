import React from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

const Modal = props => {

        return (
        <ProductConsumer>
            { value =>  {
                const { modalOpen, closeModal } = value; 
                const { img, title, price } = value.modalProduct;
                 return <div className={modalOpen? "modal is-active": "modal"}>
                    <div className="modal-background"></div> 
                    <div className="modal-card">
                        <header>
                            <p className="modal-card-title has-text-white">Item Added To Cart</p>
                            <button className="delete is-pulled-right" aria-label="close" onClick={closeModal}></button>
                        </header>
                        <section className="modal-card-body">
                                <figure className="image is-128x128">
                                    <img src={img} alt="product" />
                                </figure>
                                <p className='title is-6'>{title}</p>
                                <p className='subtitle'>Price: ${price}</p>
                        </section>
                        <footer className="modal-card-foot" onClick={closeModal}>
                            <Link to="/" className="button is-primary">Store</Link>
                            <Link to="/cart" className="button is-warning">Go To Cart</Link>
                        </footer>
                    </div>
                </div>
            }}
        </ProductConsumer>
    )
};

export default Modal;