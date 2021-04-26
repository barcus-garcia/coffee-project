"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    /*html += '<div>' + coffee.id + '</div>';*/
    html += '<h5>' + coffee.name + '</h5>';
    html += '<p>' + coffee.roast + '</p>';
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

var selection = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchbar = document.querySelector('#search');

selection.innerHTML = renderCoffees(coffees);


submitButton.addEventListener('change', updateCoffees);
searchbar.addEventListener('keyup', matchedName);