import React, { useState, useEffect } from "react";
import { postsModel } from "../../models/posts.model";

const ArticleMain: React.FC = () => {
  const [posts, setposts] = useState<postsModel[]>([]);

  const url = "https://dev.to/api/articles?username=yuya0114";

  useEffect(() => {
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((posts) => setposts(posts))
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

  console.log(posts);

  return (
    <>
      <div className="content">
        <div className="articles">
          <div className="title">Articles</div>
          <hr></hr>
          {posts.map((post) => (
            <li className="posts" key={post.id}>
              <a className="postUrl" href={post.canonical_url} target="_blank">
                <div className="postDt">
                  {setDate(post.published_timestamp)}
                </div>
                <img className="postImg" src={post.social_image} />
              </a>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticleMain;
