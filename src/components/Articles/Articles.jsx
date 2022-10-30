import { mainArticles } from "../../Helpers/WebsiteData";

const Articles = () => {
  return (
    <div className="articles bg-gray-600">
      <h2 className="text-center mb-14 text-5xl uppercase font-bold leading-tight">
        Latest
        <span className="text-orange-600"> articles </span>
        from <br /> our blog post
      </h2>
      <div className="main-articles"></div>
    </div>
  );
};

export default Articles;
