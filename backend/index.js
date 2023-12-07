const express = require("express")
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require('./models')
//Routers
const userRouter = require('./route/Users');
app.use("/users", userRouter);

//Goes over every tables in model, if they dont exist, the table gets created
db.sequelize.sync().then(()=>{

    //Starts our server
    app.listen(3002, () => {
    console.log("Server running on port 3002");
});
});

