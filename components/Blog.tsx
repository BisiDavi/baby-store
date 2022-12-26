import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import blogs from "@/json/blogs.json";
import Button from "@/components/Button";
import Calender from "@/public/icon/Calender";
import User from "@/public/icon/User";
import "@splidejs/react-splide/css";

export default function Blog() {
  return (
    <div className="container mx-auto relative blog">
      <h4 className="text-3xl text-center font-bold">Latest Blog</h4>
      <p className="text-lg my-2 text-center w-1/2 mx-auto">
        Interesting Features Is Rich And Colorful, Each Button To Bring A
        Surprise To The Baby Introduction To Give Your Child Learn In Advance.
      </p>
      <div className="slider blog">
        <Splide options={{ perPage: 1 }}>
          {blogs.map((item) => (
            <SplideSlide key={item.text}>
              <div className="blog-view flex items-center mt-4 justify-between space-x-6">
                {item.img && (
                  <Image
                    src={item.img}
                    alt={item.title}
                    height={500}
                    className="w-1/2 rounded-lg"
                    width={500}
                  />
                )}
                <div className="text w-1/2">
                  <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                  <p className="mb-2 text-gray-500">{item.text}</p>
                  <div className="published w-4/5 flex justify-between">
                    <div className="date flex items-center">
                      <Calender className="w-1/12 mr-2" /> {item.date}
                    </div>
                    <div className="author flex items-center">
                      <User className="w-1/12 mr-2" />
                      {item.author}
                    </div>
                  </div>
                  <Button
                    className="rounded-xl text-white py-3 px-6 bg-blue-900 mt-14 hover:opacity-80"
                    text="Read More"
                  />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
