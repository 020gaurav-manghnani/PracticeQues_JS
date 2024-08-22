// await when used before fetch api, waits for the api response and then proceeds further step in the code written below api call

async function makeFetchcall (){
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    const response = await fetch(url)
    console.log(response);
    console.log("heyyyyyyyyy"); 
}
makeFetchcall();
