const req = fetch("https: //api.nasa.gov/insight_weather/?api_key=NTzyCUaqVmvcOjgeOZxkCBNUxoDM6Jr9LuFagvkv&feedtype=json&ver=1.0")
.then(function(response){
  response.json().then(function(data){
    console.log(data);
    
})
})