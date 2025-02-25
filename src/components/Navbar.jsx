import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link,NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate("/#contact");

    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

   return (
      <nav className="bg-white py-4 font-semibold mx-10 shadow-md">
         <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="font-bold text-xl text-take_care_primary">
               <Link to="/">
                  <img
                     src="/images/logo.jpg" // Update this to your actual logo file name
                     alt="with you Logo"
                     className="h-14" // Adjust height as needed
                  />
               </Link>
            </div>
            
            <div className="hidden md:flex space-x-10">
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
                  Our Works
               </NavLink>
            </div>
            <div className="hidden md:flex">
          <Button onClick={handleContactUsClick}>Contact Us</Button>
        </div>
            <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
               <Menu className="hover:cursor-pointer" />
            </div>
         </div>

         {/* Mobile Menu */}
         {isOpen && (
            <div className="mt-4 md:hidden text-center items-center">
               <div className="flex flex-col space-y-2 divide-y divide-gray-400">
                  <NavLink
                     to="/"
                     className={({ isActive }) =>
                        `hover:text-take_care_primary w-full ${
                           isActive && "text-take_care_primary"
                        }`
                     }
                  >
                     Home
                  </NavLink>
                  <NavLink
                     to="/about-us"
                     className={({ isActive }) =>
                        `hover:text-take_care_primary w-full pt-2 ${
                           isActive && "text-take_care_primary"
                        }`
                     }
                  >
                     About Us
                  </NavLink>
                  <NavLink
                     to="/services"
                     className={({ isActive }) =>
                        `hover:text-take_care_primary w-full pt-2 ${
                           isActive && "text-take_care_primary"
                        }`
                     }
                  >
                     Services
                  </NavLink>
               </div>
               <div className="hidden md:flex">
          <Button onClick={handleContactUsClick}>Contact Us</Button>
        </div>
            </div>
         )}
      </nav>
   );
};

export default Navbar;
