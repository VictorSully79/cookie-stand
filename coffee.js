'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
  location: "Seattle",
  minCust:23,
  maxCust:65,
  avgCookie:6.3,
  openHours: hours,
  cookiesPerHour: [],
  totalCookieSales: 0,
  
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
  seattle.totalCookieSales = cookies + seattle.totalCookieSales;
}
console.log(seattle)






 

  

var tokyo = {
  location: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  openHours: hours,
  cookiesPerHour: [],
  totalCookieSales: 0,
  
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
  tokyo.totalCookieSales = cookies + tokyo.totalCookieSales;
}

 


var dubai = {
  location: "Dubai",
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  openHours: hours,
  cookiesPerHour: [],
  totalCookieSales: 0,
  
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
  dubai.totalCookieSales = cookies + dubai.totalCookieSales;
}





var paris = {
  location: "Paris",
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  openHours: hours,
  cookiesPerHour: [],
  totalCookieSales: 0,
  
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
  paris.totalCookieSales = cookies + paris.totalCookieSales; 
}



var lima = {
  location: "Lima",
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  openHours: hours,
  cookiesPerHour: [],
  totalCookieSales: 0,
  
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
  lima.totalCookieSales = cookies + lima.totalCookieSales;
 }

 


