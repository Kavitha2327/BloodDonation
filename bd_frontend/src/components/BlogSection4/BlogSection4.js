import React from 'react'
import blogs from '../../api/blogs'
import { Link } from 'react-router-dom'



const BlogSection4 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog pt-125 pb-55">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="sectionTitle text-center mb-60">
                            <span className="sectionTitle__small justify-content-center">
                                <i className="fa-solid fa-heart btn__icon"></i>
                                Newsfeds
                            </span>
                            <h2 className="sectionTitle__big">Latest News & Article</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {blogs.slice(3, 6).map((blog, Bitem) => (
                        <div className={blog.col} key={Bitem}>
                            <div className={`blogBlock ${blog.styleClass} mb-60`}>
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

export default BlogSection4;