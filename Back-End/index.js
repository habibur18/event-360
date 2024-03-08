const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// userName
const userName = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

// uri
const uri = `mongodb+srv://${userName}:${password}@cluster0.sfigf7b.mongodb.net/?retryWrites=true&w=majority`;

// mongodb connection

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const eventItems = client.db("event360").collection("items");
    const recentEvent = client.db("event360").collection("recent");
    const ourServices = client.db("event360").collection("services");
    // get data
    app.get("/events", async (req, res) => {
      const cursor = eventItems.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/events/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await eventItems.findOne(query);
      res.send(result);
    });

    // post data
    app.post("/events", async (req, res) => {
      const newEvent = req.body;
      console.log(newEvent);
      const result = await eventItems.insertOne(newEvent);
      res.send(result);
    });
    // update

    app.patch("/events/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      console.log(id, req.body);
      const updateData = { ...req.body }; // Copying the req.body to avoid modifying it
      delete updateData._id; // Exclude the _id field from the update data
      const result = await eventItems.updateOne(query, { $set: updateData });
      res.send(result);
    });

    // delete
    app.delete("/events/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await eventItems.deleteOne(query);
      res.send(result);
      console.log(result);
    });

    // itemse crud api
    app.get("/items", async (req, res) => {
      const cursor = recentEvent.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/items/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await recentEvent.findOne(query);
      res.send(result);
    });

    // post data
    app.post("/items", async (req, res) => {
      const newEvent = req.body;
      console.log(newEvent);
      const result = await recentEvent.insertOne(newEvent);
      res.send(result);
    });
    // update

    app.patch("/items/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      console.log(id, req.body);
      const updateData = { ...req.body }; // Copying the req.body to avoid modifying it
      delete updateData._id; // Exclude the _id field from the update data
      const result = await recentEvent.updateOne(query, { $set: updateData });
      res.send(result);
    });

    // delete
    app.delete("/items/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await recentEvent.deleteOne(query);
      res.send(result);
      console.log(result);
    });

    // our services
    // post so many data in our services at once
    app.post("/services", async (req, res) => {
      const newEvent = req.body;
      console.log(newEvent);
      const result = await ourServices.insertMany(newEvent);
      res.send(result);
    });
    // get all services data
    app.get("/services", async (req, res) => {
      const cursor = ourServices.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //   await client.close();
    console.log("client close");
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
