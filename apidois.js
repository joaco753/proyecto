const req = fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=XauDLBr0lzYoNFSZF9fVUbDSHElAwF8J3i2kWLN9")
.then(function(response){
  response.json().then(function(data){
    console.log(data);
      const img1 = document.getElementById("api1")
      const img2 = document.getElementById("api2")
      const img3 = document.getElementById("api3")

      img1.src = data.photos[0].img_src
      img2.src = data.photos[1].img_src
      img3.src = data.photos[2].img_src
      
  })
})

