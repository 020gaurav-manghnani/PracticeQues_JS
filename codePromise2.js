// create promise that resolves after 1 second and logs "promise resolved" to console

const p = new Promise((resolve , reject)=>{

    setTimeout(()=>{

        console.log(resolve("promise resolved"));
    },1000)
})