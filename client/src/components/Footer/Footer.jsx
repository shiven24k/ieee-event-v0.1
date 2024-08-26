import React from "react";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    

<footer className="bg-red-700 dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://www.cgc.ac.in/" className="flex items-center pb-5">
                  <img src="	https://www.cgc.ac.in/public/course/assets/images/header-footer/cgc-jhanjeri-logo-white.png" className="h-10 me-2" alt="FlowBite Logo" />
              </a>
              <p className="self-center text-white dark:text-gray-400 font-small">Chandigarh Group of Colleges Jhanjeri Mohali, <br/> State Highway 12A Jhanjeri, <br/>Sahibzada Ajit Singh Nagar, <br/> Punjab 140307 </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">E-mail Us At</h2>
                  <ul className="text-white dark:text-gray-400 font-medium">
                  
                      <li className="mb-4">
                          <a href="#" className="hover:underline">icetis2025@cgc.ac.in</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">call us at</h2>
                  <ul className="text-white dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline ">+91 9729288808</a>
                      </li>
                  </ul>
              </div>
              <div>
  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">quick link</h2>
  <div className="flex gap-5">
    <div>
      <ul className="text-white dark:text-gray-400 font-medium">
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
      <ul className="text-white dark:text-gray-400 font-medium">
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
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2025 <a href="#" className="hover:underline">ICETIS</a>. All Rights Reserved.
          </span>
          <span className="text-sm text-white sm:text-center dark:text-gray-400"> Designed by <a href="https://www.linkedin.com/in/shiven-kashyap-964819220/">Shiven Kashyap</a></span>
      </div>
    </div>
</footer>

  );
}
export default Footer;
