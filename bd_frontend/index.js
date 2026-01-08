import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip'

const Product = ({ products, addToCartProduct, addToWishListProduct, addToCompareListProduct }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="productTop pt-130 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="shopFilter__body">
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    {products.length > 0 &&
                      products.slice(0, 12).map((product, pitem) => (
                        <div className="col-lg-3 mb-24" key={pitem}>
                          <div className="productBlock">
                            {product.badge1 ?
                              <span className="productBlock__tags">{product.badge1}</span>
                              : ''}
                            <figure className="productBlock__thumb">
                              <div className="productBlock__thumb__main">
                                <Link onClick={ClickHandler} to={`/product-single/${product.slug}`}>
                                  <img src={product.proImg} alt="Gainioz Product" />
                                </Link>
                              </div>
                              <div className="productBlock__thumb__hover">
                                <Link onClick={ClickHandler} to={`/product-single/${product.slug}`}>
                                  <img src={product.proImg2} alt="Gainioz Product" />
                                </Link>
                              </div>
                            </figure>
                            <div className="productBlock__content">
                              <div className="productBlock__content__main">
                                <h3 className="productBlock__name"><Link onClick={ClickHandler} to={`/product-single/${product.slug}`}> {product.title}</Link></h3>
                                <span className="productBlock__price">${product.price}</span>
                                <span className="productBlock__ratings">
                                  <i className="fa-solid fa-star active"></i>
                                  <i className="fa-solid fa-star active"></i>
                                  <i className="fa-solid fa-star active"></i>
                                  <i className="fa-solid fa-star active"></i>
                                  <i className="fa-solid fa-star"></i>
                                </span>
                              </div>
                              <div className="productBlock__content__hover">
                                <div className="productBlock__actions">
                                  <button type="button" className="btn btn-secondary"
                                    onClick={() => addToCartProduct(product)}
                                    data-tooltip-id="cart-tooltip" data-tooltip-content="Add to Cart"
                                  >
                                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13.2363 4H11.5254L8.50195 0.460938C8.29102 0.226562 7.93945 0.203125 7.70508 0.390625C7.4707 0.601562 7.44727 0.953125 7.63477 1.1875L10.0488 4H3.46289L5.87695 1.1875C6.06445 0.953125 6.04102 0.601562 5.80664 0.390625C5.57227 0.203125 5.2207 0.226562 5.00977 0.460938L1.98633 4H0.298828C0.134766 4 0.0175781 4.14062 0.0175781 4.28125V4.84375C0.0175781 5.00781 0.134766 5.125 0.298828 5.125H0.720703L1.37695 9.78906C1.44727 10.3516 1.91602 10.75 2.47852 10.75H11.0332C11.5957 10.75 12.0645 10.3516 12.1348 9.78906L12.791 5.125H13.2363C13.377 5.125 13.5176 5.00781 13.5176 4.84375V4.28125C13.5176 4.14062 13.377 4 13.2363 4ZM11.0332 9.625H2.47852L1.86914 5.125H11.6426L11.0332 9.625ZM7.33008 6.4375C7.33008 6.13281 7.07227 5.875 6.76758 5.875C6.43945 5.875 6.20508 6.13281 6.20508 6.4375V8.3125C6.20508 8.64062 6.43945 8.875 6.76758 8.875C7.07227 8.875 7.33008 8.64062 7.33008 8.3125V6.4375ZM9.95508 6.4375C9.95508 6.13281 9.69727 5.875 9.39258 5.875C9.06445 5.875 8.83008 6.13281 8.83008 6.4375V8.3125C8.83008 8.64062 9.06445 8.875 9.39258 8.875C9.69727 8.875 9.95508 8.64062 9.95508 8.3125V6.4375ZM4.70508 6.4375C4.70508 6.13281 4.44727 5.875 4.14258 5.875C3.81445 5.875 3.58008 6.13281 3.58008 6.4375V8.3125C3.58008 8.64062 3.81445 8.875 4.14258 8.875C4.44727 8.875 4.70508 8.64062 4.70508 8.3125V6.4375Z" fill="#8B8F9E" />
                                    </svg>
                                  </button>
                                  <Tooltip id="cart-tooltip" />
                                  <button type="button" className="btn btn-secondary"
                                    onClick={() => addToCompareListProduct(product)}
                                    data-tooltip-id="compare-tooltip" data-tooltip-content="Add to Compare"
                                  >
                                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M6.8916 6.09375C6.8916 6.47656 7.16504 6.75 7.54785 6.75H10.1455C10.7197 6.75 11.0205 6.06641 10.583 5.65625L9.84473 4.89062L12.9072 1.82812C13.0439 1.69141 13.0439 1.47266 12.9072 1.36328L12.2783 0.734375C12.1689 0.597656 11.9502 0.597656 11.8135 0.734375L8.75098 3.79688L7.98535 3.05859C7.5752 2.62109 6.8916 2.92188 6.8916 3.49609V6.09375ZM1.94238 12.793L5.00488 9.73047L5.77051 10.4688C6.18066 10.9062 6.8916 10.6055 6.8916 10.0312V7.40625C6.8916 7.05078 6.59082 6.75 6.23535 6.75H3.61035C3.03613 6.75 2.73535 7.46094 3.17285 7.87109L3.91113 8.63672L0.848633 11.6992C0.711914 11.8359 0.711914 12.0547 0.848633 12.1641L1.47754 12.793C1.58691 12.9297 1.80566 12.9297 1.94238 12.793Z" fill="#8B8F9E" />
                                    </svg>
                                  </button>
                                  <Tooltip id="compare-tooltip" />
                                  <button type="button" className="btn btn-secondary"
                                    data-tooltip-id="view-tooltip" data-tooltip-content="Add to Wishlist"
                                    onClick={() => addToWishListProduct(product)}
                                  >
                                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M12.9907 1.52737C11.4048 0.187524 8.97121 0.378931 7.46731 1.93752C5.93606 0.378931 3.50246 0.187524 1.91652 1.52737C-0.134257 3.25002 0.166524 6.06643 1.64309 7.57034L6.42824 12.4649C6.70168 12.7383 7.05715 12.9024 7.46731 12.9024C7.85012 12.9024 8.20559 12.7383 8.47902 12.4649L13.2915 7.57034C14.7407 6.06643 15.0415 3.25002 12.9907 1.52737ZM12.3345 6.64065L7.54934 11.5352C7.49465 11.5899 7.43996 11.5899 7.35793 11.5352L2.57277 6.64065C1.56105 5.62893 1.36965 3.71487 2.76418 2.53909C3.83059 1.63674 5.47121 1.77346 6.51027 2.81252L7.46731 3.7969L8.42434 2.81252C9.43606 1.77346 11.0767 1.63674 12.1431 2.51174C13.5376 3.71487 13.3462 5.62893 12.3345 6.64065Z" fill="#8B8F9E" />
                                    </svg>
                                  </button>
                                  <Tooltip id="view-tooltip" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="paginationBlock">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item page-item--prev disabled">
                        <Link to={'/products'} className="page-link" tabIndex="-1" aria-disabled="true">
                          <i className="fa-solid fa-angle-left"></i>
                        </Link>
                      </li>
                      <div className="paginationBlock__number">
                        <ul>
                          <li className="page-item"><Link to={'/products'} className="page-link">1</Link></li>
                          <li className="page-item"><Link to={'/products'} className="page-link">2</Link></li>
                          <li className="page-item"><Link to={'/products'} className="page-link">3</Link></li>
                          <li className="page-item"><Link to={'/products'} className="page-link">...</Link></li>
                        </ul>
                      </div>
                      <li className="page-item page-item--next">
                        <Link to={'/products'} className="page-link">
                          <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
