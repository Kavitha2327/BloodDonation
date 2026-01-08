import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';


const ProductTabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (
        <div className="product-tab-area">
            <Nav tabs className='main-tab'>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Description
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >

                        Additional Information
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >

                        Review
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <div className="Descriptions-item">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                                    illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                    explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                    odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                    voluptatem sequi nesciunt. Neque porro quisquam.Sed ut perspiciatis unde
                                    omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                                    quisquam </p>
                                <div className="Description-table">
                                    <form action="cart" className="table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Size</th>
                                                    <th>Weight</th>
                                                    <th>Smart watch</th>
                                                    <th>Black Bag</th>
                                                    <th>Yellow Rocks Umbrealla</th>
                                                    <th>Hand Gloves</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>S</td>
                                                    <td>250</td>
                                                    <td>60</td>
                                                    <td>10 - 12</td>
                                                    <td>20</td>
                                                    <td>22</td>
                                                </tr>
                                                <tr>
                                                    <td>M</td>
                                                    <td>500</td>
                                                    <td>62</td>
                                                    <td>12 - 14</td>
                                                    <td>21</td>
                                                    <td>23</td>
                                                </tr>
                                                <tr>
                                                    <td>L</td>
                                                    <td>1L</td>
                                                    <td>64</td>
                                                    <td>14 - 18</td>
                                                    <td>23</td>
                                                    <td>24</td>
                                                </tr>
                                                <tr>
                                                    <td>Xl</td>
                                                    <td>2L</td>
                                                    <td>66</td>
                                                    <td>18 - 20</td>
                                                    <td>24</td>
                                                    <td>25</td>
                                                </tr>
                                                <tr>
                                                    <td>2Xl</td>
                                                    <td>3L</td>
                                                    <td>68</td>
                                                    <td>20 - 22</td>
                                                    <td>25</td>
                                                    <td>26</td>
                                                </tr>
                                                <tr>
                                                    <td>3Xl</td>
                                                    <td>5L</td>
                                                    <td>76</td>
                                                    <td>22 - 24</td>
                                                    <td>27</td>
                                                    <td>28</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <div className="Additional-wrap">
                        <div className="row">
                            <div className="col-12">
                                <table className="table-responsive">
                                    <tbody>
                                        <tr>
                                            <td>Ratings</td>
                                            <td className="ratting">
                                                <ul>
                                                    <li><i className="fa-solid fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa-solid fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa-solid fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa-solid fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li><i className="fa-solid fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Material Type</td>
                                            <td>Yellow Rocks Umbrealla</td>
                                        </tr>
                                        <tr>
                                            <td>weight</td>
                                            <td>250 ML</td>
                                        </tr>
                                        <tr>
                                            <td>Seller</td>
                                            <td>Faoul</td>
                                        </tr>
                                        <tr>
                                            <td>Size</td>
                                            <td>Small</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </TabPane>
                <TabPane tabId="3">
                    <div className="rating-section">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-2">
                                <div className="rating-top">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="rating-sub">
                                                <ul>
                                                    <li><i className="fa-solid fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li><i className="fa-solid fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li><i className="fa-solid fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li><i className="fa-solid fa-star" aria-hidden="true"></i>
                                                    </li>
                                                    <li><i className="fa-solid fa-star" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                                <span>( Based on 45.86K reviews)</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="rating-right">
                                                <div className="rating-right-item">
                                                    <ul>
                                                        <li>
                                                            <ul>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <div className="progress">
                                                                <div className="bar" style={{ width: "70%" }}>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>70% ( 32.10k)</li>
                                                    </ul>
                                                </div>
                                                <div className="rating-right-item">
                                                    <ul>
                                                        <li>
                                                            <ul>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <div className="progress">
                                                                <div className="bar" style={{ width: "15%" }}>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>15% ( 6.88k)</li>
                                                    </ul>
                                                </div>
                                                <div className="rating-right-item">
                                                    <ul>
                                                        <li>
                                                            <ul>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <div className="progress">
                                                                <div className="bar" style={{ width: "10%" }}>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>10% ( 4.55k)</li>
                                                    </ul>
                                                </div>
                                                <div className="rating-right-item">
                                                    <ul>
                                                        <li>
                                                            <ul>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <div className="progress">
                                                                <div className="bar" style={{ width: "5%" }}>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>5% ( 2.29k)</li>
                                                    </ul>
                                                </div>
                                                <div className="rating-right-item">
                                                    <ul>
                                                        <li>
                                                            <ul>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                                <li><i className="fa-solid fa-star"
                                                                    aria-hidden="true"></i></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <div className="progress">
                                                                <div className="bar" style={{ width: "0%" }}>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>0% ( 0.00)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default ProductTabs;