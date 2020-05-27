const url ="https://striveschool.herokuapp.com/api/product/"

const username ='user9'
const password = 'sP4YMKhBpqQHAPJN'
const headers =new Headers({
    "Content-Type" : "application/json",
    'Authorization': 'Basic ' + btoa(username + ":" + password),
});

getProducts = async () =>{
    let response = await fetch(url, {
        method :'GET', 
        headers: headers,
    });
    return await response.json()   //this is returning the reuslt of the promise in an usable way
}

saveProducts = async (productEvent) => {
    let response = await fetch(url, {
        method :'POST', //use to save request
        body: JSON.stringify(productEvent), //convert over agendaEvent to string
        headers: headers,
    });
    console.log(response)
    return response;
};

