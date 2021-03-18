import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Articles extends Component {
  state = {
    posts: [],
  };

  // to make the api call
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        //console.log(data);
        this.setState({ posts: data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const postItems = this.state.posts.map((post: any) => (
      <div key={post.id}>
        <h3>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/posts/${post.id}`}
          >
            {post.title}
          </Link>
        </h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <>
        <h1>Articles</h1>
        {postItems}
      </>
    );
  }
}

export default Articles;
