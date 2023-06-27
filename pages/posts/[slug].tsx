import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { marked } from "marked";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from "react";
import PostMetas from "../../components/PostMetas";

type Post = {
  slug: string;
  title: string;
  date: string;
  content: string;
  tags: string;
  author: string;
  readTime: string;
};

type PostProps = {
  post: Post;
};

export default function PostPage({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const htmlString = marked.parse(post.content || "");

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <h1>{post.title}</h1>
      <PostMetas
        author={post.author}
        readTime={post.readTime}
        dateCreated={post.date}
      />
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filename = `${params?.slug}.md`;
  const filePath = path.join(postsDirectory, filename);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  const post = {
    slug: params?.slug,
    title: data.title,
    date: data.date,
    content,
    tags: data.tags,
    author: data.author,
    readTime: data.readTime,
  };
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const slugs = filenames.map((filename) => filename.replace(".md", ""));
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: true,
  };
};
