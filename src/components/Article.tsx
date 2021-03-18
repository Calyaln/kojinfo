import React, { Component } from "react";
import axios from "axios";
import { RouteComponentProps } from "react-router-dom";
import { Link } from "react-router-dom";
import { IArticle } from "../types";

interface Iparams {
  id: string;
}

interface State {
  article: IArticle;
}

class Article extends Component<RouteComponentProps<Iparams>, State> {
  state = {
    article: {
      title: "loading...",
      body: "loading...",
    } as IArticle,
  };

  componentDidMount() {
    const postId = this.props.match.params.id;

    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then(({ data }: { data: IArticle }) => {
        this.setState({ article: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <h2>Article</h2>
        <div>
          <h3>{this.state.article.title}</h3>
          <p>{this.state.article.body}</p>
        </div>
        <Link to="/">Back</Link>
      </>
    );
  }
}

export default Article;
