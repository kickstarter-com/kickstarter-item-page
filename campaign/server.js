const express = require("./node_modules/express");
const bodyParser = require("body-parser");
const app = express();
const Project = require("./db.js").Project;
const Save = require("./db").saveProjects;
const dumpData = require("../dumpData");

app.use(express.static(__dirname + "/client/dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var port = process.env.PORT || 3001;

// app.get("/item", function(req, res) {
//   res.send("server");
// });

app.get("/:id", (req, res) => {
  var id = req.params.id;
  console.log(
    "inside get req:  ---------------------------------------------------------  " +
      id
  );
  Project.find({ projectId: id }).then(items => {
    res.json(items);
  });

  // Project.find().then(items => {
  //   console.log(items);
  //   res.json(items);
  // });
});

// app.get("/", (req, res) => {
//   console.log("inside / api");
//   Item.find().then(items => {
//     console.log(items);
//     res.json(items);
//   });
// });

app.post("/", (req, res) => {
  Save(demoData);
  res.status(200).end();
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

var demoData = [
  {
    projectId: 1,
    projectName: "project 1",
    projectTeazer: "projectTeazer",
    currentFund: 4,
    goalFund: 100,
    numberOfBackers: 2,
    daysToGO: 50,
    BackersIds: 4,
    projectVideo:
      "https://s3files.core77.com/blog/images/965402_115274_91238_jAeAKj0Ki.jpg",
    majorDescriptionImg:
      "https://cdn.motor1.com/images/mgl/Jp3Nn/s1/audi-r8-v10-performance.jpg",
    majorDescription:
      "He first bought carbon credits in 2005, when he launched a program to offset his grad school classmates' airline travel for study-abroad programs. In 2009 he went on to work for a London-based asset manager that invested in carbon development projects around the world. ",
    minorDescriptionImg:
      "https://ksr-ugc.imgix.net/assets/027/061/632/fdb580565c93a1fbfcc79c1d4d7c52aa_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1572649291&auto=format&gif-q=50&q=92&s=e5a0d0dfb6332fe89cbb3a3dce4f7caa0",
    minorDescription:
      "Plastic utensils are tremendously wasteful, but we often don't have a choice. They're usually the only option at parties, events or salad bars. Reusable utensils exist, but they are large and impractical to carry around with you."
  },
  {
    projectId: 2,
    projectName: "project 1",
    projectTeazer: "projectTeazer",
    currentFund: 4,
    goalFund: 100,
    numberOfBackers: 2,
    daysToGO: 50,
    BackersIds: 4,
    projectVideo:
      "https://s3files.core77.com/blog/images/965402_115274_91238_jAeAKj0Ki.jpg",
    majorDescriptionImg:
      "https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6InNoNnpuaHZkNGQybzItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.nDQdQzSTeoUXuWAbWgkYwoblwcSHP1VdjhmnMq8Nm58/image;s=1080x720;cars_;/919258267_;slot=2;filename=eyJmbiI6InNoNnpuaHZkNGQybzItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.nDQdQzSTeoUXuWAbWgkYwoblwcSHP1VdjhmnMq8Nm58_rev001.jpg",
    majorDescription:
      "He first bought carbon credits in 2005, when he launched a program to offset his grad school classmates' airline travel for study-abroad programs. In 2009 he went on to work for a London-based asset manager that invested in carbon development projects around the world. ",
    minorDescriptionImg:
      "https://ksr-ugc.imgix.net/assets/027/061/632/fdb580565c93a1fbfcc79c1d4d7c52aa_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1572649291&auto=format&gif-q=50&q=92&s=e5a0d0dfb6332fe89cbb3a3dce4f7caa0",
    minorDescription:
      "Plastic utensils are tremendously wasteful, but we often don't have a choice. They're usually the only option at parties, events or salad bars. Reusable utensils exist, but they are large and impractical to carry around with you."
  }
];
