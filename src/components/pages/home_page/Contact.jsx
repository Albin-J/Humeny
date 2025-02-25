import React from "react";

const Contact = () => {
  return (
    <div className="px-10 py-20 md:grid md:grid-cols-2">
      <div className="hidden bg-red-100 md:block">
        <img
          src="/images/Home(3).jpg"
          alt="Healthcare"
          className="h-full w-full rounded-lg object-cover xl:h-[700px]"
        />
      </div>
      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc7p99Reif_3XjbwVW94wT6eYwTeInksfkYzhJaqA_UVILudg/viewform?embedded=true"
          className="h-[600px] w-full border-0 md:h-[370px] lg:h-[500px] xl:h-[700px]"
          title="Registration Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Contact;
