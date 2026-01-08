import { Link } from 'react-router-dom'
import blogs from '../../api/blogs'
import BlogSidebar from '../BlogSidebar';

const BlogList = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="donation pt-130 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mb-30">
                        <div className="innerWrapper">
                            <div className="row">
                                {blogs.slice(0, 3).map((blog, Bitem) => (
                                    <div className="col-lg-12 mb-55" key={Bitem}>
                                        <div className="blogBlock blogBlock--style4 hoverStyle">
                                            <figure className="blogBlock__figure overflow-hidden">
                                                <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`} className="blogBlock__figure__link">
                                                    <img src={blog.screens} alt="Gainioz Blog" className="blogBlock__figure__image image-saturation" />
                                                </Link>
                                            </figure>
                                            <div className="blogBlock__content">
                                                <div className="blogBlock__button">
                                                    <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`} className="btn btn--styleOne btn--icon btn--icon2 it-btn">
                                                        <svg className="btn__icon" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.9336 0.890625L10.6523 1.13672C10.5117 1.3125 10.5117 1.55859 10.6523 1.73438L13.6055 4.65234H0.421875C0.175781 4.65234 0 4.86328 0 5.07422V5.42578C0 5.67188 0.175781 5.84766 0.421875 5.84766H13.6055L10.6523 8.80078C10.5117 8.97656 10.5117 9.22266 10.6523 9.39844L10.9336 9.64453C11.0742 9.82031 11.3555 9.82031 11.5312 9.64453L15.6094 5.56641C15.7852 5.39062 15.7852 5.14453 15.6094 4.96875L11.5312 0.890625C11.3555 0.714844 11.0742 0.714844 10.9336 0.890625Z" fill="#0B0B0B" />
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
                                                    </Link>
                                                </div>
                                                <div className="blogBlock__header">
                                                    <div className="blogBlock__meta mb-15">
                                                        <ul className="blogBlock__meta__list">
                                                            <li>
                                                                <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`} className="blogBlock__metaUser">
                                                                    <img className="blogBlock__metaUser__thumb" src={blog.authorImg} alt="Gainioz User" />
                                                                    <span className="blogBlock__metaUser__name">{blog.author}</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <h2 className="blogBlock__heading heading text-uppercase mb-20">
                                                        <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`} className="blogBlock__heading__link">
                                                        {blog.title}
                                                        </Link>
                                                    </h2>
                                                </div>
                                                <div className="blogBlock__body mb-25">
                                                    <p className="blogBlock__text text">
                                                        There are many variations of passages of Lorem Ipsum available, but the majority have alteration
                                                        in some form, by injected humour, or randomised words which don't look even slightly.
                                                    </p>
                                                </div>
                                                <div className="blogBlock__meta blogBlock__meta--style2">
                                                    <ul>
                                                        <li>
                                                            <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`} className="blogBlock__meta__text">
                                                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H10.375C10.1562 0 10 0.1875 10 0.375V2H4V0.375C4 0.1875 3.8125 0 3.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5C14 2.6875 13.3125 2 12.5 2ZM1.5 3H12.5C12.75 3 13 3.25 13 3.5V5H1V3.5C1 3.25 1.21875 3 1.5 3ZM12.5 15H1.5C1.21875 15 1 14.7812 1 14.5V6H13V14.5C13 14.7812 12.75 15 12.5 15ZM4.625 10C4.8125 10 5 9.84375 5 9.625V8.375C5 8.1875 4.8125 8 4.625 8H3.375C3.15625 8 3 8.1875 3 8.375V9.625C3 9.84375 3.15625 10 3.375 10H4.625ZM7.625 10C7.8125 10 8 9.84375 8 9.625V8.375C8 8.1875 7.8125 8 7.625 8H6.375C6.15625 8 6 8.1875 6 8.375V9.625C6 9.84375 6.15625 10 6.375 10H7.625ZM10.625 10C10.8125 10 11 9.84375 11 9.625V8.375C11 8.1875 10.8125 8 10.625 8H9.375C9.15625 8 9 8.1875 9 8.375V9.625C9 9.84375 9.15625 10 9.375 10H10.625ZM7.625 13C7.8125 13 8 12.8438 8 12.625V11.375C8 11.1875 7.8125 11 7.625 11H6.375C6.15625 11 6 11.1875 6 11.375V12.625C6 12.8438 6.15625 13 6.375 13H7.625ZM4.625 13C4.8125 13 5 12.8438 5 12.625V11.375C5 11.1875 4.8125 11 4.625 11H3.375C3.15625 11 3 11.1875 3 11.375V12.625C3 12.8438 3.15625 13 3.375 13H4.625ZM10.625 13C10.8125 13 11 12.8438 11 12.625V11.375C11 11.1875 10.8125 11 10.625 11H9.375C9.15625 11 9 11.1875 9 11.375V12.625C9 12.8438 9.15625 13 9.375 13H10.625Z" fill="#666666" />
                                                                </svg>
                                                                <span>{blog.create_at}</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`} className="blogBlock__meta__text">
                                                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M16 5H13V2C13 0.90625 12.0938 0 11 0H2C0.875 0 0 0.90625 0 2V7C0 8.125 0.875 9 2 9H3V10.625C3 10.875 3.15625 11 3.375 11C3.4375 11 3.5 11 3.59375 10.9375L6 9.59375V12C6 13.125 6.875 14 8 14H11L14.375 15.9375C14.4688 16 14.5312 16 14.625 16C14.8125 16 15 15.875 15 15.625V14H16C17.0938 14 18 13.125 18 12V7C18 5.90625 17.0938 5 16 5ZM2 8C1.4375 8 1 7.5625 1 7V2C1 1.46875 1.4375 1 2 1H11C11.5312 1 12 1.46875 12 2V7C12 7.5625 11.5312 8 11 8H6.71875L6.5 8.15625L4 9.5625V8H2ZM17 12C17 12.5625 16.5312 13 16 13H14V14.5625L11.4688 13.1562L11.25 13H8C7.4375 13 7 12.5625 7 12V9H11C12.0938 9 13 8.125 13 7V6H16C16.5312 6 17 6.46875 17 7V12Z" fill="#666666" />
                                                                </svg>
                                                                <span>Comment ({blog.comment})</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link onClick={ClickHandler} to={`/blog-details/${blog.slug}`} className="blogBlock__meta__text">
                                                                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M14.6875 5.31246L9.6875 0.312461C9.0625 -0.312539 8 0.124961 8 1.03121V3.28121C4.375 3.40621 0 4.15621 0 8.93746C0 10.9687 1.03125 12.6562 2.65625 13.8125C3.40625 14.375 4.46875 13.6562 4.1875 12.75C3.34375 9.68746 4.1875 8.93746 8 8.78121V11C8 11.9062 9.0625 12.3437 9.6875 11.7187L14.6875 6.71871C15.0938 6.34371 15.0938 5.68746 14.6875 5.31246ZM9 11.0312V7.78121C4.4375 7.81246 1.96875 8.46871 3.25 13.0312C2.25 12.2812 1 10.9687 1 8.93746C1 4.84371 4.90625 4.31246 9 4.28121V1.03121L14 6.03121L9 11.0312ZM17.6875 6.71871C18.0938 6.34371 18.0938 5.68746 17.6875 5.31246L12.6875 0.312461C12.2812 -0.125039 11.6562 -0.0625389 11.2812 0.312461L17 6.03121L11.2812 11.7187C11.6562 12.0937 12.2812 12.1562 12.6875 11.7187L17.6875 6.71871Z" fill="#666666" />
                                                                </svg>
                                                                <span>{blog.comment}</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    <BlogSidebar/>
                </div>
            </div>
        </section>

    )

}

export default BlogList;
