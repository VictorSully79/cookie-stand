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

 
 var storeList = document.getElementById("store-list")
 var unorderedList = document.createElement('ul')

for (var i =0; i < hours.length; i ++) {
  var listItem = document.createElement('li')
  listItem.innerText = hours[i] + ":" + lima.cookiesPerHour[i]
  unorderedList.appendChild(listItem)
}

  storeList.appendChild(unorderedList)
  
  var limaHeader = document.getElementById("lima-header")
  limaHeader.innerText = "Lima:"

  var limaTotalSales = document.createElement('li')
limaTotalSales.innerText = 'Total: ' + lima.totalCookieSales
unorderedList.appendChild(limaTotalSales)
  
 

////

var parisList = document.getElementById("store-list2")
var unorderedListThree = document.createElement('ul')

for (var i =0; i < hours.length; i ++) {
  var listItem2 = document.createElement('li')
  listItem2.innerText = hours[i] + ":" + paris.cookiesPerHour[i]
  unorderedListThree.appendChild(listItem2)
}

  parisList.appendChild(unorderedListThree)
  var parisHeader = document.getElementById('paris-header')
  parisHeader.innerText = 'Paris:'

  var parisTotalSales = document.createElement('li')
parisTotalSales.innerText = 'Total: ' + paris.totalCookieSales
unorderedListThree.appendChild(parisTotalSales)


  ///
var dubaiList = document.getElementById("store-list3")
var unorderedListTwo = document.createElement('ul')

for (var i =0; i < hours.length; i ++) {
  var listItem3 = document.createElement('li')
  listItem3.innerText = hours[i] + ":" + dubai.cookiesPerHour[i]
  unorderedListTwo.appendChild(listItem3)
}

  dubaiList.appendChild(unorderedListTwo)
  var dubaiHeader = document.getElementById('dubai-header')
  dubaiHeader.innerText = 'Dubai:'

  var dubaiTotalSales = document.createElement('li')
dubaiTotalSales.innerText = 'Total: ' + dubai.totalCookieSales
unorderedListTwo.appendChild(dubaiTotalSales)


  ///

var tokyoList = document.getElementById("store-list4")
var unorderedListFour = document.createElement('ul')

for (var i =0; i < hours.length; i ++) {
  var listItem4 = document.createElement('li')
  listItem4.innerText = hours[i] + ":" + tokyo.cookiesPerHour[i]
  unorderedListFour.appendChild(listItem4)
}

  tokyoList.appendChild(unorderedListFour)
  var tokyoHeader = document.getElementById('tokyo-header')
  tokyoHeader.innerText = 'Tokyo:'

  var tokyoTotalSales = document.createElement('li')
  tokyoTotalSales.innerText = 'Total: ' + tokyo.totalCookieSales
  unorderedListFour.appendChild(tokyoTotalSales)


  ///

var seattleList = document.getElementById("store-list5")
var unorderedListFive = document.createElement('ul')

for (var i =0; i < hours.length; i ++) {
  var listItem5 = document.createElement('li')
  listItem5.innerText = hours[i] + ":" + seattle.cookiesPerHour[i]
  unorderedListFive.appendChild(listItem5)
}

  seattleList.appendChild(unorderedListFive)
  var seattleHeader = document.getElementById('seattle-header')
  seattleHeader.innerText = 'Seattle:'

///

var seattleTotalSales = document.createElement('li')
seattleTotalSales.innerText = 'Total: ' + seattle.totalCookieSales
unorderedListFive.appendChild(seattleTotalSales)