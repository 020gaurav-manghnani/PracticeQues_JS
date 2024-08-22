// https://dog.ceo/api/breeds/image/random

const button = document.querySelector("button");
const image = document.querySelector('img');

button.addEventListener('click' , () =>{


      const xhr = new XMLHttpRequest();
      console.log(xhr);

xhr.addEventListener('load' , ()=>{
        console.log(xhr);
      })

    
      xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
      xhr.send



})




