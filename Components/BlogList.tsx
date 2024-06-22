import React from "react";
import Blog from "./Blog";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogListProps {
  posts: Post[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-10 items-center">
      {posts.map((post) => (
        <Blog key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default BlogList;
