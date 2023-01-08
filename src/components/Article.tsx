import React, { useState, useEffect } from "react";
import { postsModel } from "../models/model";

/* IMPORT CSS */
import "../css/style.css";
import "../css/Article.css";

/* components */
import Header from "./common/Header";
import Footer from "./common/Footer";

const Article: React.FC = () => {
  const [posts, setPosts] = useState<postsModel[]>([]);

  const url = "https://dev.to/api/articles?username=yuya0114";

  useEffect(() => {
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((posts) => setPosts(posts))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const setDate = (date: string): string => {
    const YY = date.substring(0, 4);
    const MM = date.substring(5, 7);
    const DD = date.substring(8, 10);

    const pubDate = YY + "/" + MM + "/" + DD;
    return pubDate;
  };

  return (
    <main className="container">
      <Header />
      <div className="article-container">
        <div className="article-title">
          <h1>Articles</h1>
        </div>
        <hr></hr>
        <ul className="posts">
          {posts.map((post) => (
            <li className="post" key={post.id}>
              <a className="postUrl" href={post.canonical_url} target="_blank" rel="noreferrer">
                <div className="postDt">{setDate(post.published_timestamp)}</div>
                <img className="postImg" src={post.social_image} alt="post" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </main>
  );
};

export default Article;
