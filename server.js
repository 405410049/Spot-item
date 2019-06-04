const bodyParser = require('body-parser');
const express = require('express');

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static('public'));

let db = null;
let collection;
async function main() {
  const DATABASE_NAME = 'data';
  const MONGO_URL = `mongodb://localhost:27017/${DATABASE_NAME}`;

  // The "process.env.MONGODB_URI" is needed to work with Heroku.
  db = await MongoClient.connect(process.env.MONGODB_URI || MONGO_URL);
  collection=db.collection('test');
  const obj={
    name:"milk",
    price:70,
    sale:60,
    expired_date:2019-06-01,
    img_url:"http://i.epochtimes.com/assets/uploads/2018/02/4f4f82c54ca99523fb9d4caa2c3e82cd-e1518177152828-600x400.jpg"
  };
  const obj2={
    name:"bread",
    price:25,
    sale:20,
    expired_date:2019-06-02,
    img_url:"https://tokyo-kitchen.icook.network/uploads/recipe/cover/194046/large_d6537ca6e737a07d.jpg"
  };
  let res=await collection.deleteMany();
//  res=await collection.insertOne(obj);
//  res=await collection.insertOne(obj2);
  // The "process.env.PORT" is needed to work with Heroku.
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Server listening on port ${port}!`);
};
main();
async function onGet(req,res)
{
  const query={
    name:'milk'
  };
 // let result=await collection.findOne(query);
  let cursor=await collection.find().toArray();
//  console.log(cursor);
  const result=JSON.stringify(cursor);
  res.json(result);
}
app.get('/product',onGet);

async function onPost(req,res)
{
  const message_body=req.body;
  console.log(message_body);
  const insert_obj={
    name:message_body['name'],
    price:message_body['price'],
    sale:message_body['sale'],
    expired_date:message_body['expired_date'],
    url:message_body['url']
  };
  res=await collection.insertOne(insert_obj);
}
app.post('/add_product',jsonParser,onPost);
// TODO(you): Add at least 1 GET route and 1 POST route.
