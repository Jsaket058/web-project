const express = require("express");

const app = express();

//Routes
app.get("/",(req,res)=>{
    res.send("Home page");
});
const PORT= process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
});

//mongodb+srv://jsaket058:<password>@saketcluster.hdor5sy.mongodb.net/?retryWrites=true&w=majority&appName=SaketCluster