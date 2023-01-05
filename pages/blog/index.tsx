import Image from "next/image";
import Link from "next/link";

import BreadCrumb from "@/components/BreadCrumb";
import Layout from "@/layout";
import blogContent from "@/json/blogs.json";
import toSlug from "@/utils/toSlug";
import Calender from "@/public/icon/Calender";
import User from "@/public/icon/User";

export default function Blog() {
  return (
    <Layout title="Blogs">
      <section className="container mx-auto flex flex-col py-6">
        <BreadCrumb
          links={[{ name: "🏠 Home", link: "/" }, { name: "Blog" }]}
        />
        <div className="blog-content w-full">
          <ul className="grid grid-cols-3 gap-6">
            {blogContent.map((item) => {
              const blogLink = `/blog/${toSlug(item.title)}`;
              return (
                <li key={item.title} className="blog">
                  <Link href={blogLink}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      height={500}
                      width={500}
                      className="rounded-t-xl"
                    />
                    <div className="text-content bg-gray-100 p-4 rounded-b-xl">
                      <h4 className="mb-1 text-lg font-bold">{item.title}</h4>
                      <div className="published flex justify-between">
                        <div className="date flex items-center">
                          <Calender className="w-1/12 mr-2" /> {item.date}
                        </div>
                        <div className="author flex items-center">
                          <User className="w-1/12 mr-2" />
                          {item.author}
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
