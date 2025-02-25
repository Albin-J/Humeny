import ServicesInView from "@/components/pages/services/ServicesInView";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-take_care_bg">
      <div className="mb-20">
        <h1 className="mt-10 text-5xl font-bold text-take_care_primary">
          Our Services
        </h1>
      </div>
      <div className="mx-10 flex flex-col items-center justify-center space-y-44">
        {/* top left */}
        <ServicesInView
          title={"Pregnancy and Delivery Care"}
          imgLeft={true}
          description={ 
          "At HUMENY HOME NURSING SERVICE, we provide dedicated support for every stage of motherhood. From expert prenatal guidance to post-delivery recovery, our compassionate and skilled nurses ensure the health, safety, and well-being of both mother and baby. With 24/7 care in the comfort of your home, we are your trusted partner for a smooth and comforting journey into parenthood."
          }
          image={"/images/hero.jpg"}
        />
        <ServicesInView
          title={"Elderly Care & Housekeeping"}
          imgLeft={false}
          description={
            "At HUMENY HOME NURSING SERVICE, we combine compassionate elderly care with professional housekeeping to create a nurturing and supportive home environment. Our dedicated team of caregivers ensures seniors receive personalized attention, assisting with daily tasks, managing health needs, and providing companionship that enhances their quality of life. Alongside this, our professional housemaids maintain a clean, organized, and hygienic living space, prioritizing safety and comfort."
          }
          image={"/images/hero.jpg"}
        />
        <ServicesInView
          title={"Athletics"}
          imgLeft={true}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique facere itaque libero obcaecati, enim rerum adipisci suscipit. Dicta voluptates, adipisci perferendis"
          }
          image={"/images/hero.jpg"}
        />
        <ServicesInView
          title={"Athletics"}
          imgLeft={false}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique facere itaque libero obcaecati, enim rerum adipisci suscipit. Dicta voluptates, adipisci perferendis"
          }
          image={"/images/hero.jpg"}
        />
      </div>
    </div>
  );
};

export default Services;
