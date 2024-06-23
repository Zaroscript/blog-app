import React from "react";

const Page = async ({ params }: { params: { blog: string } }) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.blog}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch post");
    }

    const blog = await res.json();

    return (
      <div className="container py-8 px-4">
        <h1 className="text-4xl font-bold max-w-2xl">{blog.title}</h1>
        <p className="leading-relaxed mt-10 text-lg max-w-2xl">{blog.body}</p>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return (
      <div className="container py-8 px-4">
        <h1 className="text-4xl font-bold max-w-2xl">Error</h1>
        <p className="leading-relaxed mt-10 text-lg max-w-2xl">
          Failed to fetch blog post. Please try again later.
        </p>
      </div>
    );
  }
};

export default Page;
