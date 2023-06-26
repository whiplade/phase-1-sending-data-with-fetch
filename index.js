const formData = {
    name: 'Steve',
    email: 'steve@steve.com',
}

function submitData() {

    return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {"Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(formData)
    })

    .then(res => res.json())
    .then(object => {
        document.body.innerHTML = object.id
        console.log(object)
    })
        
    .catch(error => {
        document.body.innerHTML = error.message
        console.log(error)
    
    })
    
};

submitData()