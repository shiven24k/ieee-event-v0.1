import React, { useState } from 'react';
import { Mail, User, Phone, Send, AlertCircle, CheckCircle } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Phone validation
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (formData.phone.trim() && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus(null);

    // Reset any previous errors
    setErrors({});

    // Validate form
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div  className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8 " style={{ backgroundImage: 'url(https://chandigarhengineeringcollege.com/public/course/assets/images/cec/club-bg.png)' }}>
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="md:flex">
          {/* Contact Form Section */}
          <div className="w-full md:w-1/2 p-8 bg-white">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 flex items-center">
              <Mail className="mr-3 text-red-500" />
              Contact Us
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Full Name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="mr-1 w-4 h-4" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="text-gray-400" />
                  </div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="mr-1 w-4 h-4" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Input */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="text-gray-400" />
                  </div>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Mobile Number" 
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="mr-1 w-4 h-4" /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="mr-1 w-4 h-4" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submission Status */}
              {submissionStatus === 'success' && (
                <div className="bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-lg flex items-center">
                  <CheckCircle className="mr-2 text-green-500" />
                  Message sent successfully!
                </div>
              )}
              {submissionStatus === 'error' && (
                <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg flex items-center">
                  <AlertCircle className="mr-2 text-red-500" />
                  Failed to send message. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <Send className="mr-2" /> Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="w-full md:w-1/2 bg-red-600 text-white p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Chandigarh Group of Colleges Jhanjeri</h3>
                <p className="text-blue-100">Punjab, Jhanjeri(PB)-140307</p>
              </div>

              <div>
                <h4 className="font-semibold">Contact Persons:</h4>
                <p>Dr. Pradeep Kumar Jindal</p>
                <p>Phone: <a href="tel:+919872495684" className="hover:underline">+91 98724 95684</a></p>
                
                <p className="mt-2">Dr. Shivani Goyal</p>
                <p>Phone: <a href="tel:+918264239901" className="hover:underline">+91 8264 239901</a></p>
              </div>

              <div>
                <h4 className="font-semibold">Email</h4>
                <a 
                  href="mailto:icetcs@cgc.ac.in" 
                  className=" s"
                >
                  icetcs@cgc.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;