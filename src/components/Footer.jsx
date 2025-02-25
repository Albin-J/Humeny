import { getCurrentYear } from "@/lib/utils";
import { Facebook, Instagram, Mail } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-3 md:text-left">
          {/* Company Info */}
          <div className="space-y-1">
            <h2 className="text-lg font-bold">Humeny</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              feugiat lectus risus sed ullamcorper. Auctor semper fermentum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              feugiat lectus risus sed ullamcorper. Auctor semper fermentum.
            </p>
            <p className="text-sm">
              Volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed.
              Nibh est sit lobortis id semper.
            </p>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-gray-400">
                <Instagram />
              </a>
              <a href="#" className="text-xl hover:text-gray-400">
                <Facebook />
              </a>
              <a href="#" className="text-xl hover:text-gray-400">
                <Mail />
              </a>
            </div>
          </div>

          {/* Address Section */}
          <div className="space-y-2">
            <h2 className="text-lg font-bold">Address</h2>
            <div className="w-90 h-32 overflow-hidden rounded-md bg-gray-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62827.69349158767!2d76.33972654235599!3d10.202499356966053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080665e0bb9959%3A0x19b75e6b4e671ef1!2sAngamaly%2C%20Kerala!5e0!3m2!1sen!2sin!4v1735654208633!5m2!1sen!2sin"
                className="h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Center-Aligned Navigation Links */}
        <div className="mt-4 flex flex-wrap justify-center space-x-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-take_care_primary ${
                isActive && "text-take_care_primary"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `hover:text-take_care_primary ${
                isActive && "text-take_care_primary"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `hover:text-take_care_primary ${
                isActive && "text-take_care_primary"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `hover:text-take_care_primary ${
                isActive && "text-take_care_primary"
              }`
            }
          >
            Careers
          </NavLink>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col items-center justify-between border-t-2 border-gray-200 pt-4 text-sm md:flex-row">
          {/* Left: Copyright */}
          <p className="text-center md:text-left">
            Humeny © {getCurrentYear()}. All rights reserved.
          </p>

          {/* Right: Links */}
          <div className="mt-2 flex space-x-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">
              Terms
            </a>
            <a href="#" className="hover:text-gray-400">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
            <a href="#" className="hover:text-gray-400">
              EN
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
