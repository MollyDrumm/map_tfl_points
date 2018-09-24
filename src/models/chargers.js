const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')

const Charger = function(){
this.chargers = null;
this.chargersData = null;
}

Charger.prototype.getData = function() {
  const request = new Request('https://api.tfl.gov.uk/Place/Type/ChargeStation,ChargeConnector');
  request.get((data) => {
    this.chargers = data;
    PubSub.publish('Charger:chargers-loaded', this.chargers);
    console.log(this.chargers)
  })
}
module.exports = Charger;
