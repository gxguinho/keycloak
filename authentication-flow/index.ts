import express from "express"

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Worldd");
});

app.listen(3000, () => {
    console.log("listen on port 3000"); 
});