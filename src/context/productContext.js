import React, { createContext, useContext, useReducer } from 'react'
import ProductsData from '../assets/product.json'

const ProductContext = createContext();

const filterOperation = (filterObj) => {
    let filterdProducts = [...ProductsData]
    console.log('filterdProducts', filterdProducts, filterObj)

    if (filterObj['sizes'].length !== 0) {
        console.log(filterdProducts.filter(prod => prod.size.some(ele => filterObj['sizes'].includes(ele))))
        filterdProducts = filterdProducts.filter(prod => prod.size.some(ele => filterObj['sizes'].includes(ele)))

    }

    if (filterObj['brands'].length !== 0) {
        filterdProducts = filterdProducts.filter(prod => filterObj['brands'].includes(prod.brand))
    }

    if (filterObj['ideal'].length !== 0) {
        filterdProducts = filterdProducts.filter(prod => filterObj['ideal'].includes(prod.category))

    }


    return filterdProducts
}

const productReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCT':
            return {
                product: ProductsData,

            }

        case 'HIGH-TO-LOW':

            return {
                product: state.product.sort((a, b) => b.price - a.price)
            }

        case 'LOW-TO-HIGH':

            return {
                product: state.product.sort((a, b) => a.price - b.price)
            }


        case 'FILTER':
            let filteredProd = filterOperation(action.payload)
            return {
                product: filteredProd
            }
        case 'CLEAR_ALL':
        return {
                product: ProductsData
            }

        default:
            return state

    }
}

let intialState = {
    product: ProductsData
}

export const ProductProvider = ({ children }) => {


    const [state, dispatch] = useReducer(productReducer, intialState)

    return (
        <>
            <ProductContext.Provider value={{ products: state, dispatchProduct: dispatch }}>
                {children}
            </ProductContext.Provider>
        </>)
}

export const useProduct = () => {
    return useContext(ProductContext)
}