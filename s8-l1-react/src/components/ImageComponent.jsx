import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div className="container m-auto w-50 text-center">
        <img className="img-fluid" src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}

export default ImageComponent;
