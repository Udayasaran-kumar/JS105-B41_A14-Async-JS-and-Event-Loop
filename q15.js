var time=prompt(); 
let program =setInterval(() => { console.log( time--); 
    if(time==0){
        clearInterval(program);
    }
    let key =prompt();
    if(key=="s"){
        setTimeout(()=>{clearInterval(program)},1000)
    }
}, 1000); 
