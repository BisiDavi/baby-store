import { Splide, SplideSlide } from "@splidejs/react-splide";

import sliderContent from "@/json/banner.json";
import Button from "@/components/Button";
import "@splidejs/react-splide/css";

export default function Slider() {
  return (
    <section className="w-full">
      <Splide options={{ autoplay: true, loop: true }}>
        {sliderContent.slider.map((item) => (
          <SplideSlide key={item.img}>
            <div className="content p-10 flex flex-col mx-auto justify-center lg:p-20">
              <h6 className="text-lg font-medium">{item.text1}</h6>
              <h1 className="lg:text-3xl text-2xl lg:w-1/3 leading-snug font-bold my-4 lg:my-8">
                {item.main}
              </h1>
              <p className="text-lg lg:w-1/2">{item.text2}</p>
              <Button
                text="Shop Now"
                className="rounded-md h-10 bg-white w-32 mt-10"
              />
              <style jsx>
                {`
                  .content {
                    background-image: url(${item.img});
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: 600px;
                    width: 100%;
                  }
                `}
              </style>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
