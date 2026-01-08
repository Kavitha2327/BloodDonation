import React, {Fragment} from 'react';
import PageTitle from "../../components/pagetitle/PageTitle";
import Header from '../../components/header/Header';
import CheckoutSection from '../../components/CheckoutSection'
import Scrollbar from '../../components/scrollbar/scrollbar'
import {connect} from "react-redux";
import Footer from '../../components/footer/Footer';

const CheckoutPage =({cartList}) => {
    return(
        <Fragment>
            <Header hclass={'header--styleFour'} />
            <PageTitle pageTitle={'Checkout'} pagesub={'Checkout'}/> 
            <CheckoutSection cartList={cartList}/>
            <Footer />
            <Scrollbar/>
        </Fragment>
    )
};
const mapStateToProps = state => {
    return {
        cartList: state.cartList.cart,
        symbol: state.data.symbol
    }
};

export default connect(mapStateToProps)(CheckoutPage);
