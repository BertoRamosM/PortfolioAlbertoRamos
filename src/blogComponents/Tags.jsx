

const Tags = ({tags}) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {tags.map((tag, index) => (
        <span key={index} className="px-2 py-1 bg-transparent border-2 border-gray-500 dark:border-white dark:text-white rounded-full text-xs hover:opacity-90 hover:text-purple-300 cursor-pointer  transition-all duration-100 hover:border-purple-500">
          <a href={`/blog/tag/` + tag}>#{tag}</a>
        </span>
      ))}
    </div>
  );
}

export default Tags

