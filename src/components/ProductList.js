import React from 'react'
import Product from './Product';
import { ProductConsumer } from '../context';



const ProductList = props => {
        return (
        <React.Fragment>
            <section className="section">
            <h2 className="title is-3">Phones</h2>

            <div className="columns">
                <ProductConsumer>
                    {value => value.products.slice(1,5).map(product => 
                            <div className="column is-one-quarter" key={product.id}>
                                    <Product key={product.id} product={product}/>
                            </div>
                        )
                    }
                </ProductConsumer>
            </div>

            <div className="columns">
                <ProductConsumer>
                    {value => value.products.slice(4,8).map(product => 
                            <div className="column" key={product.id}>
                                    <Product key={product.id} product={product}/>
                            </div>
                        )
                    }
                </ProductConsumer>
            </div>
            </section>
        </React.Fragment>
    )
};

export default ProductList;