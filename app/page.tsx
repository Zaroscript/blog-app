import React from "react";
import BlogList from "@/Components/BlogList";

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

const Home = async () => {
  const posts = await fetchPosts();

  return (
    <main className="container max-sm:w-[95%] py-8 flex justify-center items-center ">
      <BlogList posts={posts} />
    </main>
  );
};

export default Home;
