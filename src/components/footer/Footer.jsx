import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold mb-2">Popular Links</h3>
          <ul className="space-y-1 text-sm">
            <li>X200 Pro</li>
            <li>X200</li>
            <li>V60</li>
            <li>V50e</li>
            <li>T4x 5G</li>
            <li>All Models</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li>FAQs</li>
            <li>Service Center</li>
            <li>IMEI Authentication</li>
            <li>System Update</li>
            <li>Write to CEO</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Contact</h3>
          <p>24*7: 1800-208-3388</p>
          <p>Email: support@vivo.com</p>
          <p>WhatsApp: 8AM-8PM</p>
        </div>
      </div>
      <div className="text-center text-sm mt-6">
        © 2025 vivo Mobile India Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
