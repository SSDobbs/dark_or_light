

//character list
let starWarsPeopleList = document.querySelector('#characters');

fetch('https://swapi.dev/api/people')
.then(function(res) {   
  return res.json(); 
})
.then(function(json) {
  let people = json.results; 
  let p = people;

  for(p of people) {
    let listItem = document.createElement('li'); 
    listItem.innerHTML = '<p>' + p.name + '</p>'; 
    starWarsPeopleList.appendChild(listItem);  
  }
});


//planet list
let starWarsPlanetList = document.querySelector('#planets');

fetch('https://swapi.dev/api/planets') 
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
  let people = json.results; 
  let p = people;

  for(p of people) {
    let listItem = document.createElement('li'); 
    listItem.innerHTML = '<p>' + p.name + '</p>'; 
    starWarsPlanetList.appendChild(listItem);  
  }
});


//vehicle list
let starWarsVehicleList = document.querySelector('#vehicles');

fetch('https://swapi.dev/api/vehicles/') 
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
  let people = json.results; 
  let p = people;

  for(p of people) {
    let listItem = document.createElement('li'); 
    listItem.innerHTML = '<p>' + p.name + '</p>'; 
    starWarsVehicleList.appendChild(listItem);  
  }
});




