import { InView } from "@/components/ui/in-view";
import React from "react";

const ServicesInView = ({ title, description, image, imgLeft }) => {
   return (
      <InView
         variants={{
            hidden: {
               opacity: 0,
               y: 30,
               scale: 0.95,
               filter: "blur(4px)",
            },
            visible: {
               opacity: 1,
               y: 0,
               scale: 1,
               filter: "blur(0px)",
            },
         }}
         transition={{ duration: 0.3, ease: "easeInOut" }}
         viewOptions={{ margin: "0px 0px -350px 0px" }}
      >
         <div className="p-4 grid grid-cols-1 lg:grid-cols-2 bg-take_care_bg lg:gap-14 gap-3">
            <div className={`${imgLeft ? "order-1" : "order-2"} flex `}>
               <img
                  src={image}
                  alt="Athletics"
                  className="xl:max-w-[900px] w-full rounded-lg"
               />
            </div>
            <div className={`${imgLeft ? "order-2" : "order-1"} flex`}>
               <div>
                  <p className="font-medium text-take_care_primary lg:pb-10 pb-3 lg:text-5xl text-4xl text-left">
                     {title}
                  </p>
                  <p className="text-sm lg:text-3xl text-left text-zinc-600">
                     {description}
                  </p>
               </div>
            </div>
         </div>
      </InView>
   );
};

export default ServicesInView;
