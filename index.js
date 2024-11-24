const express = require("express");
const app = express();

// Define a sample dataset for demonstration
const users = [
    {
        name: "john",
        kidneys: [
            {
                healthy: false,
            },
            {
                healthy: true,
            },
        ],
    },
];

app.use(express.json());

// Define the root route
app.get("/", (req, res) => {
    const johnKidneys = users[0].kidneys;

    // Calculate kidney health stats
    const numberOfKidneys = johnKidneys.length;
    let numHealthyKidneys = 0;

    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numHealthyKidneys++;
        }
    }

    const numUnhealthyKidneys = numberOfKidneys - numHealthyKidneys;

    // Send the response as JSON
    res.json({
        totalKidneys: numberOfKidneys,
        healthyKidneys: numHealthyKidneys,
        unhealthyKidneys: numUnhealthyKidneys,
    });
});

// POST route to add a new kidney
app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;

    // Add the new kidney to the user's kidneys array
    users[0].kidneys.push({
        healthy: isHealthy,
    });

    res.json({
        message: "Kidney added successfully",
    });
});

// PUT route to update all kidneys to healthy
app.put("/", (req, res) => {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }

    res.json({
        message: "All kidneys updated to healthy",
    });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

// removing all the unhealthy kidneys
app.delete("/",function(req,res){
    const newkidneys=[];
    for(let i=0;i<users[0].length.kidneys[i];i++){
        if(users[0].kidneys[i].helathy){
            newkidneys.push({
                healthy: true
            })
        }
    }users[0].kidneys=newkidneys;
    res.json({
        message: "All unhealthy kidney delted"
    })
})
