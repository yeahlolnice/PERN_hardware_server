const pool = require("./db")
const express = require("express");
const app = express();
const cors = require("cors")

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create some item
app.post("/items", async(req, res) => {
    try {
        const name = req.body.name;
        const description = req.body.description;
        const newItem = await pool.query("INSERT INTO hardware (name, description) VALUES($1, $2) RETURNING *", [name, description]);
        res.json(newItem.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//get all items
app.get("/items", async(req, res) => {
    try {
        const allItems = await pool.query("SELECT * FROM hardware");
        res.json(allItems.rows)
    } catch (err) {
        console.error(err.message);
    }
    
});

//get a item
app.get("/items/:id", async(req, res) => {
    try {
        const id = req.params.id;
        const item = await pool.query("SELECT * FROM hardware WHERE hardware_id = $1", [id])
        console.log(item)
        res.json(item.rows[0])
    } catch (err) {
        console.error(err.message);
    }
});

//update a item
app.put("/items/:id", async(req, res) => {
    try {
        const id = req.params.id;
        const { name, description } = req.body;
        const updateItem = pool.query("UPDATE hardware SET name = $1, description = $2 WHERE hardware_id = $3", [name, description, id]);
        res.json("Item was updated!")
    } catch (err) {
        console.error(err.message)
    }
});

//delete a item
app.delete("/items/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteItem = pool.query("DELETE FROM hardware WHERE hardware_id = $1", [id])
        res.json("Item has been deleted!")
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(5000, () => {
    console.log("server has started on port 5000 :)")
});