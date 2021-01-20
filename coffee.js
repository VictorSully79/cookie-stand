'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
  location: "Seattle",
  minCust:23,
  maxCust:65,
  avgCookie:6.3,
  cookiesPerHour: [],
  
  generateSales: function() {
    
    var randomSales = Math.floor((Math.random() * ((this.maxCust - this.minCust)+1) + this.minCust));
    console.log('this is randomSales ' + randomSales);
    var estimatedSales = Math.round(randomSales * this.avgCookie);
    console.log('this is estimatedSales ' + estimatedSales);
    
    return estimatedSales;
  }, 
}

for (var i =0; i < hours.length; i ++) {
  var cookies = seattle.generateSales();
  seattle.cookiesPerHour.push(cookies);
}
function generateCustomers(store) {
  Math.floor(Math.random() * (store.maxCust - store.minCust + 1)) + store.minCust;
}

generateCustomers(store); 



var tokyo = {
  location: "Tokyo",
  minCust:3,
  maxCust:24,
  avgCookie:1.2,
  cookiesPerHour: [],
  
  generateSales: function() {
    
    var randomSales = Math.floor((Math.random() * ((this.maxCust - this.minCust)+1) + this.minCust));
    console.log('this is randomSales ' + randomSales);
    var estimatedSales = Math.round(randomSales * this.avgCookie);
    console.log('this is estimatedSales ' + estimatedSales);
    
    return estimatedSales;
  }, 
}

for (var i =0; i < hours.length; i ++) {
  var cookies = tokyo.generateSales();
  tokyo.cookiesPerHour.push(cookies);
}
function generateCustomers(store) {
  Math.floor(Math.random() * (store.maxCust - store.minCust + 1)) + store.minCust;
}

generateCustomers(store); 


var dubai = {
  location: "Dubai",
  minCust:3,
  maxCust:24,
  avgCookie:1.2,
  cookiesPerHour: [],
  
  generateSales: function() {
    
    var randomSales = Math.floor((Math.random() * ((this.maxCust - this.minCust)+1) + this.minCust));
    console.log('this is randomSales ' + randomSales);
    var estimatedSales = Math.round(randomSales * this.avgCookie);
    console.log('this is estimatedSales ' + estimatedSales);
    
    return estimatedSales;
  }, 
}

for (var i =0; i < hours.length; i ++) {
  var cookies = dubai.generateSales();
  dubai.cookiesPerHour.push(cookies);
}
function generateCustomers(store) {
  Math.floor(Math.random() * (store.maxCust - store.minCust + 1)) + store.minCust;
}

generateCustomers(store); 


var paris = {
  location: "Paris",
  minCust:3,
  maxCust:24,
  avgCookie:1.2,
  cookiesPerHour: [],
  
  generateSales: function() {
    
    var randomSales = Math.floor((Math.random() * ((this.maxCust - this.minCust)+1) + this.minCust));
    console.log('this is randomSales ' + randomSales);
    var estimatedSales = Math.round(randomSales * this.avgCookie);
    console.log('this is estimatedSales ' + estimatedSales);
    
    return estimatedSales;
  }, 
}

for (var i =0; i < hours.length; i ++) {
  var cookies = paris.generateSales();
  paris.cookiesPerHour.push(cookies);
}
function generateCustomers(store) {
  Math.floor(Math.random() * (store.maxCust - store.minCust + 1)) + store.minCust;
}

generateCustomers(store); 


var lima = {
  location: "Laris",
  minCust:3,
  maxCust:24,
  avgCookie:1.2,
  cookiesPerHour: [],
  
  generateSales: function() {
    
    var randomSales = Math.floor((Math.random() * ((this.maxCust - this.minCust)+1) + this.minCust));
    console.log('this is randomSales ' + randomSales);
    var estimatedSales = Math.round(randomSales * this.avgCookie);
    console.log('this is estimatedSales ' + estimatedSales);
    
    return estimatedSales;
  }, 
}

for (var i =0; i < hours.length; i ++) {
  var cookies = lima.generateSales();
  lima.cookiesPerHour.push(cookies);
}
function generateCustomers(store) {
  Math.floor(Math.random() * (store.maxCust - store.minCust + 1)) + store.minCust;
}

generateCustomers(store); 