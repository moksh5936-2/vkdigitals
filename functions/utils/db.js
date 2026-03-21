const { MongoClient } = require('mongodb');

let client;
let clientPromise;

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

if (!uri) {
  throw new Error('Please add your Mongo URI to Netlify environment variables');
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

async function getDb() {
  const client = await clientPromise;
  return client.db('vkdigitals'); // Target database name
}

module.exports = { getDb };
