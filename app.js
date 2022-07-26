const express = require("express")
const taskRouter = require('./task/task.router').router 

const app = express()

app.use(express.json())

// app.use("/takst", (req, res) => {
//     res.json({ message: "Peticion con use", method: req.method });
//   });
  
  app.use('/apitask/v1', taskRouter)

  app.listen(8000, () => {
    console.log("Server started at port 8000");
  });
  