let button = document.querySelector('button');
let image = document.querySelector('img');

button.addEventListener('click' , ()=>{

    fetch('https://dog.ceo/api/breeds/image/random' , {
        method : 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        image.src = data.message;
    })

})

