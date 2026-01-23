const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');

//mongoose.connect("mongodb+srv://amandeepyadav0704_db_user:J9WdS4K6scFsjN65@cluster0.6puj4kg.mongodb.net/?appName=Cluster0");
const uri = "mongodb+srv://amandeepyadav0704_db_user:J9WdS4K6scFsjN65@cluster0.6puj4kg.mongodb.net/?appName=Cluster0"

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
    await client.close();
  }
}
run().catch(console.dir);

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  email: String,
  password: String,
  profilepic: {
    type: String,
    default:
      "default.webp",
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
});

module.exports = mongoose.model("user", userSchema);

//J9WdS4K6scFsjN65


// default code of this before editing or changing on friday 23rd janurary 2026/--

// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/project-sheryians");

// const userSchema = mongoose.Schema({
//   username: String,
//   name: String,
//   age: Number,
//   email: String,
//   password: String,
//   profilepic: {
//     type: String,
//     default:
//       "default.webp",
//   },
//   posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
// });

// module.exports = mongoose.model("user", userSchema);
