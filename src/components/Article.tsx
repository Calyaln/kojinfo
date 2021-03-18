import React, { Component } from "react";
import axios from "axios";
import { RouteComponentProps } from "react-router-dom";

interface match {
  match: {
    params: {
      id: string;
    };
  };
}

class Article extends Component<RouteComponentProps & match> {
  state = {
    post: {
      title: "loading...",
      body: "loading...",
    },
  };

  componentDidMount() {
    const postId = this.props.match.params.id;

    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then((data) => {
        console.log(data);
        this.setState({ post: data.data });
      });
  }

  render() {
    return (
      <>
        <h2>Article Detail</h2>
        <div>
          <h3>{this.state.post.title}</h3>
          <p>{this.state.post.body}</p>
        </div>
      </>
    );
  }
}

export default Article;
