import React from 'react'
// import Bg from '../../images/bg/pageBreadcumbBg1.jpg'
import Bg from "../../assets/home_page_bg2.jpg";
import shape1 from '../../images/shapes/pagebreadcumbShapeTop.svg'
import shape2 from '../../images/shapes/pagebreadcumbShapeBottom.svg'

const PageTitle = (props) => {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <section className="pageBreadcumb pageBreadcumb--style1 position-relative" style={{ backgroundImage: `url(${Bg})`, backgroundSize : 'cover' }}>
            <div className="pageBreadcumbTopDown">
                <button
                    className="btn btn--styleOne btn--icon btn--icon2 it-btn"
                    onClick={scrollToBottom}
                >
                    <svg className="btn__icon" width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.869141 8.70508L1.45508 8.11914C1.60156 8.00195 1.80664 8.00195 1.95312 8.14844L4.23828 10.4922V0.414062C4.23828 0.208984 4.38477 0.0625 4.58984 0.0625H5.41016C5.58594 0.0625 5.76172 0.208984 5.76172 0.414062V10.4922L8.01758 8.14844C8.16406 8.00195 8.36914 8.00195 8.51562 8.11914L9.10156 8.70508C9.21875 8.85156 9.21875 9.05664 9.10156 9.20312L5.23438 13.0703C5.08789 13.1875 4.88281 13.1875 4.73633 13.0703L0.869141 9.20312C0.751953 9.05664 0.751953 8.85156 0.869141 8.70508Z" fill="#60646B" />
                    </svg>
                    <span className="it-btn__inner">
                        <span className="it-btn__blobs">
                            <span className="it-btn__blob"></span>
                            <span className="it-btn__blob"></span>
                            <span className="it-btn__blob"></span>
                            <span className="it-btn__blob"></span>
                        </span>
                    </span>
                    <svg className="it-btn__animation" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <filter>
                                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
                                </feColorMatrix>
                                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                            </filter>
                        </defs>
                    </svg>
                </button>
            </div>
            <div className="sectionShape sectionShape--top">
                <img src={shape1} alt="Gainioz" />
            </div>
            <div className="sectionShape sectionShape--bottom">
                <img src={shape2} alt="Gainioz" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="pageTitle text-center">
                            <h2 className="pageTitle__heading text-white text-uppercase mb-25">{props.pageTitle}</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/blooddonation/home">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">{props.pagesub}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;
