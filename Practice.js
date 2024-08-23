const resolveBtn = document.querySelector('.resolve');
const container = document.querySelector('.container');
const img = document.querySelector('img');
// https://dog.ceo/api/breeds/image/random

const p = new Promise((resolve , reject)=>{

    resolveBtn.addEventListener('click' , ()=>{
        resolve(fetch('https://dog.ceo/api/breeds/image/random')
        .then(res=> res.json())
        .then((data=>{
           let url = data.message
           img.src = url
        })))
        container.append(img)

    })

p.then(()=>{
    resolve("promise resolved")
}) .catch(()=>{
    reject('promise rejected');
})

})
