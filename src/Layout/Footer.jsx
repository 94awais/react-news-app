import React from 'react'

import logo from'../assets/final1.png';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {



  console.log("footer moun hua")
  return (
    <footer className="bg-[#0B1220] text-[#9CA3AF] relative  w-full bottom-0">
      <div className="max-w-7xl mx-auto px-6 py-14">

      
        <div className="flex items-center gap-3 mb-10">
          <img  src={logo} className="w-8 h-8 rounded-lg  object-cover" /> 
          <span className="text-lg font-semibold text-[#E5E7EB]">
           NewsBrand
          </span>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-[#1F2937] mb-10" />

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          <div>
            <h4 className="text-[#E5E7EB] font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Our Story</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#E5E7EB] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#E5E7EB] font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">News</li>
              <li className="hover:text-white cursor-pointer">Guides</li>
              <li className="hover:text-white cursor-pointer">Ebooks</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#E5E7EB] font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

        </div>

        {/* Newsletter */}
        <div className="mt-14">
          <h4 className="text-[#E5E7EB] font-semibold mb-2">
            Subscribe to Our Newsletter
          </h4>
          <p className="text-sm mb-4">
            Stay updated with our latest news and offers.
          </p>

          <div className="flex max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-[#0F172A]
                         border border-[#1F2937]
                         rounded-l-lg outline-none
                         text-[#E5E7EB]"
            />
            <button
              className="px-5 py-2 text-white font-medium rounded-r-lg
                         bg-gradient-to-r from-[#7C3AED] to-[#2563EB]"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-[#1F2937]
                        flex flex-col sm:flex-row
                        justify-between items-center gap-4">

          <p className="text-sm">
            © 2024 WebBrand. All rights reserved.
          </p>

          <div className="flex gap-5 text-lg">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
