const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.listen(3000, console.log("サーバー起動"));

app.get("/", (req, res) => {
    res.send("プログラミング");
});

const users = [
    {
        "id": 1,
        "name": "主田",
        "age": 24,
        "personalColor": "blue"
    },
    {
        "id": 2,
        "name": "先岡",
        "age": 28,
        "personalColor": "pink"
    },
    {
        "id": 3,
        "name": "後藤",
        "age": 23,
        "personalColor": "green"
    },
]

app.get("/api/users", (req, res) => {
    res.send(users);
});

app.get("/api/users/:id", (req, res) => {
    const user = users.find((c)=> c.id == parseInt(req.params.id));
    res.send(user);
});

app.post("/api/users", (req, res) => {
    const user = {
        name: req.body.name,
        id: users.length + 1,
        age: req.body.age,
        personalbar: req.body.personalColor
    };
    users.push(user);
    res.send(users);
})

app.put("/api/users/:id", (req, res) => {
    const user = users.find((c)=> c.id == parseInt(req.params.id));
    user.name = req.body.name;
    user.age = req.body.age;
    user.personalColor = req.body.personalColor;
    res.send(user);
})

app.delete("/api/users/:id", (req, res) => {
    const user = users.find((c)=> c.id == parseInt(req.params.id));
    const index = users.indexOf(user);
    users.splice(index, 1);
    res.send(user);
})

