function countDown(){
    let inputValue = parseInt(document.getElementById("ip").value);

    if(isNaN(inputValue) || inputValue<0){
        alert("enter correct value");
    }

    let countDisplay = document.getElementById("p");
    countDisplay.textContent = '';

    let interval = setInterval(function(){
        countDisplay.textContent = inputValue;
        inputValue--

        if(inputValue < 0){
            clearInterval(interval)
            countDisplay.textContent = "Its, over";
        }
    },1000)
}