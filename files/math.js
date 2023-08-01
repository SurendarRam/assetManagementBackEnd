const express=require('express');
const app=express();

app.get('/',(req, res) => {
    res.send('hey it is express............*&^')
})

app.listen(3005);