import { Splide, SplideSlide } from "@splidejs/react-splide";

import sliderContent from "@/json/banner.json";
import Button from "@/components/Button";
import "@splidejs/react-splide/css";

export default function Slider() {
  return (
    <section className="w-full">
      <Splide options={{ autoplay: true, type: "loop" }}>
        {sliderContent.slider.map((item) => (
          <SplideSlide key={item.img}>
            <div className="content  w-96 text-white px-10 py-0 flex flex-col mx-auto justify-center lg:p-20">
              <div className="txt-content relative bg-gray-900 w-2/3 opacity-90 z-10  p-10 rounded-lg">
                <div className="text z-20 relative">
                  <h6 className="text-lg font-medium">{item.text1}</h6>
                  <h1 className="lg:text-3xl w-full text-2xl leading-snug font-bold my-4 lg:my-2">
                    {item.main}
                  </h1>
                  <p className="lg:text-lg lg:w-1/2">{item.text2}</p>
                  <Button
                    text="Shop Now"
                    className="rounded-md hover:bg-blue-500 hover:text-white text-black font-bold h-10 bg-white w-32 mt-10"
                  />
                </div>
              </div>
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
