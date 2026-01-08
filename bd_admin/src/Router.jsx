import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home/Home";
import DonorData from "./components/DonorData/DonorData";
import Dashboard from "./components/Dashboard";
import ShowGallery from "./components/Actions/gallery/ShowGallery";
import ShowEvents from "./components/Actions/events/ShowEvents";
import ShowVolunteers from "./components/Actions/volunteers/ShowVolunteers";
import AddColleges from "./components/Actions/addColleges/AddColleges";
import StudentForm from "./components/Forms/StudentForm";
import StaffForm from "./components/Forms/StaffForm";
import GuestForm from "./components/Forms/GuestForm";
import LoginForm from "./components/LoginPage/Login";

import ShowDonorCards from './components/DonorData/ShowDonorCards'
import ShowFormEvents from './components/Forms/ShowFormEvents';
import ShowDonatedData from './components/DonatedData/ShowDonorCards';
import DonatedData from './components/DonatedData/DonorData'

const Router = () => {
  return (
    <Routes>
      <Route path="/blooddonationadmin/login" element={<LoginForm />} />
      <Route path="/blooddonationadmin" element={<Navigate to="/blooddonationadmin/home" replace />} />
      <Route
        path="/blooddonationadmin/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/blooddonationadmin/donor-forms/:donor"
        element={
          <ProtectedRoute>
            <ShowFormEvents />
          </ProtectedRoute>
        }
      />
      <Route
        path="/blooddonationadmin/donor-data"
        element={
          <ProtectedRoute>
            <ShowDonorCards />
          </ProtectedRoute>
        }
      />


      <Route
        path="/blooddonationadmin/donor-details-each/:date/:eventName"
        element={
          <ProtectedRoute>
            <DonorData />
          </ProtectedRoute>
        }
      />

<Route
        path="/blooddonationadmin/donated-data"
        element={
          <ProtectedRoute>
            <ShowDonatedData />
          </ProtectedRoute>
        }
      />


      <Route
        path="/blooddonationadmin/donated-details-each/:date/:eventName"
        element={
          <ProtectedRoute>
            <DonatedData />
          </ProtectedRoute>
        }
      />


      <Route
        path="/blooddonationadmin/gallery"
        element={
          <ProtectedRoute>
            <ShowGallery />
          </ProtectedRoute>
        }
      />
      <Route
        path="/blooddonationadmin/event"
        element={
          <ProtectedRoute>
            <ShowEvents />
          </ProtectedRoute>
        }
      />
      <Route
        path="/blooddonationadmin/volunteer"
        element={
          <ProtectedRoute>
            <ShowVolunteers />
          </ProtectedRoute>
        }
      />
      <Route
        path="/blooddonationadmin/student/:date/"
        element={
          <ProtectedRoute>
            <StudentForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/blooddonationadmin/staff/:date/"
        element={
          <ProtectedRoute>
            <StaffForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/blooddonationadmin/guest/:date/"
        element={
          <ProtectedRoute>
            <GuestForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/blooddonationadmin/add-colleges"
        element={
          <ProtectedRoute>
            <AddColleges />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Router;
