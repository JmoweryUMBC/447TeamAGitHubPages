export default class APIServices{
static SearchHash(Hash){
    return fetch(`http://localhost:5000/VTSearch/${Hash}`,{
        'method': 'POST', 
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(Hash)
    })
    }


static DBSearchHash(Hash){
    return fetch(`http://localhost:5000/DBSearch/${Hash}`,{
        'method': 'POST', 
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(Hash)
    })
    }
}   
