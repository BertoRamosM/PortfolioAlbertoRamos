import BlogCard from "./BlogCard.jsx";
import { useState } from "react";
import BlogSearch from "./BlogSearch.jsx";

const toLowerCase = (str) => (str ? str.toLowerCase() : "");

const BlogGallery = ({ allBlogArticles }) => {
  const [search, setSearch] = useState("");

  const filteredArticles = allBlogArticles.filter(
    (article) =>
      toLowerCase(article.data.title).includes(toLowerCase(search)) ||
      toLowerCase(article.data.subject).includes(toLowerCase(search))
  );

  return (
    <>
      <BlogSearch search={search} setSearch={setSearch} />

      {filteredArticles.length === 0 ? (
        <div className=" h-full text-2xl mt-10">No results found. Try searching for something else.</div>
      ) : (
        <div className="h-full grid grid-cols-1 gap-8 border-l-2 border-white/40 pl-4 pb-20">
          {filteredArticles.map((item) => (
            <BlogCard article={item} key={item.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default BlogGallery;
