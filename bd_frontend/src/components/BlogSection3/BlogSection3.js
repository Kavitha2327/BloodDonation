import React from 'react'
import blogs from '../../api/blogs'
import { Link } from 'react-router-dom'



const BlogSection3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog pb-55">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6">
                        <div className="sectionTitle mb-60">
                            <span className="sectionTitle__small justify-content-start">
                                <i className="fa-solid fa-heart btn__icon"></i>
                                Newsfeds
                            </span>
                            <h2 className="sectionTitle__big">Latest News & Article</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sectionButton sectionButton--right mb-60">
                            <Link onClick={ClickHandler} to={'/blog'} className="btn btn--styleOne btn--primary it-btn">
                                <span className="btn__text">more Blog</span>
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
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {blogs.slice(1, 3).map((blog, Bitem) => (
                        <div className="col-md-6" key={Bitem}>
                            <div className="blogBlock blogBlock--style3 mb-60">
                                <figure className="blogBlock__figure">
                                    <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`} className="blogBlock__figure__link">
                                        <img src={blog.screens} alt="Gainioz Blog" className="blogBlock__figure__image" />
                                    </Link>
                                </figure>
                                <div className="blogBlock__content">
                                    <div className="blogBlock__header">
                                        <span className="blogBlock__tag tag mb-20">{blog.thumb}</span>
                                        <h2 className="blogBlock__heading heading text-uppercase mb-20"><Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`} className="blogBlock__heading__link">Start a
                                            {blog.title}</Link></h2>
                                    </div>
                                    <div className="blogBlock__body mb-30">
                                        <p className="blogBlock__text text">
                                            {blog.description}
                                        </p>
                                    </div>
                                    <div className="blogBlock__meta">
                                        <ul className="blogBlock__meta__list">
                                            <li>
                                                <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`} className="blogBlock__metaUser">
                                                    <img className="blogBlock__metaUser__thumb" src={blog.authorImg} alt="Gainioz User" />
                                                    <span className="blogBlock__metaUser__name">{blog.author}</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <button className="blogBlock__reactButton">
                                                    <span className="blogBlock__reactButton__count">{blog.comment}</span>
                                                </button>
                                            </li>
                                            <li>
                                                <div className="blogBlock__date">
                                                    <span className="blogBlock__date__text">{blog.create_at}</span>
                                                    <i className="fa-regular fa-clock"></i>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogSection3;