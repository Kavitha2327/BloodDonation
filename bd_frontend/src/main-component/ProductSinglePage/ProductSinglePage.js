import React, { Fragment, useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import { connect } from "react-redux";
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { addToCart } from "../../store/actions/action";
import Product from './product';
import api from "../../api";
import Footer from '../../components/footer/Footer';
import ProductTabs from './alltab';

const ProductSinglePage = (props) => {
    const { slug } = useParams();
    const { addToCart } = props;
    const [product, setProduct] = useState({});

    const productsArray = useMemo(() => api(), []);
    const Allproduct = productsArray;

    useEffect(() => {
        const selectedProduct = Allproduct.filter(product => product.slug === String(slug));
        setProduct(selectedProduct);
    }, [Allproduct, slug]); 

    const item = product[0];

    return (
        <Fragment>
            <Header hclass={'header--styleFour'} />
            <PageTitle pageTitle={item?.title} pagesub={'Product'} />
            <section className="product-details pt-130 pb-100">
                <div className="container">
                    {item ? (
                        <Product item={item} addToCart={addToCart} />
                    ) : null} 
                    <ProductTabs />
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.data.products,
    };
};

export default connect(mapStateToProps, { addToCart })(ProductSinglePage);
