import React, { Component } from "react";
import axios from "axios";
import { RouteComponentProps } from "react-router-dom";
//import { Props, State } from "react-router";

// interface RouteParams {
//   id: string;
//   params: string;
// }

//class Article extends React.Component<MyProps & RouteComponentProps, MyState> {
// class Article extends React.Component<RouteComponentProps<RouteParams>> {
//   state = {
//     post: [] || null,
//   };

// interface State {
//   title: string;
//   body: string;
// }

// interface Props {
//   post: [];
// }

// class Article extends React.Component<RouteComponentProps<any>> {
//     state = {
//       post: null,
//     };

interface match {
  match: {
    params: {
      id: string;
    };
  };
}

// class Article extends React.Component<Props, State> {
//   state: State = {
//     post: null,
//   };

class Article extends Component<RouteComponentProps & match> {
  state = {
    post: {
      title: "loading...",
      body: "loading...",
    },
  };

  componentDidMount() {
    const postId = this.props.match.params.id;
    //(this.props.match.params as any).id

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
