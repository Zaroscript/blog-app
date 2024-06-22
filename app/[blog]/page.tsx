import React from "react";

const page = async ({ params }: { params: { blog: string } }) => {
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
};

export default page;
