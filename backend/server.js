const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let employees = [];

app.get("/employees", (req,res)=>{

    res.json(employees);

});

app.post("/employee",(req,res)=>{

    const { name } = req.body;

    employees.push({
        name:name
    });

    res.json({
        message:
        `${name} added successfully`
    });

});

const PORT =
    process.env.PORT || 3000;

app.listen(PORT,()=>{

    console.log(
        `Server running on port ${PORT}`
    );

});
