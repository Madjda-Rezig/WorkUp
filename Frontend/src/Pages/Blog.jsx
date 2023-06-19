import Pagination from "../components/Pagination/Pagination.jsx";
import HeroBlogs from "../components/Hero/Heroblogs.jsx";
import CardArticle from "../components/Card/Cardarticle.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Blog() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const afficherArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/articles/pagination?page=${currentPage}`
        );
        if (response.data) {
          setPages(response.data.pages);
          setArticles(response.data.articles);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    afficherArticle();
  }, [currentPage]);
  if (loading)
    return (
      <h1 className="h-screen w-screen text-4xl text-center flex items-center justify-center">
        Loading
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>
      </h1>
    );
  return (
    <div>
      <HeroBlogs />
      <CardArticle articles={articles} />
      <Pagination pages={pages} setCurrentPage={setCurrentPage} />
    </div>
  );
}
