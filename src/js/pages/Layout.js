import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  
  navigate(){
    //console.log(this.props);
  }
  render(){
    const { history } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log(history.isActive("archives"));
    return (
  <div>
    <Nav location={location}/>

  <div class="container" style={containerStyle}>
     <div class="row">
      <div class="col-1g-12">
       <h1>KillerNews.net</h1>
       {this.props.children}
        <Link to="archives" activeClassName="test"><button class="btn btn-danger">archives</button></Link>
        <Link to="settings"><button class="btn btn-success">settings</button></Link>
        <button onClick={this.navigate.bind(this)}>Featured</button>
      </div>
     </div>
     <Footer />
    </div>
  </div>
    );
  }
}