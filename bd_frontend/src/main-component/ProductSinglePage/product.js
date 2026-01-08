import React, { useState } from "react";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Link } from 'react-router-dom'

const Product = ({ item, addToCart }) => {

    const [qty, setQty] = useState(1);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const donation = {

    }

    return (
        // <div className="row align-items-center">
        //     <div className="col-lg-6 mb-50">
        //         {/* <div className="productImages-gallery">
        //             <div className="productImages-gallery__tabs">
        //                 <div className="tab-content" id="v-pills-tabContent">
        //                     <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
        //                         <div className="productImages-gallery__main">
        //                             <Zoom>
        //                                 <img src={item.proImg ? item.proImg : ''} alt="products" />
        //                             </Zoom>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div> */}
        //         <div className="col-lg-4 col-sm-6 mb-35">
        //             <div className={`featureBlock ${activeIndex === index ? "featureBlock--active" : ""}`}>
        //                 <div className="featureBlock__wrap">
        //                     <figure className="featureBlock__thumb">
        //                         <Link to={"#"} className="featureBlock__thumb__link">
        //                             <img src={port + "Events/" + donation.filename} alt="" />
        //                         </Link>
        //                         <Link  to={`#`} className="featureBlock__hashLink">
        //                             <span className="featureBlock__hashLink__text">{donation.thumb}</span>
        //                         </Link>
        //                     </figure>
        //                     <div className="featureBlock__content">
        //                         <h3 className="featureBlock__heading">
        //                             <Link to={"#"} className="featureBlock__heading__link">
        //                                 {donation.EventName}
        //                             </Link>
        //                         </h3>
        //                         <p className="featureBlock__text" style={{ fontWeight: 600, color: "black", marginBottom: "0.2rem" }}>
        //                             Venue: {donation.Place.join(", ")}
        //                         </p>
        //                         <p className="featureBlock__text" style={{ fontWeight: 600, color: "black" }}>
        //                             Date: {donation.Date.split("-").reverse().join("-")}
        //                         </p>
        //                     </div>
        //                 </div>


        //             </div>
        //         </div>


        //     </div>
        //     <div className="col-lg-5 mb-50">
        //         <div className="productDetails-block">
        //             <h3 className="productDetails-block__heading mb-15">{item.title}</h3>
        //             <p className="productDetails-block__text">Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        //                 eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        //             <div className="productDetails-block__rating">
        //                 <ul>
        //                     <li>
        //                         <i className="fa-solid fa-star"></i>
        //                         <i className="fa-solid fa-star"></i>
        //                         <i className="fa-solid fa-star"></i>
        //                         <i className="fa-solid fa-star"></i>
        //                         <i className="fa-solid fa-star"></i>
        //                         <span>(4 customer review)</span>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div className="productDetails-block__price mb-20">
        //                 <span>${item.price}<sub>/120</sub></span>
        //             </div>
        //             <span className="productDetails-block__title">Model</span>
        //             <div className="productDetails-block__model mb-30">
        //                 <div className="productDetails-block__model__single">
        //                     <input id="model1" type="checkbox" />
        //                     <label htmlFor="model1">tyk</label>
        //                 </div>
        //                 <div className="productDetails-block__model__single">
        //                     <input id="model2" type="checkbox" />
        //                     <label htmlFor="model2">ffd2</label>
        //                 </div>
        //                 <div className="productDetails-block__model__single">
        //                     <input id="model3" type="checkbox" />
        //                     <label htmlFor="model3">23tt</label>
        //                 </div>
        //                 <div className="productDetails-block__model__single">
        //                     <input id="model4" type="checkbox" />
        //                     <label htmlFor="model4">r454</label>
        //                 </div>
        //                 <div className="productDetails-block__model__single">
        //                     <input id="model5" type="checkbox" />
        //                     <label htmlFor="model5">45hy</label>
        //                 </div>
        //             </div>
        //             <div className="productDetails-block__quantity mb-25">
        //                 <span className="productDetails-block__title mb-0">Quantity</span>
        //                 <div className="input-group number-spinner">
        //                     <span className="input-group-btn">
        //                         <button className="btn btn-default quantity-minus" data-dir="dwn" onClick={() => setQty(qty <= 1 ? 1 : qty - 1)}>
        //                             <i className="fa-solid fa-arrow-left-long"></i>
        //                         </button>
        //                     </span>
        //                     <input
        //                         value={qty}
        //                         onChange={() => setQty(qty)}
        //                         type="text"
        //                         className="form-control text-center quantity-input"
        //                     />
        //                     <span className="input-group-btn">
        //                         <button className="btn btn-default quantity-plus" data-dir="up" onClick={() => setQty(qty + 1)}>
        //                             <i className="fa-solid fa-arrow-right-long"></i>
        //                         </button>
        //                     </span>
        //                 </div>
        //             </div>
        //             <div className="productDetails-block__buttons">
        //                 <button className="btn btn--styleOne btn--secondary it-btn" onClick={() => addToCart(item, qty)}>
        //                     <span className="btn__text">Add to cart</span>
        //                     <span className="it-btn__inner">
        //                         <span className="it-btn__blobs">
        //                             <span className="it-btn__blob"></span>
        //                             <span className="it-btn__blob"></span>
        //                             <span className="it-btn__blob"></span>
        //                             <span className="it-btn__blob"></span>
        //                         </span>
        //                     </span>
        //                     <svg className="it-btn__animation" xmlns="http://www.w3.org/2000/svg" version="1.1">
        //                         <defs>
        //                             <filter>
        //                                 <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10">
        //                                 </feGaussianBlur>
        //                                 <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
        //                                 </feColorMatrix>
        //                                 <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
        //                             </filter>
        //                         </defs>
        //                     </svg>
        //                 </button>
        //                 <Link onClick={ClickHandler} className="btn btn--styleOne btn--primary it-btn" to="/products">
        //                     <span className="btn__text">Buy Now</span>
        //                     <span className="it-btn__inner">
        //                         <span className="it-btn__blobs">
        //                             <span className="it-btn__blob"></span>
        //                             <span className="it-btn__blob"></span>
        //                             <span className="it-btn__blob"></span>
        //                             <span className="it-btn__blob"></span>
        //                         </span>
        //                     </span>
        //                     <svg className="it-btn__animation" xmlns="http://www.w3.org/2000/svg" version="1.1">
        //                         <defs>
        //                             <filter>
        //                                 <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
        //                                 <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
        //                                 </feColorMatrix>
        //                                 <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
        //                             </filter>
        //                         </defs>
        //                     </svg>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    // );
    <>sdf</>)
};

export default Product;
