new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
    }, 1000);
    resolve();
})
.then(() =>{
    setTimeout(() => {
        console.log(3);
    }, 2000);
})




       