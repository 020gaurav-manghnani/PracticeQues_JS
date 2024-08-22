const resolveBtn = document.querySelector('button')
const rejectBtn = document.querySelector('#rejectButton')

// takes two parameter resolve and reject
const p = new Promise((resolve, reject)=>{

 
    resolveBtn.addEventListener('click' , ()=>{
        // by giving "resolve" keyword it will resolve the promise and will directly go to "then"
        resolve("solved");
        
    })
    rejectBtn.addEventListener('click' , ()=>{

         // by giving "reject" keyword it will resolve the promise and will directly go to "catch"
        reject("promise rejected");
    })
})

// data is the value we are passing in the console log above in "reject" and "resolve"
p.then((data)=>{
    console.log(data);
}) .catch((err)=>{
    console.log(err)
}) . finally(()=>{
    console.log('finally')  // finally will anyhow print, either its calling resolve or reject, again all the three then, catch and finally are optional.. without giving them also we can solve or reject our promsie
})