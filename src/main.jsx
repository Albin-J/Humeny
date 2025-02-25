import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Homepage from "./pages/Homepage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Careers from "./pages/Careers";
import Services from "./pages/Services";

// The navbar component uses the NavLink component from react-router-dom, that should be wrapped in a RouterProvider component.
// That's why we are using calling the navbar here.
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Homepage />
        <Footer />

      </div>
    ),
  },
  {
    path: "/about-us",
    element: (
      <div>
        <Navbar />
        <About />
        <Footer />

      </div>
    ),
  },
  {
    path: "/careers",
    element: (
      <div>
        <Navbar />
        <Careers />
        <Footer />

      </div>
    ),
  },
  {
    path: "/services",
    element: (
      <div>
        <Navbar />
        <Services />
        <Footer />
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
