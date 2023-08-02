const {postMethod, getInput}=require('./controller')
const {getMethod}=require('./controller')
const {putMethod}=require('./controller')
const {deleteMethod,practicePut,loginInput}=require('./controller')
const express = require('express');
const cors = require('cors');
const router=express.Router();
const app = express();
app.use(express.json());
const corsConfig = {
      credentials: true,
      origin: true,
    };
    app.use(cors(corsConfig));
const courses = [
    {id:1,name:"course1"},
    {id:2,name:"course2"},
    {id:3,name:"course3"}

];

// async function getData(){
//     let result = await client.connect();
//     db= result.db(databaseName);
//     collection = db.collection('sample');
//     let data = await collection.find({}).toArray();
// console.log(data)
//     return data;


// }
app.use('/api',router.post('/courses',postMethod))


app.use('/api',router.get('/get',getMethod))

app.use('/api',router.post('/courses/post/:id',putMethod))

app.use('/api',router.delete('/courses/delete/:id',deleteMethod))

app.use('/api',router.patch('/courses/put/:id',practicePut))

app.use('/api',router.post('/post/login',loginInput))

app.use('/api',router.post('/values/login',getInput))


// getData();
// var cors = require('cors');
// app.use(cors());
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Set to '*' to allow requests from any origin
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
//   });

app.listen(4000,()=>{
    console.log("port 4000")
    
})


