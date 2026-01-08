import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import HomePage4 from '../HomePage4/HomePage4';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import DonationSinglePage from '../DonationSinglePage/DonationSinglePage';
import DonationListing from '../DonationListing/DonationListing';
import StorySinglePage from '../StorySinglePage/StorySinglePage';
import TeamPage from '../TeamPage/TeamPage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import EventPage from '../EventPage/EventPage';
import ShopPage from '../ShopPage/ShopPage';
import ProductSinglePage from '../ProductSinglePage/ProductSinglePage';
import CartPage from '../CartPage/CartPage';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import ServicePage from '../ServicePage/ServicePage';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import BlogPage from '../BlogPage/BlogPage';
import BlogDetails from '../BlogDetails/BlogDetails';
import EventSinglePage from '../EventSinglePage/EventSinglePage';
import ContactPage from '../ContactPage/ContactPage';

import StatisticsPage from '../../components/StatisticsPage/StatisticsPage'
import MyEventPage from '../../components/StatisticsPage/EventPage'
import Gallery from '../Gallery/Gallery'
import LiveCounts from '../../components/LiveCounts/LiveCounts';
import Registration from '../../components/registration/Registration';
import MyTeamPage from '../../main-component/MyTeamPage/myTeamMain'


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/blooddonation" element={<HomePage4 />} />
          <Route path="/blooddonation/home" element={<HomePage4 />} />
          <Route path="/blooddonation/home-2" element={<HomePage2 />} />
          <Route path="/blooddonation/home-3" element={<HomePage3 />} />
          <Route path="/blooddonation/home-4" element={<HomePage4 />} />
          <Route path="/blooddonation/stats" element={<StatisticsPage />} />
          <Route path="/blooddonation/gallery" element = {<Gallery />} /> 
          <Route path="/blooddonation/about" element={<AboutUsPage />} />
          <Route path="/blooddonation/donation-listing" element={<DonationListing />} />
          <Route path="/blooddonation/donation-details/:slug" element={<DonationSinglePage />} />
          <Route path="/blooddonation/story-details/:slug" element={<StorySinglePage />} />
          <Route path="/blooddonation/events" element={<MyEventPage />} />
          <Route path="/blooddonation/event-single/:slug" element={<EventSinglePage />} />
          <Route path="/blooddonation/volunteers" element={<TeamPage />} />
          <Route path="/blooddonation/team-single/:slug" element={<TeamSinglePage />} />
          <Route path="/blooddonation/products" element={<ShopPage />} />
          <Route path="/blooddonation/product-single/:slug" element={<ProductSinglePage />} />
          <Route path="/blooddonation/cart" element={<CartPage />} />
          <Route path="/blooddonation/checkout" element={<CheckoutPage />} />
          <Route path="/blooddonation/blog" element={<BlogPage />} />
          <Route path="/blooddonation/service" element={<ServicePage />} />
          <Route path="/blooddonation/service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="/blooddonation/contact" element={<ContactPage />} />
          <Route path="/blooddonation/blog-details/:slug" element={<BlogDetails />} />
          <Route path="/blooddonation/live-counts" element={<LiveCounts />} />
          <Route path="/blooddonation/register" element={<Registration />} />
          <Route path="/blooddonation/myTeamPage" element={<MyTeamPage />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;