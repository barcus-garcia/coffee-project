"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee col-6">';
    html += '<div class="card text-white mb-3">';
    html += '<div class="card-body title-opaque">'
    html += '<h5 class="card-title">' + coffee.name + '</h5>';
    html += '<p class="card-text">' + coffee.roast + '</p>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if(selectedRoast === "All Roast") {
            filteredCoffees.push(coffee);
        }
    });
    selection.innerHTML = renderCoffees(filteredCoffees);
}

function matchedName (e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedR = searchbar.value;
    var selectedT = roastSelection.value
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if ((coffee.name.toLowerCase()).includes(selectedR.toLowerCase())) {
            filteredCoffees.push(coffee);
        } else if ((coffee.roast.toLowerCase()).includes(selectedR.toLowerCase())) {
            filteredCoffees.push(coffee);
        } else if(selectedT.value === '') {
            filteredCoffees.push(coffee);
        }
    });
    selection.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'Light'},
    {id: 2, name: 'Half City', roast: 'Light'},
    {id: 3, name: 'Cinnamon', roast: 'Light'},
    {id: 4, name: 'City', roast: 'Medium'},
    {id: 5, name: 'American', roast: 'Medium'},
    {id: 6, name: 'Breakfast', roast: 'Medium'},
    {id: 7, name: 'High', roast: 'Dark'},
    {id: 8, name: 'Continental', roast: 'Dark'},
    {id: 9, name: 'New Orleans', roast: 'Dark'},
    {id: 10, name: 'European', roast: 'Dark'},
    {id: 11, name: 'Espresso', roast: 'Dark'},
    {id: 12, name: 'Viennese', roast: 'Dark'},
    {id: 13, name: 'Italian', roast: 'Dark'},
    {id: 14, name: 'French', roast: 'Dark'},
];

function addCoffees () {
    var adding = {};
    adding.id = coffees.length + 1;
    adding.name = document.querySelector('#input-name').value;
    adding.roast = document.querySelector('#input-roast').value;
    coffees.push(adding);
    localStorage.setItem("coffees", JSON.stringify(coffees));

}
var updatedlist = localStorage.getItem("coffees");
var updatedcoffee = JSON.parse(updatedlist);



var selection = document.querySelector('#coffee-list');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchbar = document.querySelector('#search');


selection.innerHTML = renderCoffees(updatedcoffee);
console.log(updatedcoffee)

submitButton.addEventListener('change', updateCoffees);
searchbar.addEventListener('keyup', matchedName);

var addCoffeeButton = document.querySelector('#add-coffee');
addCoffeeButton.addEventListener('click', addCoffees);