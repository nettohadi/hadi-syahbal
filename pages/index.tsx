import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Link from "next/link";
import myImage from "../images/profile/hadi_sy.jpeg";
import ExternalLink from "../components/ExternalLink";

type Post = {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  tags: string;
  author: string;
  readTime: string;
  thumbnail: string;
};

type HomeProps = {
  posts: Post[];
};

export default function Home({ posts }: HomeProps) {
  // Render posts...
  return (
    <div className="flex flex-col justify-center items-center gap-16 w-full">
      {/*Introduction*/}
      <div className="flex flex-col justify-center items-center gap-16">
        <h1 className="h-auto font-bold flex flex-col gap-5 text-center justify-center align-middle">
          <span className="block text-3xl md:text-4xl lg:text-5xl">
            Hi, I am
          </span>
        </h1>
        <img
          src={myImage.src}
          alt="my profile image"
          className="rounded-full object-cover w-52 md:w-56 h-52 md:h-56 border-4"
        />
        <h1 className="h-auto font-bold flex flex-col gap-5 text-center justify-center align-middle font-heading">
          <span className="block text-5xl md:text-8xl">Abdul Hadi</span>
          <span className="block text-5xl md:text-8xl">Syahbal</span>
          <span className="block text-xl md:text-4xl lg:text-3xl text-gray-400">
            Frontend Developer
          </span>
        </h1>
        <div className="w-full flex flex-col gap-9">
          <p className="text-2xl font-light leading-relaxed">
            I'm best known for my work on{" "}
            <ExternalLink href="https://www.frontbuilder.net" target="_blank">
              Frontbuilder
            </ExternalLink>
            , a no-code platform for creating websites, and{" "}
            <ExternalLink
              href="https://reaksi.hadi-syahbal.com"
              target="_blank"
            >
              Reaksi
            </ExternalLink>
            , a react-like library for making user interfaces. Besides that, I
            am constantly trying to improve my skills by doing unconventional
            projects and deep diving into the tools and frameworks that I am
            using.
          </p>
          <p className="text-2xl font-light leading-relaxed">
            I am actively looking for a new role as a frontend engineer. Please{" "}
            <ExternalLink>reach out</ExternalLink> to me if you have any
            opportunities.
          </p>
          <div className="flex justify-center items-center gap-5">
            <button className="py-4 px-6 bg-blue-600 rounded-full font-bold">
              REACH OUT
            </button>
            <button className="py-4 px-6 bg-blue-600 rounded-full font-bold">
              DOWNLOAD MY CV
            </button>
          </div>
        </div>
      </div>
      {/*Blog*/}
      <div className="flex flex-col gap-6 w-full mt-28">
        <h2 className="text-3xl md:text-4xl font-bold flex flex-col gap-5 text-center justify-center align-middle font-heading">
          Blog
        </h2>
        {posts.map((post) => (
          <ul key={post.slug} className="flex flex-col gap-5">
            {/*<img src={post.thumbnail} alt={post.title} className="w-full" />{" "}*/}
            {/* add this line */}
            <li className="list-disc">
              <Link href={`/posts/${post.slug}`}>
                <a
                  className="text-2xl text-blue-400 underline underline-offset-1
                hover:text-blue-300 hover:underline-offset-8 transition-all ease-in-out hover:transition-all"
                >
                  {post.title}
                </a>
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    const slug = filename.replace(".md", "");
    const excerpt = content.substring(0, 200);
    return {
      slug,
      title: data.title,
      date: data.date,
      content,
      excerpt,
      tags: data.tags,
      author: data.author,
      readTime: data.readTime,
      thumbnail: data.thumbnail,
    };
  });
  // Sort posts by date
  const sortedPosts = posts.sort(
    (a, b) => (new Date(b.date) as any) - (new Date(a.date) as any)
  );
  console.log({ sortedPosts });
  return {
    props: {
      posts: sortedPosts,
    },
  };
};
