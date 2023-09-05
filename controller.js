const { MongoClient } = require('mongodb')
const url = 'mongodb://127.0.0.1:27017';
const databaseName = 'storage'
const client = new MongoClient(url);
let { ObjectId } = require('mongodb');

exports.postMethod = async (req, res) => {
    let result = await client.connect();
    db = result.db(databaseName);
    collection = db.collection('sampleStorage');
    let data = await collection.insertOne(req.body);

    let datas = await collection.find({}).toArray();

    res.send(datas)



}

exports.getMethod = async (req, res) => {
    let result = await client.connect();
    db = result.db(databaseName);
    collection = db.collection('sampleStorage');
    let data = await collection.find({}).toArray();

    res.status(200).send(data)
}
exports.putMethod = async (req, res) => {
    let result = await client.connect();
    db = result.db(databaseName);
    collection = db.collection('sampleStorage');
    let data = await collection.findOneAndUpdate(
        { "_id": new ObjectId(req.params.id) },
        { $set: { "name": req.body.name } },
    )

    res.send(data)

}

exports.deleteMethod = async (req, res) => {
    let result = await client.connect();
    db = result.db(databaseName);
    collection = db.collection('sampleStorage');
    let data = await collection.deleteOne({ "_id": new ObjectId(req.params.id) })

    let datas = await collection.find({}).toArray();

    res.send(datas)
}


exports.practicePut = async (req, res) => {
    let result = await client.connect();
    db = result.db(databaseName);
    collection = db.collection('sampleStorage');
    let data = await collection.findOneAndUpdate(
        { "_id": new ObjectId(req.params.id) },
        { $set: { "name": req.body.name, "type": req.body.type, "issueDate": req.body.issueDate } },
    )

    res.send(data)

}
//new
exports.loginInput = async (req, res) => {
    let result = await client.connect();
    db = result.db(databaseName);
    collection = db.collection('loginStorage');
    let data = await collection.insertOne(req.body);

    let datas = await collection.find({}).toArray();

    res.send(datas)
}

exports.getInput = async (req, res) => {
    let result = await client.connect();
    db = result.db(databaseName);
    collection = db.collection('loginStorage');
    let data = await collection.findOne({ email: req.body.username });
    if (data.email === req.body.username && data.password === req.body.password) {
        res.status(200).send("Successfully logged in")
    }
    else {
        res.status(401).send("login failed")
    }

}

exports.getUserValues = async (req, res) => {
    let result = await client.connect();
    db = result.db(databaseName);
    collection = db.collection('loginStorage');
    let data = await collection.insertOne(req.body);

    let datas = await collection.find({}).toArray();

    res.send(datas)
}

exports.postPreferences = async (req, res) => {
    // console.log('req-data=', req.body.datas)
    let result = await client.connect();
    db = result.db(databaseName);
    collection = db.collection('preferences');
    // let vall = await collection.insertOne({"_id" :"64e341c3541aae591fd739ef",'datas':[]});
    const existingDocument = await collection.findOne({"_id": "64e341c3541aae591fd739ef"});
    // let data = await collection.findOneAndUpdate(
    //     {"_id" :"64e341c3541aae591fd739ef"},
    //     { $set: {datas:req.body.datas} },
    //   );
    if (!existingDocument) {
        await collection.insertOne({
            "_id": "64e341c3541aae591fd739ef",
            "datas": []
          }),
        await collection.updateOne(
          { "_id": "64e341c3541aae591fd739ef" },
          { $set: { datas: req.body.datas } }
        );
      } else {
        await collection.updateOne(
            { "_id": "64e341c3541aae591fd739ef" },
            { $set: { datas: req.body.datas } }
          );
    }
    //   console.log(collection)

    let datas = await collection.find({}).toArray();

    res.send(datas)
}
exports.getPreferences = async (req, res) => {
    let result = await client.connect();
    db = result.db(databaseName);
    collection = db.collection('preferences');
    let data = await collection.find({}).toArray();
    res.status(200).send(data)
}

exports.deleteGroup = async (req, res) => {
    let result = await client.connect();
    db = result.db(databaseName);
    collection = db.collection('preferences');
    let data = await collection.deleteMany({})

    let datas = await collection.find({}).toArray();

    res.send(datas)
}


exports.postFilterPreferences = async (req, res) => {
    console.log('req-filter-data=', req.body.filters)
    let result = await client.connect();
    db = result.db(databaseName);
    collection = db.collection('filters');
    // let vall = await collection.insertOne({"_id" :"64e341c3541aae591fd739ef",'datas':[]});
    const existingDocument = await collection.findOne({"_id": "64e341c3541aae591fd739eg"});
    // let data = await collection.findOneAndUpdate(
    //     {"_id" :"64e341c3541aae591fd739ef"},
    //     { $set: {datas:req.body.datas} },
    //   );
    if (!existingDocument) {
        await collection.insertOne({
            "_id": "64e341c3541aae591fd739eg",
            "filters": []
          }),
        await collection.updateOne(
          { "_id": "64e341c3541aae591fd739eg" },
          { $set: { filters: req.body.filters } }
        );
      } else {
        await collection.updateOne(
            { "_id": "64e341c3541aae591fd739eg" },
            { $set: { filters: req.body.filters } }
          );
    }
    //   console.log(collection)

    let filters = await collection.find({}).toArray();

    res.send(filters)
}
exports.getFilterPreferences = async (req, res) => {
    let result = await client.connect();
    db = result.db(databaseName);
    collection = db.collection('filters');
    let data = await collection.find({}).toArray();
    res.status(200).send(data)
}