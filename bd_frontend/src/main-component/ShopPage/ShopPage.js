import React, { Fragment } from 'react';
import { connect } from "react-redux";
import api from "../../api";
import { addToCart, addToWishList, addToCompareList } from "../../store/actions/action";
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Product from '../../components/Product';


const ShopPage = ({ addToCart, addToWishList, addToCompareList }) => {
    const productsArray = api();

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };
    const addToWishListProduct = (product, qty = 1) => {
        addToWishList(product, qty);
    };

    const addToCompareListProduct = (product, qty = 1) => {
        addToCompareList(product, qty);
    };

    const products = productsArray;


    return (
        <Fragment>
            <Header hclass={'header--styleFour'} />
            <main className="main shop-page">
                <PageTitle pageTitle={'Online Shop'} pagesub={'Shop'}/>
                <Product
                    addToCartProduct={addToCartProduct}
                    addToWishListProduct={addToWishListProduct}
                    addToCompareListProduct={addToCompareListProduct}
                    products={products}
                />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default connect(null, { addToCart, addToWishList, addToCompareList })(ShopPage);
