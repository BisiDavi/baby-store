import { Splide, SplideSlide } from "@splidejs/react-splide";

import testimonies from "@/json/testimonial.json";
import "@splidejs/react-splide/css";

export default function TestimonialSlider() {
  return (
    <section className="container mx-auto my-12 p-12 py-14 w-ful bg-gray-100 rounded-lg">
      <h4 className="text-3xl text-center mb-4 font-bold">Our Testimonial</h4>
      <div className="slidere">
        <Splide>
          {testimonies.map((item) => (
            <SplideSlide key={item.name}>
              <div className="testimony text-center">
                <span className="text-9xl mb-0 pb-0 ">“</span>
                <p className="w-1/2 mx-auto -mt-12">{item.testimony}</p>
                <p className="my-4">.</p>
                <p className="">{item.name}</p>
                <p>{item.role}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
