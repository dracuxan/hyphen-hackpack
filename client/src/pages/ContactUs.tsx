import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-white py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-2">Contact Us</h1>
            <p className="text-center text-gray-600 mb-10">Any question or remarks? Just write us a message!</p>
            
            <div className="flex flex-col md:flex-row gap-6">
              {/* Contact Information */}
              <div className="bg-red-600 text-white p-8 rounded-lg md:w-1/3 relative overflow-hidden">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center">
                    <FaPhone className="mr-4" />
                    <span>+1012 3456 789</span>
                  </div>
                  
                  <div className="flex items-center">
                    <FaEnvelope className="mr-4" />
                    <span>demo@gmail.com</span>
                  </div>
                  
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="mr-4 mt-1" />
                    <div>
                      <p>123 Mumbai</p>
                      <p>Maharashtra, India - 400056</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-16 flex space-x-4 relative z-10">
                  <a href="#" className="text-white hover:text-gray-200">
                    <FaTwitter size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-gray-200">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-gray-200">
                    <FaYoutube size={20} />
                  </a>
                </div>
                
                {/* Decorative circles */}
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-400 rounded-full opacity-60 -mb-10 -mr-10"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-red-700 rounded-full opacity-70"></div>
              </div>
              
              {/* Contact Form */}
              <div className="md:w-2/3 bg-white p-4">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="example@email.com" 
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input 
                        id="phone" 
                        placeholder="+1012 3456 789" 
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Subject?
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="subject" 
                          value="marketingInquiry"
                          className="w-4 h-4 text-yellow-400 focus:ring-yellow-400 mr-2"
                        />
                        <span>Marketing Inquiry</span>
                      </label>
                      
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="subject" 
                          value="dataInquiry"
                          className="w-4 h-4 text-yellow-400 focus:ring-yellow-400 mr-2"
                        />
                        <span>Data Inquiry</span>
                      </label>
                      
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="subject" 
                          value="generalInquiry"
                          className="w-4 h-4 text-yellow-400 focus:ring-yellow-400 mr-2"
                        />
                        <span>General Inquiry</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Write your message.."
                      className="w-full min-h-[120px]"
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-2">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactUs;