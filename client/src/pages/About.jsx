import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage1 from '../assets/about-image.png';        // First image
import aboutImage2 from '../assets/about-image2.png';      // Second image

export default function About() {
  return (
    <div>
      {/* About Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          {/* Left - Image */}
          <div className="flex-1">
            <img
              src={aboutImage1}
              alt="About us"
              className="w-full h-auto object-contain rounded-xl shadow-md"
            />
          </div>

          {/* Right - Text */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-6 text-slate-800">
              <span className="text-teal-600">About</span> Us
            </h1>
            <p className="mb-4 text-slate-700">
              At Michuu House Finder, we believe finding the right home shouldn’t be complicated.
              Born out of a growing need to simplify the home search process in Ethiopia, Michuu
              has been developed as a user-friendly and innovative platform to connect property seekers
              with trusted real estate listings.
            </p>
            <p className="mb-4 text-slate-700">
              Launched in response to the challenges of an increasingly digital world, Michuu House Finder
              is built on a foundation of trust, technology, and transparency. Whether you're looking to
              buy, rent, or list a property, our mission is to make that journey easier, smarter, and more reliable.
            </p>
            <p className="mb-4 text-slate-700">
              Our platform bridges the gap between property owners, real estate agents, and clients,
              ensuring verified listings, detailed property information, and responsive support.
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          {/* Right - Image */}
          <div className="flex-1">
            <img
              src={aboutImage2}
              alt="Our Mission"
              className="w-full h-auto object-contain rounded-xl shadow-md"
            />
          </div>

          {/* Left - More Text */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-4 text-slate-800">
              <span className="text-teal-600">Our</span> Mission
            </h2>
            <p className="mb-4 text-slate-700">
              Our mission is to revolutionize the real estate experience in Ethiopia by making it more transparent,
              efficient, and accessible to everyone. We focus on providing the most accurate listings and
              helping users make informed decisions.
            </p>
            <p className="mb-4 text-slate-700">
              With continuous improvements, user feedback, and a commitment to quality, we’re working to become
              the go-to platform for all your housing needs.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-white py-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-slate-800">
          {/* Phone */}
          <div>
            <i className="fas fa-phone-alt text-2xl mb-2"></i>
            <h4 className="font-semibold">Phone</h4>
            <p>0930222784</p>
          </div>

          {/* Address */}
          <div>
            <i className="fas fa-map-marker-alt text-2xl mb-2"></i>
            <h4 className="font-semibold">Address</h4>
            <p>Adama, Ethiopia</p>
          </div>

          {/* Open Time */}
          {/* <div>
            <i className="fas fa-clock text-2xl mb-2"></i>
            <h4 className="font-semibold">Open time</h4>
            <p>08:00 am to 05:00 pm</p>
          </div> */}

          {/* Email */}
          <div>
            <i className="fas fa-envelope text-2xl mb-2"></i>
            <h4 className="font-semibold">Email</h4>
            <p>support@MichuuHousing.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <footer className="bg-slate-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 text-center sm:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Michuu Housing. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
