const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { chats } = require("./dummy/data.js");
const ConnectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware.js");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const { PORT } = process.env;

app.get("/", (req, res) => {
  res.json("running...");
});

// app.get("/api", (req, res) => {
//   res.json(chats);
// });

// app.get("/api/:id", (req, res) => {
//   console.log("req:", req.params);
//   const single = chats.find((val) => val._id === req.params.id);

//   res.send(single);
// });

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

ConnectDB().then(() => {
  app.listen(PORT || 5000, () => {
    console.log(`running at port ${PORT}`);
  });
});
