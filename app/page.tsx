import React from "react";
import BlogList from "@/Components/BlogList";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Home = ({ posts }: { posts: Post[] }) => {
  return (
    <main className="container max-w-[95%] py-8 flex justify-center items-center">
      <BlogList posts={posts} />
    </main>
  );
};

export const getServerSideProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    const posts: Post[] = await res.json();
    return { props: { posts } };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { props: { posts: [] } }; // Return empty array or handle error as needed
  }
};

export default Home;
