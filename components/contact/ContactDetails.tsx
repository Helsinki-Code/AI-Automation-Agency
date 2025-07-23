"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { companyInfo } from "@/app/metadata";

export function ContactDetails() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-400">{companyInfo.phone}</p>
              <p className="text-sm text-gray-500 mt-1">Mon-Fri 9AM to 6PM GMT</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">{companyInfo.email}</p>
              <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Office</h3>
              <p className="text-gray-400">{companyInfo.address.line1}</p>
              <p className="text-gray-400">{companyInfo.address.city}, {companyInfo.address.county}</p>
              <p className="text-gray-400">{companyInfo.address.country}</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
              <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM GMT</p>
              <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM GMT</p>
              <p className="text-gray-400">Sunday: Closed</p>
              <p className="text-sm text-gray-500 mt-2">Company Registration: {companyInfo.registrationNumber}</p>
            </div>
          </div>
        </div>
      </div>
        
      </div>
    </section>
  );
}