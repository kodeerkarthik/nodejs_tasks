var file=require('fs');
file.readFile('./kk.txt', 'utf-8', (err,data)=>{
        err="file does not found";
        if(err)
        console.log('error: ', err);
    });