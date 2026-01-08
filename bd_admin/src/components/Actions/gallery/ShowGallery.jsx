import React, { useState, useEffect } from "react";
import axios from "axios";
import GalleryCard from "./Gallerycard"; // Assuming you have a GalleryCard component for displaying images
import ConfirmDelete from "./ConfirmDelete"; // Modal for confirming delete action
import { Input, Row } from "reactstrap";
import toast, { Toaster } from "react-hot-toast";
import "./ShowGallery.css"; // Custom styles for your component
import "bootstrap/dist/css/bootstrap.min.css";


const ShowGallery = () => {
  // const port = import.meta.env.REACT_APP_SERVER_PORT;
  const [selectedEvent, setSelectedEvent] = useState(null); // State to store selected image for deletion
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [imagesData, setImagesData] = useState([]); // State to store gallery images

  // Fetch images from the backend
  const getImages = async () => {
    try {
      const response = await axios.get(port + "gallery-images");
      console.log(response.data);
      setImagesData(response.data); // Set the fetched image data
      setLoading(false); // Set loading to false once images are fetched
    } catch (error) {
      toast.error("Failed to load gallery images."); // Show error toast if fetch fails
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    getImages();
  }, []);

  const port = import.meta.env.VITE_BACKEND_PORT;

  // Handle image selection and upload
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return; // No file selected

    const formData = new FormData();
    formData.append("image", file);

    try {
      console.log(formData);
      // const port = import.meta.env.REACT_APP_SERVER_PORT;
      const result = await axios.post(
        port + "add-gallery-image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(result.data.message); // Show success toast

      // Re-fetch gallery images to update the displayed data after upload
      getImages();
    } catch (error) {
      console.log(error);
      toast.error("Image upload failed. Please try again."); // Show error toast
    }
  };

  // Handle delete modal and confirmation
  const handleDeleteClick = (eventName) => {
    setSelectedEvent(eventName); // Set the selected event for deletion
    setModalOpen(true); // Open the modal
  };

  const handleDeleteConfirm = async () => {
    setModalOpen(false); // Close the modal
    try {
      // console.log(selectedEvent);
      await axios.post( port + `delete-gallery-image`,{"GalleryId": selectedEvent}); // Adjust API endpoint as necessary
      toast.success("Image deleted successfully!");

      // Refresh gallery after deletion
      getImages();
    } catch (error) {
      console.log(error)
      toast.error("Failed to delete image.");
    }
  };

  // Loading state handling
  if (loading) {
    return <div>Loading images...</div>; // Display loading message while fetching data
  }

  return (
    <>
      {/* Toaster for showing notifications */}
      <Toaster />
      <div className='main-title'>
        <h3 style={{ marginBottom: "20px" }} className="heading1">Gallery</h3>
      </div>

      <Row className="justify-content-center mt-2 add-img-btn">
        <div className="custom-file-upload w-25 btn btn-primary d-flex justify-content-center align-items-center addVolunteer">
          <label htmlFor="file-upload" className="custom-label">
            Add NEW IMAGE
          </label>
          <Input
            id="file-upload"
            type="file"
            style={{ display: "none" }} // Hide the default input
            onChange={handleImageChange} // Handle file change and upload
          />
        </div>
      </Row>

      <div className="events-container">
        {imagesData.map((event, index) => (
          <GalleryCard
            key={index} // Add a unique key for each card
            name={event.filename} // Display name or identifier for the image
            image={port + "gallery/" + event.filename} // URL to display the image (adjust as needed)
            onDelete={() => handleDeleteClick(event._id)} // Open the delete confirmation modal
          />
        ))}

        {/* Confirmation modal */}
        {selectedEvent && (
          <ConfirmDelete
            isOpen={modalOpen}
            toggle={() => setModalOpen(false)} // Close the modal without deleting
            onDelete={handleDeleteConfirm} // Handle the confirmed deletion
            eventName={selectedEvent} // Pass the event name to the modal
          />
        )}
      </div>
    </>
  );
};

export default ShowGallery;
