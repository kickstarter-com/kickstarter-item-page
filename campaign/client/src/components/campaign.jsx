import $ from "jquery";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDescription: {}
    };
  }
  retreivData() {
    var that = this;
    var path = window.location.href.split("=");
    var id = path[1];
    $.ajax({
      type: "GET",
      url: "/" + id,
      success: function(collection) {
        that.setState({
          itemDescription: collection[0]
        });
      },
      error: function(request, status, error) {
        console.log(error);
      }
    });

    // $.ajax({
    //   type: "GET",
    //   url: "http://localhost:3001",
    //   success: function(collection) {
    //     console.log(collection);
    //     that.setState({
    //       itemDescription: collection[0]
    //     });
    //   },
    //   error: function(request, status, error) {
    //     console.log(error);
    //   }
    // });
  }
  componentDidMount() {
    this.retreivData();
  }
  render() {
    console.log(this.state.itemDescription.projecId);
    console.log(this.state.itemDescription);

    return (
      <div className="main">
        <h3 className="about">About</h3>
        <div>
          <div>
            <p id="cp">{this.state.itemDescription.majorDescription}</p>
          </div>
          <div>
            <img
              id="cimg"
              src={this.state.itemDescription.majorDescriptionImg}
            />
          </div>
          <div>
            <p id="cp">{this.state.itemDescription.minorDescription}</p>
          </div>

          <div>
            <img
              id="cimg"
              src={this.state.itemDescription.minorDescriptionImg}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
