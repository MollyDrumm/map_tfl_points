const Bike = require('./models/bikes.js')
const Charger = require('./models/chargers.js')
const AllBikesView = require('./views/all_bikes_view.js')
const AllChargersView = require('./views/all_chargers_view.js')
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded')

  const selectElement = document.querySelector('#bike-dropdown');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const listContainer = document.querySelector('#list-bikes')
  const allBikes = new AllBikesView(listContainer);
  allBikes.bindEvents();

  const ChargerListContainer = document.querySelector('#list-chargers')
  const allChargers = new AllChargersView(ChargerListContainer);
  allChargers.bindEvents();

  const bike = new Bike();
  bike.getData();
  bike.bindEvents();

  const charger = new Charger();
  charger.getData();
  
})
