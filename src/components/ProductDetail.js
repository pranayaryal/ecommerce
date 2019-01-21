import React from 'react'
import { Link } from 'react-router-dom'

const ProductDetail = props => {
        const {id, title, img, price, company, count, inCart, info }  = props.product
        return (
        <section className="section">
                        <article className="media">
                            <div className="media-left">
                            <figure className="image is-256x256">
                                <img src={img} alt="Image" />
                            </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <p className="title is-8">{title}</p>
                                    <p className="tiel is-7">{company}</p>
                                    <p className="subtitle">${price}</p>
                                    <p className="has-text-grey">{info}</p>
                                    <Link to="/" className="button is-primary">Back To Products</Link>
                                    <Link to="/cart" className="button is-warning" disabled={inCart? true: false}>
                                        { inCart? 'In Cart': 'Add To Cart'} 
                                    </Link>
                                </div>
                            </div>
                        </article>

        </section>
    )
};

export default ProductDetail;