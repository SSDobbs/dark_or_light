//days until National Star Wars Day May 4th
let today = new Date();
var swday = new Date(today.getFullYear(), 4, 3);
if (today.getMonth() == 4 && today.getDate() > 3) {
    swday.setFullYear(swday.getFullYear() + 1);
}
var one_day = 1000 * 60 * 60 * 24;
document.getElementById("swday").innerHTML = (Math.ceil((swday.getTime() - today.getTime()) / (one_day)) +
    " days until National Star Wars Day!");



fetch('/movies.json')
    .then((response) => {
        return response.json()
    })
    .then((res) => {
        let moviesList = document.querySelector('#movie');
        for (let i = 0; i < res.movies.length; i++) {
            let movie = document.createElement('p');
            movie.innerHTML = `<img src= '../${res.movies [i].poster}'><br>`;
            movie.innerHTML += `<h3>${res.movies[ i ].title}</h3>`;
            let castList = '<ul>';
            res.movies[i].main_characters.forEach((character) => {
                castList += `<li>${character}</li>`;
            })
            castList += '</ul>'
            movie.innerHTML += ` Cast: ${castList} <br>`;
            movies.appendChild(movie);
        }
    });

let starWarsPeopleList = document.querySelector('#characters');
fetch('https://swapi.dev/api/people')
    .then(function (res) {
        return res.json();
    })
    .then(function (json) {
        let people = json.results;
        let p = people;
        for (p of people) {
            let listItem = document.createElement('p');
            listItem.innerHTML = '<p>' + p.name + '</p>';
            starWarsPeopleList.appendChild(listItem);
        }
    });

let starWarsVehicleList = document.querySelector('#vehicles');
fetch('https://swapi.dev/api/vehicles/')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        let people = json.results;
        let p = people;

        for (p of people) {
            let listItem = document.createElement('p');
            listItem.innerHTML = '<p>' + p.name + '</p>';
            starWarsVehicleList.appendChild(listItem);
        }
    });

let starWarsPlanetList = document.querySelector('#planets');
fetch('https://swapi.dev/api/planets')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        let people = json.results;
        let p = people;

        for (p of people) {
            let listItem = document.createElement('p');
            listItem.innerHTML = '<p>' + p.name + '</p>';
            starWarsPlanetList.appendChild(listItem);
        }
    });
