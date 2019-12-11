let fs = require('fs');
let readLine =  require('readline');


// let stream = fs.createReadStream('new.csv','utf-8',()=>{});

// let writeStream1 = fs.createWriteStream('file.txt','utf-8');
// stream.pipe(writeStream1);

// stream.on('end',()=>{
//     console.log('it ends here read');
// })

// writeStream1.on('finish',()=>{
//     console.log('it ends here write');
// })






let writeStream = fs.createWriteStream('file.txt',{start: 0});
let file = fs.createReadStream('new.csv','utf-8');

let readline = readLine.createInterface(
    {
        input:file,
        terminal:false
    }
)
let count=1;
readline.on('line',((line)=>{
    writeStream.write(`line ${count++} => ${line} \n`);
}))
readline.on('error',((err)=>{
    console.log(err);
}))

