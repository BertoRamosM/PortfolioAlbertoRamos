import { useEffect } from "react";
import Tags from "./Tags";

const BlogCard = ({ article }) => {
  useEffect(() => {
    const image = document.querySelector(".article-image");
    if (image) {
      image.style.viewTransitionName = "article-image";
    }
    const title = document.querySelector(".article-title");
    if (title) {
      title.style.viewTransitionName = "article-title";
    }
    const tags = document.querySelector(".tags-container");
    if (tags) {
      tags.style.viewTransitionName = "article-tags";
    }
  }, []);

  return (
    <div className="mt-6 py-4 rounded-xl border-2 border-white/40 text-white relative overflow-hidden group flex flex-col justify-between gap-4 w-[90%] sm:w-full text-pretty p-6 bg-transparent">
      <div className="p-6">
        <div className="flex items-center justify-between flex-col sm:flex-row pb-4 sm:pb-0">
          <h2 className="text-lg sm:text-2xl font-semibold mb-2 flex items-end border-b-2 border-purple-400 article-title">
            <a
              href={`/blog/${article.slug}`}
              className="group-hover:text-purple-500 cursor-pointer transition-all duration-100"
            >
              {article.data.title}
            </a>
          </h2>
          <img
            src={article.data.image}
            width={200}
            height={200}
            alt={article.data.title}
            className="rounded-lg article-image"
          />
        </div>
        <p className="text-gray-300 text-sm mb-4 px-2">
          {new Date(article.data.pubDate).toLocaleDateString()}
        </p>
        <div className="tags-container">
          <Tags tags={article.data.tags} />
        </div>{" "}
        <p className="mt-4 text-white/80 mb-4">{article.data.desc}</p>
        <a
          href={`/blog/${article.slug}`}
          className="text-purple-500 cursor-pointer mt-12 border-b-2 border-purple-500 pb-2"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
