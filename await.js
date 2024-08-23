// await when used before fetch api, waits for the api response and then proceeds further step in the code written below api call

// https://dog.ceo/api/breeds/image/random 

//case 1

// is case me jaha we are not using aysn await... so "Hi" is printing first because js thread
//  is not waiting for the response and moving on further to print HI

// function makeRequest(){
//     setInterval(()=>{
//         fetch('https://dog.ceo/api/breeds/image/random ')
//         .then((res)=>res.json()).then((data)=>{
//             console.log(data)
//         })
//     },3000)
//     console.log("hi")
// }

// makeRequest()

//CASE 2

 async function makeRequest(){
    const url = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url)
    setInterval(()=>{
        console.log(response);
    },3000)
    console.log("hi")
}

// makeRequest()