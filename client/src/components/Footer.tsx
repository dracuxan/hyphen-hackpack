import React from "react";
import Logo from "./Logo";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Social Media */}
          <div>
            <Logo />
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-black hover:text-gray-700">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-black hover:text-gray-700">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-black hover:text-gray-700">
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Menu and Quick Links */}
          <div className="grid grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-3">Menu</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-black hover:underline">Home</a></li>
                <li><a href="/contact" className="text-black hover:underline">Contact Us</a></li>
                <li><a href="#about" className="text-black hover:underline">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#resources" className="text-black hover:underline">Resources</a></li>
                <li><a href="#posb" className="text-black hover:underline">POSB Website</a></li>
              </ul>
            </div>
          </div>
          
          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Reach us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneCall className="h-5 w-5 mt-1 mr-3" />
                <span>+1012 3456 789</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mt-1 mr-3" />
                <span>demo@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3" />
                <div>
                  <p>123 Mumbai</p>
                  <p>Maharashtra, India - 400056</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
