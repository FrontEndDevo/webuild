import { mainArticles, articlesIcons } from "../../Helpers/WebsiteData";
import AnArticle from "./AnArticle/AnArticle";

const Articles = () => {
  const allArticles = mainArticles.map((article) => (
    <AnArticle
      img={article.img}
      title={article.title}
      author={article.author}
      icons={articlesIcons}
    />
  ));

  return (
    <div className="articles m-12">
      <h2 className="text-center mb-14 text-5xl uppercase font-bold leading-tight">
        Latest
        <span className="text-orange-600"> articles </span>
        from <br /> our blog post
      </h2>
      <div className="main-articles flex gap-12">{allArticles}</div>
    </div>
  );
};

export default Articles;
