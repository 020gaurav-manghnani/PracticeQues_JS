// create two fun, fetch1 and fetch2 use fetch method to fetch two diff url and using promise.all console both data

let button = document.querySelector('button')
button.addEventListener('click' , ()=>{

    const p1 = new Promise((resolve, reject)=>{
        fetch('https://restcountries.com/v3.1/all   ')
        .then(res=> res.json())
        .then((data=>{
            resolve(data)
        }))
    })
    const p2 = new Promise((resolve, reject)=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res=> res.json())
        .then((data=>{
            resolve(data);
        }))
    })

    function promiseALl(p1,p2){
        Promise.all([p1,p2]).then((values)=>{
            console.log(values)
        })
        .catch((err)=>{
            console.log(err + "errr")
        })
    }
    promiseALl(p1,p2)

        
})

// crazy.... did the needful but without creating two fucntions