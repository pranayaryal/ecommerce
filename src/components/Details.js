import React from 'react'
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

const Details = props => {
    return (
        <div>
            <ProductConsumer>
                {value => {
                    const { addToCart, openModal } = value
                    // const prod = value.products.find(product =>
                    //     product.id == props.location.id)
                    const prod = value.productDetail;
                    const { id, title, img, price, company, count, inCart, info } = prod;

                    return <section className="section">
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
                                    <button className="button is-warning"
                                        disabled={inCart ? true : false}
                                        onClick={() => {
                                            addToCart(id);
                                            openModal(id)
                                        }}>
                                        {inCart ? 'In Cart' : 'Add To Cart'}
                                    </button>
                                </div>
                            </div>
                        </article>

                    </section>

                }}
            </ProductConsumer>

        </div>
    )
};

export default Details;