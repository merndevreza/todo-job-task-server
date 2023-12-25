const express = require("express"); 
const app = express();
const port = process.env.PORT || 5000;

//mongodb

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://todo-admin:JN9ejucf8lBsAmSR@cluster0.ojansry.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   //  await client.close();
  }
}
run().catch(console.dir);


//======================
//Express server initialize
//======================
app.get("/", (req, res) => {
   res.send("Server is Active");
 });
 app.listen(port, () => {
   console.log(`Server is running on port: ${port}`);
 });
 