import React from 'react';
import { Link } from 'react-router-dom'
import blogs from '../../api/blogs'

const BlogSidebar = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className="col-lg-4 mb-30">
            <div className="sidebarLayout">
                <form className="innerWrapperSidebar mb-30" onSubmit={SubmitHandler}>
                    <div className="sidebarWidget">
                        <div className="sidebarTitle">
                            <h5 className="sidebarTitle__heading text-uppercase mb-30">search here</h5>
                        </div>
                        <div className="searchInput">
                            <input className="searchInput__box" type="text" placeholder="Search product" />
                            <button className="searchInput__button" type='submit'>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.8906 13.5742L10.582 10.2656C10.5 10.2109 10.418 10.1562 10.3359 10.1562H9.98047C10.8281 9.17188 11.375 7.85938 11.375 6.4375C11.375 3.32031 8.80469 0.75 5.6875 0.75C2.54297 0.75 0 3.32031 0 6.4375C0 9.58203 2.54297 12.125 5.6875 12.125C7.10938 12.125 8.39453 11.6055 9.40625 10.7578V11.1133C9.40625 11.1953 9.43359 11.2773 9.48828 11.3594L12.7969 14.668C12.9336 14.8047 13.1523 14.8047 13.2617 14.668L13.8906 14.0391C14.0273 13.9297 14.0273 13.7109 13.8906 13.5742ZM5.6875 10.8125C3.25391 10.8125 1.3125 8.87109 1.3125 6.4375C1.3125 4.03125 3.25391 2.0625 5.6875 2.0625C8.09375 2.0625 10.0625 4.03125 10.0625 6.4375C10.0625 8.87109 8.09375 10.8125 5.6875 10.8125Z" fill="#666666" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
                <div className="innerWrapperSidebar mb-30">
                    <div className="sidebarWidget">
                        <div className="sidebarTitle">
                            <h5 className="sidebarTitle__heading text-uppercase mb-30">categories</h5>
                        </div>
                        <div className="sidebarCategories">
                            <ul>
                                <li>
                                    <Link onClick={ClickHandler} to="/blog">
                                        <span>Charity</span>
                                        <span>03</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/blog">
                                        <span>Donation</span>
                                        <span>03</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/blog">
                                        <span>Medical & Aid Kit</span>
                                        <span>03</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/blog">
                                        <span>Volenteer Team</span>
                                        <span>03</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/blog">
                                        <span>Food and Water</span>
                                        <span>03</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/blog">
                                        <span>Help Hoomeless People</span>
                                        <span>03</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="innerWrapperSidebar mb-30">
                    <div className="sidebarWidget">
                        <div className="sidebarTitle">
                            <h5 className="sidebarTitle__heading text-uppercase mb-30">Recent POst</h5>
                        </div>
                        <div className="sidebarBlogs">
                            <ul>
                                {blogs.slice(0, 3).map((blog, Bitem) => (
                                    <li key={Bitem}>
                                        <div className="blogBlockSmall">
                                            <figure className="blogBlockSmall__thumb">
                                                <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`} className="blogBlockSmall__thumb__link">
                                                    <img src={blog.screens} alt="Gainioz Blog" />
                                                </Link>
                                            </figure>
                                            <figure className="blogBlockSmall__content">
                                                <span className="blogBlockSmall__meta">{blog.create_at}</span>
                                                <h3 className="blogBlockSmall__heading"><Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`}>{blog.title}</Link>
                                                </h3>
                                            </figure>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="innerWrapperSidebar mb-30">
                    <div className="sidebarWidget">
                        <div className="sidebarTitle">
                            <h5 className="sidebarTitle__heading text-uppercase mb-30">Direct Contact us</h5>
                        </div>
                        <form className="sidebarContacts" onSubmit={SubmitHandler}>
                            <input type="text" className="sidebarContacts__input" placeholder="Enter name*" />
                            <input type="email" className="sidebarContacts__input" placeholder="Enter your mail*" />
                            <textarea className="sidebarContacts__input textarea" name="message" id="message" placeholder="Massage*"></textarea>
                            <button className="btn btn--styleOne btn--primary it-btn" type='submit'>
                                <span className="btn__text">send massage</span>
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
                        </form>
                    </div>
                </div>
                <div className="innerWrapperSidebar mb-30">
                    <div className="sidebarWidget">
                        <div className="sidebarTitle">
                            <h5 className="sidebarTitle__heading text-uppercase mb-30">Contact Info..</h5>
                        </div>
                        <div className="sidebarContact">
                            <ul>
                                <li>
                                    <span>Adress :</span>
                                    8638 Amarica Stranfod, Mailbon Star
                                </li>
                                <li>
                                    <span>Mail :</span>
                                    gainioz@info.com
                                </li>
                                <li>
                                    <span>Phone :</span>
                                    +7464 0187 3535 645
                                </li>
                                <li>
                                    <span>Fax id :</span>
                                    +9 659459 49594
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="innerWrapperSidebar mb-30">
                    <div className="sidebarWidget">
                        <div className="sidebarTitle">
                            <h5 className="sidebarTitle__heading text-uppercase mb-30">Popular Tag</h5>
                        </div>
                        <div className="sidebarTags">
                            <ul>
                                <li>
                                    <Link onClick={ClickHandler} to="/blog">Education</Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/blog">Charity</Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/blog">apps</Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/blog">Education build</Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/blog">data</Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/blog">book</Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/blog">Design</Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/blog">website</Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/blog">landing page</Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/blog">data</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
