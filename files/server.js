const fs  = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'start.txt'),'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});

fs.writeFile(path.join(__dirname,'newFile.txt'),'this is new  file',(err)=>{
    if(err) throw err;
    console.log('created new file');
});

process.on('UncaughtException', function(err) {
    console.log(`there was an uncaught exception : ${err} `)
    process.exit(1);
})