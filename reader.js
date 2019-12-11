process.stdin.resume();
process.stdin.setEncoding('utf8');

let a =  process.stdin;
console.log('\n'+`---Type 'end' to terminate---`);
a.on('data',(val)=>{
    if(val.trim() === "end"){
        process.exit();
    }else{
        console.log(val.toString().trim().split('').reverse().join(''));
    }
});

a.on('pause',()=>{
    console.log('pause here');
})

a.on('end',()=>{
        console.log('ending here');
    })

a.on("error", (error)=> {
    console.log(error.message); 
});

//process.stdin.pipe(process.stdout)
