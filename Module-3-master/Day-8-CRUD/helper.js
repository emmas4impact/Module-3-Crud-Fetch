const url ="https://striveschool.herokuapp.com/api/agenda/"

getProduct = async () =>{
    let response = await fetch(url) //getting the response from the Api fetching
    return await response.json()   //this is returning the reuslt of the promise in an usable way
}

saveProduct = async (agendaEvent) => {
    let response = await fetch(url, {
        method :'POST', //use to save request
        body: JSON.stringify(agendaEvent), //convert over agendaEvent to string
        headers: new Headers({
            "Content-Type" : "application/json",
        }),
    });
    return response;
};