const inputField = document.querySelector("#input");
const button = document.querySelector(".btn");
const para = document.querySelector(".p");
const liName = document.querySelector(".name")
const liDes = document.querySelector(".des")
const liType = document.querySelector(".type")

// const url = "https://dogapi.dog/api/v2/breeds";



button.addEventListener("click" , async (e)=>{
    if(inputField.value.length<=0){
        console.log("enter something")
    }else{
        e.preventDefault();
        const url = inputField.value;
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data.data[0])
            liName.innerHTML = data.data[0].attributes.name;
            liType.innerHTML = data.data[0].type;
            liDes.innerHTML = data.data[0].attributes.description;
            
        } catch(error){
            console.log(error)
        }
    }
})

