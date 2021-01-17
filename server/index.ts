import express from "express";
const app = express();
const port = 5000;
app.get("/", (_, res) => {
  res.status(200).send();
});
app.listen(port, () => console.log(`Running on port ${port}`));

/*if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}*/
