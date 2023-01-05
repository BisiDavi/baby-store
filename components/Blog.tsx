import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";

import blogs from "@/json/blogs.json";
import Button from "@/components/Button";
import Calender from "@/public/icon/Calender";
import User from "@/public/icon/User";
import toSlug from "@/utils/toSlug";
import "@splidejs/react-splide/css";

export default function Blog() {
  return (
    <div className="container mx-auto relative blog">
      <h4 className="text-3xl text-center font-bold my-4 lg:my-0">
        Latest Blog
      </h4>
      <p className="text-lg px-4 lg:px-0 my-2 text-center lg:w-1/2 mx-auto">
        Interesting Features Is Rich And Colorful, Each Button To Bring A
        Surprise To The Baby Introduction To Give Your Child Learn In Advance.
      </p>
      <div className="slider blog mt-14 lg:mt-0 mb-4 lg:mb-0">
        <Splide options={{ perPage: 1 }} className="h-full">
          {blogs.map((item) => {
            const blogLink = `/blog/${toSlug(item.title)}`;
            return (
              <SplideSlide key={item.text}>
                <div className="blog-view px-4 lg:px-0 flex flex-col lg:flex-row items-center lg:mt-4 justify-between lg:space-x-6">
                  {item.img && (
                    <Image
                      src={item.img}
                      alt={item.title}
                      height={500}
                      className="w-full lg:w-1/2 rounded-lg"
                      width={500}
                    />
                  )}
                  <div className="text w-full mt-4 lg:mt-0 lg:w-1/2">
                    <h4 className="text-2xl text-center font-bold mb-4">
                      {item.title}
                    </h4>
                    <p className="mb-2 text-gray-500">{item.text}</p>
                    <div className="published w-4/5 flex justify-between mt-4">
                      <div className="date flex items-center">
                        <Calender className="w-1/12 mr-2" /> {item.date}
                      </div>
                      <div className="author flex items-center">
                        <User className="w-1/12 mr-2" />
                        {item.author}
                      </div>
                    </div>
                    <Link href={blogLink}>
                      <Button
                        className="rounded-xl text-white py-2 mt-4 lg:mt-0 px-6 bg-blue-900 hover:opacity-80"
                        text="Read More"
                      />
                    </Link>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}
