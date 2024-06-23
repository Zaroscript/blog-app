"use client"

import React, { useEffect, useState } from "react";
import BlogList from "@/Components/BlogList"; // Adjust the import path as per your project structure

interface Post {
  id: number;
  title: string;
  body: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const fetchedPosts: Post[] = await res.json();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <main className="container max-sm:w-[95%] py-8 flex justify-center items-center">
      <BlogList posts={posts} />
    </main>
  );
};

export default Home;
