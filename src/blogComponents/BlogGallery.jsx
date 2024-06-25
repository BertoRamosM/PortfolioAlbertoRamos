
import BlogCard from "./BlogCard.jsx";
import { useState } from "react";
import BlogSearch from "./BlogSearch.jsx";




const BlogGallery = ({ allBlogArticles }) => {

  const [search, setSearch] = useState("")

  const filteredArticles = allBlogArticles.filter(
    (article) =>
      article.data.title.toLowerCase().includes(search.toLowerCase()) ||
      article.data.subject.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <BlogSearch search={search} setSearch={setSearch} />
      <div className="h-full grid grid-cols-1 gap-8 border-l-2 border-white/40 pl-4 pb-20">
        {filteredArticles.map((item) => (
          <BlogCard article={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default BlogGallery

