import React from "react";
import ReactDOM from "react-dom";
import Headerbar from "./components/headerbar.jsx";
import VideoSection from "./components/videoSection.jsx";
import Info from "./components/info.jsx";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {}
    };
  }
  componentDidMount() {
    this.getData();
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
      url: "/" + id,
      success: function(projectFromDb) {
        that.updateStatus(projectFromDb);
        console.log(that.state.project);
      }
    });
  }
  updateStatus(data) {
    this.setState({ project: data });
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
        <VideoSection video={this.state.project.projectVideo} />
        <Info info={this.state.project} />
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
