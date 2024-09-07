import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send form data to the backend
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <div className="py-3 bg-cover bg-no-repeat w-full" style={{ backgroundImage: 'url(https://chandigarhengineeringcollege.com/public/course/assets/images/cec/club-bg.png)' }}>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="p-5 w-full sm:w-1/2">
            <h2 className="text-lg font-bold mb-4">Contact Form</h2>
            <form onSubmit={handleSubmit}>
              <label className="block mb-2">Full Name</label>
              <input type="text" placeholder="Enter Name" name="name" className="form-control input-sm w-full mb-4 p-2 border rounded-md" value={formData.name} onChange={handleChange} />
              
              <label className="block mb-2">Email Address</label>
              <input type="text" name="email" placeholder="Enter Email Address" className="form-control input-sm w-full mb-4 p-2 border rounded-md" value={formData.email} onChange={handleChange} />
              
              <label className="block mb-2">Mobile Number</label>
              <input type="text" name="phone" placeholder="Enter Mobile Number" className="form-control input-sm w-full mb-4 p-2 border rounded-md" value={formData.phone} onChange={handleChange} />
              
              <label className="block mb-2">Enter Message</label>
              <textarea rows="5" placeholder="Enter Your Message" className="form-control input-sm w-full mb-4 p-2 border rounded-md" name="message" value={formData.message} onChange={handleChange}></textarea>
              
              <button type="submit" className="text-center p-3 border-none text-white bg-blue-500 rounded-md cursor-pointer">Submit Button</button>
            </form>
          </div>

          <div className="w-full sm:w-1/2 p-5">
            <div className="serv m-12">
              <h2 className="text-lg font-bold mb-4">Address</h2>
              <p>Chandigarh Group of Colleges Jhanjeri</p>
              <p>Punjab, Jhanjeri(PB)-140307</p>
              <p>Dr. Pradeep Kumar Jindal</p>
              <p>Phone: +91 98724 95684</p>
              <p>Dr. Shivani Goyal</p>
              <p>Phone: +91 8264239901</p>
              <p>Email at: <a href="mailto:icetis@cgc.ac.in" className="text-blue-500">icetis@cgc.ac.in</a></p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;