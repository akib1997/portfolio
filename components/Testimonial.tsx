import { Carousel } from "react-responsive-carousel";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import TestimonialData from "../data/TestimonialData";

const Testimonial = () => {
  return (
    <section className="testimonial bg-mainColorLigh relative text-mainColor">
      <Carousel
        infiniteLoop={true}
        showStatus={false}
        stopOnHover={true}
        autoPlay={true}
        transitionTime={1500}
        interval={5000}
        showIndicators={false}
        showThumbs={false}
      >
        {TestimonialData.map((data, index) => (
          <div
            className="lg:w-1/3 w-4/5 md:w-2/3 text-center mx-auto my-12 p-6"
            key={index}
          >
            <span className="text-3xl pt-6 block">
              <ImQuotesLeft className="m-auto" />
            </span>
            <p className="whitespace-normal mt-2 mb-4 italic font-medium">
              {data.text}
            </p>
            <h4 className="text-2xl font-semibold"> {data.name} </h4>
            <p className="font-normal"> {data.country} </p>
            <span className="text-3xl pt-1 block">
              <ImQuotesRight className="m-auto" />
            </span>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonial;
