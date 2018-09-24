const PubSub = require('../helpers/pub_sub.js');


const ChargerDetailsView = function(chargerListContainer, charger){
  this.chargerListContainer = chargerListContainer;
  this.charger = charger;
}

ChargerDetailsView.prototype.render =function(){
  const chargerDetails = document.createElement('div');
  const chargerLocation = this.createHeading();
  chargerDetails.appendChild(chargerLocation);
  this.chargerListContainer.appendChild(chargerDetails);
  const chargerUl = this.createChargerUl();
  this.chargerListContainer.appendChild(chargerUl);
}

ChargerDetailsView.prototype.createHeading = function(){
  const nameHeading = document.createElement('p');
  nameHeading.textContent = this.charger.commonName;
  return nameHeading;
}

ChargerDetailsView.prototype.createChargerUl = function() {
  const chargerDetailsUl = document.createElement('ul');
  this.populateUl(chargerDetailsUl);
  return chargerDetailsUl;
}

ChargerDetailsView.prototype.populateUl = function(ul) {
  const randomLi = document.createElement('li');
  randomLi.textContent = this.charger.id;
  ul.appendChild(randomLi);
}

module.exports = ChargerDetailsView;
