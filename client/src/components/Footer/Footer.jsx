import React from "react";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    

<footer className="bg-gradient-to-r from-red-700 to-red-500 ">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://www.cgc.ac.in/" className="flex items-center pb-5">
                  <img src="	https://www.cgc.ac.in/public/course/assets/images/header-footer/cgc-jhanjeri-logo-white.png" className="h-10 me-2" alt="FlowBite Logo" />
              </a>
              <p className="self-center text-white  font-small">Chandigarh Group of Colleges Jhanjeri Mohali, <br/> State Highway 12A Jhanjeri, <br/>Sahibzada Ajit Singh Nagar, <br/> Punjab 140307 </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6">
              
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Contact Us :</h2>
                  
                  <ul className="text-white font-medium">
                     <li className="mb-4">
                          <p>Dr. Pradeep Kumar Jindal </p>
                          <a href="#" className="hover:underline">+91 98724 95684</a><br/>
                          <a href="#" className="hover:underline">icetis@cgc.ac.in</a>
                      </li>
                      
                  </ul>
              </div>
              
              <div>
  <h2 className="mb-6 text-sm font-semibold text-white uppercase">quick link</h2>
  <div className="flex gap-5">
    <div>
      <ul className="text-white  font-medium">
        <li className="mb-4">
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li className="mb-4">
          <Link to="/about" className="hover:underline">About</Link>
        </li>
        <li>
          <Link to="/callforpaper" className="hover:underline">Call for Paper</Link>
        </li>
      </ul>
    </div>
    <div>
      <ul className="text-white  font-medium">
        <li className="mb-4">
          <Link to="/papersubmission" className="hover:underline">Paper Submission</Link>
        </li>
        <li className="mb-4">
          <Link to="/registration" className="hover:underline">Registration</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">© 2025 <a href="#" className="hover:underline">ICETIS</a>. All Rights Reserved.
          </span>
          <span className="text-sm text-white sm:text-center"> Designed by <a href="https://www.linkedin.com/in/shiven-kashyap-964819220/">Shiven Kashyap</a></span>
      </div>
    </div>
</footer>

  );
}
export default Footer;
