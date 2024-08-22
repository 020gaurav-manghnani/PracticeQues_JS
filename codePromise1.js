// create a function using promise which fetches an api and takes a boolean parameter
// if true, resolve the promise and show api data
// if false , reject and console error
// https://dog.ceo/api/breeds/image/random


let button = document.querySelector("button");
button.addEventListener('click' , ()=>{

    let fetchData = function(shouldSucceed){

        const p = new Promise((resolve , reject)=>{
            if(shouldSucceed === true){
                resolve(fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(json => console.log(json)))
            }
            else{
                reject("Got rejected")
            }
    
        })
        p.then(()=>{
    
            console.log("data fetched from API")
        })  .catch((err)=>{
    
            console.log(err)
        }) .finally(()=>{
            console.log("nonsense")
        })
    }
     fetchData(true);
})


