import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IArticle } from "../types";

// the article types structure
type ArticlesState = {
  articles: IArticle[];
};

class Articles extends React.Component<ArticlesState> {
  state: ArticlesState = {
    articles: [],
  };

  // to make the api call
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }: { data: IArticle[] }) => {
        this.setState({ articles: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <h1 style={{ color: "#32CD32", paddingBottom: "10px" }}>Articles</h1>
        {this.state.articles.map((article: IArticle) => (
          <div style={{ padding: "2px" }} key={article.id}>
            <h3>
              <Link
                style={{ textDecoration: "none", color: "#2F4F4F" }}
                to={`/posts/${article.id}`}
              >
                {article.title}
              </Link>
            </h3>
            <p>{article.body}</p>
          </div>
        ))}
      </>
    );
  }
}

export default Articles;
