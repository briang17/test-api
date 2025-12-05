import express from "express";
import bodyParser from "body-parser";
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const PORT = process.env.PORT || 3301;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post("/data", (req, res) => {
    const data = req.body;
    console.log(Object.keys(data));
    /*
    for (const key in data) {
        if (Array.isArray(data[key])) {
            console.log(key, data[key]);
        } else {
            console.log(key, data[key][0]);
        }
    }
     */
    console.log(data.headers);
    console.log("is headers array", Array.isArray(data.headers));
    console.log("type of headers", typeof data.headers);
    res.status(200).send("Data received");
});
