import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddArticle = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [articleData, setArticleData] = useState({
    titre: "",
    autheur: "",
    resume: "",
    contenu: "",
    categorie: "",
    photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticleData({ ...articleData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setArticleData({ ...articleData, photo: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    formData.append("titre", articleData.titre);
    formData.append("contenu", articleData.contenu);
    formData.append("categorie", articleData.categorie);
    formData.append("resume", articleData.resume);
    formData.append("autheur", articleData.autheur);
    formData.append("photo", articleData.photo);

    axios
      .post("http://localhost:5000/articles/", formData)

      .then((data) => {
        setArticleData({
          titre: "",
          autheur: "",
          resume: "",
          contenu: "",
          categorie: "",
          photo: null,
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="bg-white border-2 border-gray-200 shadow-xl pt-10 pb-14 sm:w-4/5 md:w-3/5 lg:w-3/5 rounded-lg mt-4 mb-10 grid place-items-center">
        <form className="w-4/5" onSubmit={handleSubmit}>
          <h2 className="mt-2 text-2xl font-bold sm:text-4xl text-center bg-gradient-to-r from-blue-300 via-[#1CD2B1] to-blue-600 text-white mb-5">
            Add an Article
          </h2>
          <div className="w-full flex gap-2 items-center">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Title:</span>
              </label>
              <input
                type="text"
                name="titre"
                value={articleData.titre}
                onChange={handleInputChange}
                required
                placeholder="Article Title"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Author:</span>
              </label>
              <input
                type="text"
                name="autheur"
                value={articleData.autheur}
                onChange={handleInputChange}
                required
                placeholder="Article Author"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Summary:</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              name="resume"
              value={articleData.resume}
              onChange={handleInputChange}
              placeholder="Article Summary"
              required
            ></textarea>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Content:</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              name="contenu"
              value={articleData.contenu}
              onChange={handleInputChange}
              placeholder="Article Content"
              rows="6"
              required
            ></textarea>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category:</span>
            </label>
            <input
              type="text"
              name="categorie"
              value={articleData.categorie}
              onChange={handleInputChange}
              placeholder="Article Category"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo:</span>
            </label>
            <input
              type="file"
              name="photo"
              onChange={handleFileChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-full mt-14 border-none bg-gradient-to-r from-blue-600 via-[#1CD2B1] to-green-300"
            disabled={loading}
          >
            Add Article
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArticle;
