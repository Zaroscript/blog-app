import Link from "next/link";
import React from "react";

interface BlogProps {
  id: number;
  title: string;
  body: string;
}

const Blog: React.FC<BlogProps> = ({ id, title, body }) => {
  return (
    <div
      key={id}
      className="flex max-w-80 max-sm:max-w-full min-h-60 overflow-hidden shadow-sm border-l border-slate-300  transition duration-500  hover:shadow-md hover:scale-105"
    >
      <div className="flex flex-col justify-between w-full">
        <div className="p-4">
          <Link href={`/${id}`}>
            <span className="font-bold uppercase text-xl">{title}</span>
          </Link>

          <p className="overflow-hidden box mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-300">
            {body.substring(0, 50) + "..."}
          </p>
        </div>

        <Link
          href={`/${id}`}
          className="block bg-slate-300 dark:bg-black py-3 px-5 leading-4 font-bold uppercase text-center transition duration-500 hover:bg-slate-200 dark:hover:bg-slate-600"
        >
          Read Blog
        </Link>
      </div>
    </div>
  );
};

export default Blog;
