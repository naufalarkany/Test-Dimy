const express = require("express");
const router = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//use for main router
app.use("/", router);

//just for test API
app.get("/", (req, res) => {
    res.status(200).send({
        status: "success",
        msg: "API Test Dimy Tech",
    });
});

// App starting here
const port = 3030;
const start = async () => {
    try {
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
