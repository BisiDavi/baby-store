import Image from "next/image";
import { GetServerSidePropsContext } from "next";

import blogContent from "@/json/blogs.json";
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
        <div className="content w-full flex space-x-6 mt-4">
          <div className="w-1/2">
            <Image src={blog.img} alt={blog.title} height={1000} width={1000} />
          </div>
          <div className="w-1/2">
            <h4 className="text-3xl font-bold mb-2">{blog.title}</h4>
            <p className="leading-relaxed">{blog.text}</p>
            <div className="author mt-4 items-center flex w-1/3 font-medium">
              <span className="mr-2">Author: </span>{" "}
              <User className="w-1/12 mr-2" /> {blog.author}
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
