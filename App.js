var a=require('http');
const b=a.createServer((req,res)=>{
    res.setHeader('content-type','text/html');
    res.write('<html><head><title>Weklcome</title></head><body><h1>Hii Chiru <br> Welcome</h1></body></html>')
    res.end();
})
b.listen(3002,function(){
    console.log("hii Chiru")
});




// const file1 = require('fs');
// var file = require('fs');
    
// file.writeFile('newfile.txt', 'utf-8', (err,data)=>{
//     if(err) throw err;
//     console.log('file created successfully');
// })
// file.createFile('./kk.txt', 'utf-8', (err,data)=>{
//     data="hello how are you";
// });
// file.createFile('./kk.txt', 'utf-8', (err,data)=>{
//     data="hello how are you";
//     console.log('data: ', data);
// });

