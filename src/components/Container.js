import React, { Component } from "react";
import Gif from "./Gif";
const apiKey = "jelpAq93k1EITgwN5NLadWcYck4QZXB3";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: "",
    };
  }

  callApi() {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        this.storeGif(data);
      });
  }

  storeGif(data) {
    this.setState({
      gif: data.data,
    });
  }

  componentDidMount() {
    this.callApi();
  }

  newGifs() {
    this.callApi();
  }

  render() {
    let gifs;

    if (this.state.gif === "") {
      return (
        <div className="container">
          {/* <!-- Page Features --> */}
          <div className="row text-center">
            <Gif textLoading="Loading..." />
            <Gif textLoading="Loading..." />
            <Gif textLoading="Loading..." />
            <Gif textLoading="Loading..." />
          </div>
          {/* <!-- /.row --> */}
        </div>
      );
    } else {
      gifs = this.state.gif;
      return (
        <div className="container">
          {/* <!-- Page Features --> */}
          <div className="row text-center">
            {gifs.map((elem, i) => {
              return <Gif key={i} {...elem} />;
            })}
          </div>
          {/* <!-- /.row --> */}
        </div>
      );
    }
  }
}

export default Container;
