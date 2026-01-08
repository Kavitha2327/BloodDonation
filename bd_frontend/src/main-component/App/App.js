import React, { useEffect } from 'react';
import AllRoute from '../router'
import { gsap } from "gsap";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  useEffect(() => {
    gsap.set(".cursor-ball", { xPercent: -50, yPercent: -50 });
    let targets = gsap.utils.toArray(".cursor-ball");
    window.addEventListener("mousemove", (e) => {
        gsap.to(targets, {
            duration: 0.9,
            x: e.clientX,
            y: e.clientY,
            ease: "power1.out",
            overwrite: "auto",
            stagger: 0.05
        });
    });
}, []);

  return (
    <div className="App" id='scrool'>
      <AllRoute />
      <ToastContainer />
      <div className="cursor-ball"></div>
      <div className="cursor-ball inner-ball"></div>
    </div>
  );
}

export default App;