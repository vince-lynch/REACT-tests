import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
  render(){
    return (
    <div>
    <h1>KillerNews.net</h1>
    {this.props.children}
    <Link to="archives">archives</Link>
    </div>
    );
  }
}