var express = require('express');
const { ObjectId} = require('mongodb');
var router = express.Router();
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'mflix-db';

async function getMovies() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('movies').find({}).limit(10).toArray();

  // the following code examples can be pasted here...
    return collection;
 
}

async function getMoviesById(id) {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('movies').find({_id: new ObjectId(id)}).toArray();
  
    // the following code examples can be pasted here...
      return collection;
   
  }


let movie = {
  name: 'Viduthalai'
};

router.get('/:id', function(req, res, next) {
  getMoviesById(req.params.id).then(data=> {
    res.send(data)
  })
  //res.send(req.params)
});

/* GET users listing. */
router.get('/', function(req, res, next) {
 getMovies().then(data =>{
    res.send(data);
 })
});



module.exports = router;
