import React from 'react'
 import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo/Brand */}
        <div>
          <h1 className="text-2xl font-bold">MyCompany</h1>
          <p className="text-sm mt-2 text-gray-400">© {new Date().getFullYear()} MyCompany. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Links</h2>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4 text-xl text-gray-400">
            <a href="https://www.facebook.com/" className="hover:text-white"><FaFacebook /></a>
            <a href="https://x.com/" className="hover:text-white"><FaTwitter /></a>
            <a href="https://www.instagram.com/accounts/login/?hl=en" className="hover:text-white"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
    
    
    
    </>
  )
}

export default Footer