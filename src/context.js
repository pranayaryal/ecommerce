import React, { useState, useEffect } from 'react'
import { storeProducts, detailProduct } from './data';
import { CardElement, injectStripe } from 'react-stripe-elements'

const ProductContext = React.createContext()

const ProductProvider = props => {

    const [products, setProducts] = useState(storeProducts);
    const [productDetail, setProductDetail] = useState(detailProduct)
    // const [cart, setCart] = useState(storeProducts.slice(1,3))
    const [cart, setCart] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const [modalProduct, setModalProduct] = useState(detailProduct);
    const [cartSubtotal, setCartSubtotal] = useState(0);
    const [cartTax, setCartTax] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);


    const getItem = id => {
        const product = products.find(item => item.id === id);
        return product;
    }

    const handleDetail = id => {
        const product = getItem(id);
        setProductDetail(product);
    }

    const openModal = id => {
        const product = getItem(id)
        setModalProduct(product)
        setModalOpen(true)

    }
    
    const getTotal = () => {
        let subTotal = 0
        cart.map(item => subTotal += (item.total))
        const tempTax = subTotal * 0.1
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax;
        setCartSubtotal(subTotal)
        setCartTotal(total)
        setCartTax(tax)

    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const increment = id => {

        let tempCart = [...cart]
        const selectedProduct = tempCart.find(item => item.id == id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count ++
        product.total = product.count * product.price

        setCart([...tempCart])
        getTotal()
    }

    const decrement = id => {

        let tempCart = [...cart]
        const selectedProduct = tempCart.find(item => item.id == id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count = product.count - 1

        if (product.count === 0){
            removeItem(id)
        }
        else {
            product.total = product.count * product.price
            setCart([...tempCart])
            getTotal()
        }
    }

    const getPrice = id => {
        let tempProducts = [...products];
        const index = tempProducts.indexOf(getItem(id));
        const product = tempProducts[index];
        const price = product.price;
        return price;
    }
    

    const removeItem = id => {
        let tempCart = [...cart]
        tempCart = tempCart.filter(item => item.id != id)

        let tempProducts = [...products]
        const index = tempProducts.indexOf(getItem(id))
        let removedProduct = tempProducts[index]
        removedProduct.inCart = false;
        removedProduct.count = 0
        removedProduct.total = 0

        setCart([...tempCart])
        setProducts([...tempProducts])
        getTotal()

    }

    const clearCart = () => {
        setCart([])
        const tempProducts = products.map(product => {
            return {...product, inCart : false};
        })
        setProducts(tempProducts)

    }

    const addToCart = id => {
        let tempProducts = [...products];
        const index = tempProducts.indexOf(getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price
        setProducts(tempProducts);
        setCart([...cart, product])

        // const sum = cart.reduce((total, item) => {
        //     return total + (item.count * item.price)
        // })
        getTotal()



    }

    return (
        <ProductContext.Provider value={{
            products,
            productDetail,
            handleDetail,
            cart,
            modalOpen,
            addToCart,
            openModal,
            closeModal,
            modalProduct,
            increment,
            decrement,
            clearCart,
            removeItem,
            cartSubtotal,
            cartTotal,
            cartTax,
            clearCart

        }}>
            {props.children}
        </ProductContext.Provider>
    )
};


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

