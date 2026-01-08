import React from 'react';
import blog1 from '../../images/blog/blogDetails1.jpg'
import blog2 from '../../images/blog/blogDetailsSmall1.jpg'
import blog3 from '../../images/blog/blogDetailsSmall2.jpg'
import author from '../../images/users/commentar1.jpg'
import blogs from '../../api/blogs';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import BlogSidebar from '../BlogSidebar';

const BlogSingle = (props) => {

    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (

        <section className="stories pt-130 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mb-30">
                        <div className="innerWrapper">
                            <div className="donationDetails storiesDetails">
                                <div className="donationDetails__header mb-45">
                                    <figure className="thumb mb-45">
                                        <img src={BlogDetails.screens} alt="Gainioz blog" className="image-saturation" />
                                    </figure>
                                </div>
                                <p className="donationDetails__text storiesDetails__text mb-30">We have covered
                                    many special events such as fireworks, fairs,
                                    parades, races, walks, awards ceremonies, fashion shows, sporting events, and even a memorial service.
                                </p>
                                <p className="donationDetails__text mb-30">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum rhoncus, dolor
                                    eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non
                                    justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interd enim. Vivamus
                                    faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus.
                                    Suspendisse consectetur tristique tortor
                                </p>
                                <h4 className="donationDetails__heading mb-25">{BlogDetails.title}</h4>
                                <p className="donationDetails__text mb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                    vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae
                                    ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla
                                    quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas
                                    elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus</p>
                                <p className="donationDetails__text mb-30">We have covered many special events such as fireworks, fairs,
                                    parades, races, walks, awards ceremonies, fashion shows, sporting events, and even a memorial service.
                                </p>
                                <p className="donationDetails__text mb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                    vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae
                                    ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla
                                    quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas
                                    elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus. Suspendisse consectetur tristique
                                    tortor</p>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <figure className="thumb mb-100">
                                            <img src={blog1} alt="Gainioz Blog" />
                                        </figure>
                                    </div>
                                </div>
                                <div className="blogDetails-socialTags mb-35">
                                    <div className="row align-items-center">
                                        <div className="col-lg-8">
                                            <div className="blogDetails-tags">
                                                <div className="blogDetails-title">
                                                    <h3 className="blogDetails-title__heading text-uppercase">Tag</h3>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <Link onClick={ClickHandler} to="/blog">Business</Link>
                                                    </li>
                                                    <li>
                                                        <Link onClick={ClickHandler} to="/blog">Design</Link>
                                                    </li>
                                                    <li>
                                                        <Link onClick={ClickHandler} to="/blog">apps</Link>
                                                    </li>
                                                    <li>
                                                        <Link onClick={ClickHandler} to="/blog">data</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="blogDetails-share itSocial d-flex align-items-center">
                                                <div className="blogDetails-title">
                                                    <h3 className="blogDetails-title__heading text-uppercase">Share</h3>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <Link onClick={ClickHandler} to="/blog" className="facebook" rel="nofollow">
                                                            <i className="fab fa-facebook-f"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link onClick={ClickHandler} to="/blog" className="twitter" rel="nofollow">
                                                            <i className="fab fa-twitter"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link onClick={ClickHandler} to="/blog" className="instagram" rel="nofollow">
                                                            <i className="fab fa-instagram"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link onClick={ClickHandler} to="/blog" className="linkedin" rel="nofollow">
                                                            <i className="fab fa-linkedin-in"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link onClick={ClickHandler} to="/blog" className="pinterest" rel="nofollow">
                                                            <i className="fab fa-pinterest-p"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blogDetails-nextPrevious">
                                    <div className="row">
                                        <div className="col-lg-6 mb-40">
                                            <div className="blogDetails-title mb-25">
                                                <h3 className="blogDetails-title__heading text-uppercase">
                                                    <Link onClick={ClickHandler} to="/blog">
                                                        <i className="fa-solid fa-angles-left"></i>
                                                        Previous Post
                                                    </Link>
                                                </h3>
                                            </div>
                                            <div className="blogBlockSmall blogBlockSmall--style2">
                                                <figure className="blogBlockSmall__thumb">
                                                    <Link onClick={ClickHandler} to="/blog" className="blogBlockSmall__thumb__link">
                                                        <img src={blog2} alt="Gainioz Blog" />
                                                    </Link>
                                                </figure>
                                                <div className="blogBlockSmall__content">
                                                    <h3 className="blogBlockSmall__heading"><Link onClick={ClickHandler} to="/blog">Help poor people and rise the
                                                        worldweb - 2022</Link>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-40">
                                            <div className="blogDetails-title text-end mb-25">
                                                <h3 className="blogDetails-title__heading text-uppercase">
                                                    <Link onClick={ClickHandler} to="/blog">
                                                        Next Post
                                                        <i className="fa-solid fa-angles-right"></i>
                                                    </Link>
                                                </h3>
                                            </div>
                                            <div className="blogBlockSmall blogBlockSmall--style2">
                                                <div className="blogBlockSmall__content text-end">
                                                    <h3 className="blogBlockSmall__heading"><Link onClick={ClickHandler} to="/blog">we should respect each other
                                                        beause we all are human</Link>
                                                    </h3>
                                                </div>
                                                <figure className="blogBlockSmall__thumb">
                                                    <Link onClick={ClickHandler} to="/blog" className="blogBlockSmall__thumb__link">
                                                        <img src={blog3} alt="Gainioz Blog" />
                                                    </Link>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="ourHr m-0" />
                                </div>
                                <div className="comments mb-70 pt-45">
                                    <div className="blogDetails-title mb-35">
                                        <h3 className="blogDetails-title__heading text-uppercase">(04) Comment</h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="commentsBlock">
                                                <figure className="commentsBlock__person">
                                                    <Link onClick={ClickHandler} to="/blog">
                                                        <img src={author} alt="" className="commentsBlock__person__picture" />
                                                    </Link>
                                                </figure>
                                                <div className="commentsBlock__content">
                                                    <div className="commentsBlock__header">
                                                        <div className="commentsBlock__personalInfo">
                                                            <Link onClick={ClickHandler} to="/blog" className="commentsBlock__name">Bessie Cooper</Link>
                                                            <span className="commentsBlock__date">9/23/16</span>
                                                        </div>
                                                        <div className="commentsBlock__reply">
                                                            <Link onClick={ClickHandler} to="/blog" className="commentsBlock__reply__link">
                                                                <i className="fa-solid fa-reply-all"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <p className="commentsBlock__text">
                                                        Dolor morbi non arcu risus quis varius. Sit amet est placerat in egestas erat imperdiet. Et
                                                        magnis dis parturient montes nascetur. Egestas pretium aenean pharetra magna ac placerat
                                                        vestibulum.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="commentsBlock commentsBlock--reply">
                                                <figure className="commentsBlock__person">
                                                    <Link onClick={ClickHandler} to="/blog">
                                                        <img src={author} alt="" className="commentsBlock__person__picture" />
                                                    </Link>
                                                </figure>
                                                <div className="commentsBlock__content">
                                                    <div className="commentsBlock__header">
                                                        <div className="commentsBlock__personalInfo">
                                                            <Link onClick={ClickHandler} to="/blog" className="commentsBlock__name">Bessie Cooper</Link>
                                                            <span className="commentsBlock__date">9/23/16</span>
                                                        </div>
                                                        <div className="commentsBlock__reply">
                                                            <Link onClick={ClickHandler} to="/blog" className="commentsBlock__reply__link">
                                                                <i className="fa-solid fa-reply-all"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <p className="commentsBlock__text">
                                                        Dolor morbi non arcu risus quis varius. Sit amet est placerat in egestas erat imperdiet. Et
                                                        magnis dis parturient montes nascetur. Egestas pretium aenean pharetra magna ac placerat
                                                        vestibulum.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="commentsBlock">
                                                <figure className="commentsBlock__person">
                                                    <Link onClick={ClickHandler} to="/blog">
                                                        <img src={author} alt="" className="commentsBlock__person__picture" />
                                                    </Link>
                                                </figure>
                                                <div className="commentsBlock__content">
                                                    <div className="commentsBlock__header">
                                                        <div className="commentsBlock__personalInfo">
                                                            <Link onClick={ClickHandler} to="/blog" className="commentsBlock__name">Bessie Cooper</Link>
                                                            <span className="commentsBlock__date">9/23/16</span>
                                                        </div>
                                                        <div className="commentsBlock__reply">
                                                            <Link onClick={ClickHandler} to="/blog" className="commentsBlock__reply__link">
                                                                <i className="fa-solid fa-reply-all"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <p className="commentsBlock__text">
                                                        Dolor morbi non arcu risus quis varius. Sit amet est placerat in egestas erat imperdiet. Et
                                                        magnis dis parturient montes nascetur. Egestas pretium aenean pharetra magna ac placerat
                                                        vestibulum.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="commentsBlock commentsBlock--reply">
                                                <figure className="commentsBlock__person">
                                                    <Link onClick={ClickHandler} to="/blog">
                                                        <img src={author} alt="" className="commentsBlock__person__picture" />
                                                    </Link>
                                                </figure>
                                                <div className="commentsBlock__content">
                                                    <div className="commentsBlock__header">
                                                        <div className="commentsBlock__personalInfo">
                                                            <Link onClick={ClickHandler} to="/blog" className="commentsBlock__name">Bessie Cooper</Link>
                                                            <span className="commentsBlock__date">9/23/16</span>
                                                        </div>
                                                        <div className="commentsBlock__reply">
                                                            <Link onClick={ClickHandler} to="/blog" className="commentsBlock__reply__link">
                                                                <i className="fa-solid fa-reply-all"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <p className="commentsBlock__text">
                                                        Dolor morbi non arcu risus quis varius. Sit amet est placerat in egestas erat imperdiet. Et
                                                        magnis dis parturient montes nascetur. Egestas pretium aenean pharetra magna ac placerat
                                                        vestibulum.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <hr className="ourHr m-0" />
                                <form action="#" className="commentsPost it-contact-form pt-45 pb-25" onSubmit={SubmitHandler}>
                                    <div className="blogDetails-title mb-35">
                                        <h3 className="blogDetails-title__heading text-uppercase">Write your comment</h3>
                                    </div>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="commentsPost__input">
                                                <input name="name" type="text" placeholder="Enter your name*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="commentsPost__input">
                                                <input name="email" type="text" placeholder="Enter your email*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="commentsPost__input">
                                                <input name="phone" type="text" placeholder="Enter your  number*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="commentsPost__input">
                                                <input name="subject" type="text" placeholder="Subject*" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="commentsPost__input">
                                                <textarea name="message" placeholder="Enter your Massage*"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="commentsPost__check">
                                                <div className="form-group form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Save my name, email, and website in this
                                                        browser for the next time I comment.</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="commentsPost__button text-center">
                                                <button type="submit" className="btn btn--styleOne btn--primary it-btn">
                                                    <span className="btn__text">Post Comment</span>
                                                    <i className="fa-solid fa-heart btn__icon"></i>
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
                                        </div>
                                    </div>
                                    <div className="form-response"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar />
                </div>
            </div>
        </section>
    )

}

export default BlogSingle;
