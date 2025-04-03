import React from "react";
import {FaFacebookF, FaInstagram, FaYoutube} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10 px-6 text-gray-700">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div>
                    <h3 className="font-bold text-lg">Ezytaskin</h3>
                    <p className="mt-2 text-sm">Connect with trusted service providers for all your needs.</p>
                    <div className="flex gap-3 mt-3 text-xl">
                        <FaFacebookF className="text-gray-500 cursor-pointer hover:text-gray-800"/>
                        <FaInstagram className="text-gray-500 cursor-pointer hover:text-gray-800"/>
                        <FaYoutube className="text-gray-500 cursor-pointer hover:text-gray-800"/>
                    </div>
                </div>

                {/* For Consumers */}
                <div>
                    <h3 className="font-bold text-lg">For Consumers</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Post a task</a></li>
                        <li><a href="#" className="hover:underline">Browse Categories</a></li>
                        <li><a href="#" className="hover:underline">How it works</a></li>
                        <li><a href="#" className="hover:underline">FAQs</a></li>
                    </ul>
                </div>

                {/* For Providers */}
                <div>
                    <h3 className="font-bold text-lg">For Providers</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Become a Provider</a></li>
                        <li><a href="#" className="hover:underline">Provider Resources</a></li>
                        <li><a href="#" className="hover:underline">Premium Subscription</a></li>
                        <li><a href="#" className="hover:underline">Success Stories</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="font-bold text-lg">Support</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">Help Center</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-500 mt-10 border-t pt-4">
                © 2025 EzyTaskin. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
