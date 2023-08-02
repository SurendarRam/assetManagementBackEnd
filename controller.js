const {MongoClient} = require('mongodb')
const url= 'mongodb://127.0.0.1:27017';
const databaseName='storage'
const client= new MongoClient(url);
let {ObjectId} = require('mongodb');

 exports.postMethod=async (req,res)=>{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('sampleStorage');
    let data = await collection.insertOne(req.body);
    
    let datas = await collection.find({}).toArray();

res.send(datas)



}

exports.getMethod=async (req,res)=>{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('sampleStorage');
    let data = await collection.find({}).toArray();

    res.status(200).send(data)
}
exports.putMethod=async (req,res)=>{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('sampleStorage');
    let data = await collection.findOneAndUpdate(
    { "_id" : new ObjectId(req.params.id)},
    { $set: { "name" : req.body.name}},
 )

res.send(data)

}

exports.deleteMethod=async (req,res)=>{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('sampleStorage');
    let data = await collection.deleteOne({ "_id" : new ObjectId(req.params.id)})

let datas = await collection.find({}).toArray();

res.send(datas)
}


exports.practicePut=async (req,res)=>{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('sampleStorage');
    let data = await collection.findOneAndUpdate(
    { "_id" : new ObjectId(req.params.id)},
    { $set: { "name" : req.body.name,"type":req.body.type,"issueDate":req.body.issueDate}},
 )

res.send(data)

}
//new
exports.loginInput =async (req,res)=>{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('loginStorage');
    let data = await collection.insertOne(req.body);
    
    let datas = await collection.find({}).toArray();

res.send(datas)
}

exports.getInput=async (req,res)=>{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('loginStorage');
    let data = await collection.find({}).toArray();
    
    if(data[0].username===req.body.username && data[0].password===req.body.password){
        res.status(200).send("Successfully logged in")
    }
    else{
        res.status(401).send("login failed")
    }
    
}