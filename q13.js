let count=0;
let screen=setInterval(() => {
    console.log("Loading...");
count++;
if(count==5){
    clearInterval(screen);
}
}, 1000);
