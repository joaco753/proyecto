const req = fetch('https://api.nasa.gov/planetary/apod?api_key=NTzyCUaqVmvcOjgeOZxkCBNUxoDM6Jr9LuFagvkv')
.then(function(response){
response.json()
.then(function(respuesta){
    const apiprueba = document.getElementById("api1")
    apiprueba.src = respuesta.url
})

})

const apiprueba = document.getElementById("api1")
console.log(apiprueba)