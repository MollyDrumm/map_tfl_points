const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')
const ChargerDetailsView = require('../views/chargers_details_view.js')

const AllChargersView = function(container) {
  this.container = container;
  this.chargers = [];
}

AllChargersView.prototype.bindEvents = function(){
  PubSub.subscribe('Charger:chargers-loaded', (event) => {
    this.chargers = event.detail;
    console.log(this.chargers);
    this.render();
  })
}

AllChargersView.prototype.render = function(){
  this.chargers.forEach(charger => {
    const chargerDetailsView = new ChargerDetailsView(this.container, charger);
    chargerDetailsView.render();
    // console.log(bike)
  })
}

module.exports = AllChargersView;
