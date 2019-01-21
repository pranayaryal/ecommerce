import React, { useState } from 'react'
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext()


const ProductProvider = props => {
    const [ products, setProducts ] = useState(storeProducts);
    const [ productDetail, setProductDetail ] = useState(detailProduct)

    const getItem = id => {
        const product = products.find(item => item.id === id);
        return product;
    }

    const handleDetail = id => {
        const product = getItem(id);
        setProductDetail(product);
    }

    const addToCart = id => {
        console.log(`The id added is ${id}`)
    }

    return (
        <ProductContext.Provider value={{ 
            products, productDetail,
             handleDetail: handleDetail,
             addToCart: addToCart}}>
           { props.children } 
        </ProductContext.Provider>
    )
};


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

