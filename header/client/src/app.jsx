import React from "react";
import ReactDOM from "react-dom";
import Headerbar from "./components/headerbar.jsx";
import VideoSection from "./components/videoSection.jsx";
import Info from "./components/info.jsx";
import $ from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {}
    };
  }

  componentDidMount() {
    this.getData();
    console.log(this.state.project);
  }

  getData() {
    console.log(this.state.project);
    var that = this;
    var path = window.location.href.split("=");
    var id = parseInt(path[1]);
    // var id = path[1];

    console.log(id);

    $.ajax({
      type: "GET",
      url: "/header/" + id,
      success: function(dataFromDb) {
        var projectFromDb = dataFromDb[0];
        // console.log();

        that.updateStatus(projectFromDb);
      }
    });
  }

  updateStatus(data) {
    this.setState({ project: data });
    // console.log(this.state.project);
  }

  render() {
    return (
      <div>
        <Headerbar />
        <hr />
        <div id="title">
          <h2 title={this.state.project.projectName}></h2>
          <h5 teazer={this.state.project.projectTeazer}></h5>
        </div>
        <br />
        <VideoSection projectVideo={this.state.project.projectVideo} />
        <Info project={this.state.project} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("header"));

// var App = () => (
// <div>
//   <Headerbar />
//   <hr />
//   <div id="title">
//     <h2>GoSun Flatware: Portable Utensils to End Single-Use Plastic</h2>
//     <h5>Reusable utensils that fit in your wallet, purse or pocket.</h5>
//   </div>
//   <br />
//   <VideoSection />
//   <Info />
// </div>
// );

//test
