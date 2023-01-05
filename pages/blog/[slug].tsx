import Image from "next/image";
import { GetServerSidePropsContext } from "next";

import blogContent from "@/json/blogs.json";
import Calender from "@/public/icon/Calender";
import Layout from "@/layout";
import toSlug from "@/utils/toSlug";
import User from "@/public/icon/User";
import BreadCrumb from "@/components/BreadCrumb";

interface Props {
  blog: {
    title: string;
    text: string;
    date: string;
    author: string;
    img: string;
  };
}

export default function BlogPage({ blog }: Props) {
  return (
    <Layout title={`${blog.title}`}>
      <section className="container mx-auto flex flex-col py-6">
        <BreadCrumb
          links={[
            { name: "🏠 Home", link: "/" },
            { name: "Blog", link: "/blog" },
            { name: blog.title },
          ]}
        />
        <div className="content w-full flex flex-col lg:flex-row lg:space-x-6 mt-4 px-4 lg:px-0 space-y-4 lg:space-y-0">
          <div className="lg:w-1/2">
            <Image src={blog.img} alt={blog.title} height={1000} width={1000} />
          </div>
          <div className="lg:w-1/2">
            <h4 className="text-3xl font-bold mb-2">{blog.title}</h4>
            <p className="leading-relaxed">{blog.text}</p>
            <div className="published mt-6 font-medium flex justify-between">
              <div className="date flex items-center">
                <Calender className="w-4 mr-2" /> {blog.date}
              </div>
              <div className="author flex items-center">
                Author: <User className="w-4 mx-2" />
                {blog.author}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext<any>
) {
  const blog = blogContent.filter(
    (item) => context.params.slug === toSlug(item.title)
  )[0];
  return {
    props: {
      blog,
    },
  };
}
