let button = document.querySelector('button');
let para = document.querySelector('p');



let httpRequest = function(method , url , callback ){

button.addEventListener('click' , ()=>{

      const xhr = new XMLHttpRequest();
      callback(xhr)
      callback(xhr.response.message);

      xhr.open(method , url);
            xhr.send();
})
      
}

httpRequest('GET' , 'https://dog.ceo/api/breeds/image/random' , (data)=>{
console.log(data);
})
