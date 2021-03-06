const mongoose = require("mongoose");
const URI = require("./config/keys.js").mongoURI;

// Project Schema
const Schema = mongoose.Schema;
const projectSchema = Schema({
  projectId: {
    type: Number,
    required: true,
    unique: true
  },
  projectName: {
    type: String,
    required: true
  },
  projectTeazer: {
    type: String
  },
  currentFund: {
    type: Number
  },
  goalFund: {
    type: String
  },
  numberOfBackers: {
    type: Number
  },
  daysToGO: {
    type: Number
  },
  BackersIds: {
    type: Number
  },
  projectVideo: {
    type: String
  },
  majorDescriptionImg: {
    type: String
  },
  majorDescription: {
    type: String
  },
  minorDescriptionImg: {
    type: String
  },
  minorDescription: {
    type: String
  }
});

//Project Model
const Project = mongoose.model("projects", projectSchema);

// Connect to database
mongoose.connect(URI, { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("We are Connected :Taz");
});

// populat data to database.
const saveProjects = function(data) {
  for (var i = 0; i < data.length; i++) {
    var projectId = data[i].projectId;
    var projectName = data[i].projectName;
    var projectTeazer = data[i].projectTeazer;
    var currentFund = data[i].currentFund;
    var goalFund = data[i].goalFund;
    var numberOfDoners = data[i].numberOfBackers;
    var daysToGO = data[i].daysToGO;
    var BackersIds = data[i].BackersIds;
    var currentFund = data[i].currentFund;
    var goalFund = data[i].goalFund;
    var numberOfDoners = data[i].numberOfDoners;
    var BackersIds = data[i].BackersIds;
    var projectVideo = data[i].projectVideo;
    var majorDescriptionImg = data[i].majorDescriptionImg;
    var majorDescription = data[i].majorDescription;
    var minorDescriptionImg = data[i].minorDescriptionImg;
    var minorDescription = data[i].minorDescription;

    var newProject = new Project({
      projectId: projectId,
      projectName: projectName,
      projectTeazer: projectTeazer,
      currentFund: currentFund,
      goalFund: goalFund,
      numberOfDoners: numberOfDoners,
      daysToGO: daysToGO,
      BackersIds: BackersIds,
      projectVideo: projectVideo,
      majorDescriptionImg: majorDescriptionImg,
      majorDescription: majorDescription,
      minorDescriptionImg: minorDescriptionImg,
      minorDescription: minorDescription
    });

    newProject.save();
  }
};

module.exports.Project = Project;
module.exports.saveProjects = saveProjects;
