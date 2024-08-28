const head = document.querySelector('.heading');
const button = document.querySelector('.btn')

const arr = ["g", "a", "u" ,"r" , "a" , "v"]


button.addEventListener('click',()=>{

    for(let i=0;i<arr.length;i++){
        head.innerHTML = arr[i];
    }
})