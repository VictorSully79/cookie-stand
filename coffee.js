'use strict';

 /* var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
 */

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores =[]

function CookieStore(locationName, minCust, maxCust, avgCookie, hours, cookiesPerHour, totalCookieSales ) {

  this.name = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.hours = hours;
  this.cookiesPerHour = cookiesPerHour;
  this.totalCookieSales = totalCookieSales;
  
};
    console.log(storeHours)
var Seattle = new CookieStore('Seattle', 23, 65, 6.3, storeHours, 1, 1);

var Lima = new CookieStore('Lima', 23, 65, 6.3, storeHours, 1, 1);
console.log(Lima)
//var paris = new CookieStore('Paris', 23, 65, 6.3, storeHours, 1, 1); 



  




 


CookieStore.prototype.generateCookiesPerHour = function () {
 
  for (var i = 0; i < 13; i++) {
  //  var cookieSales = this.generateCookiesAtHour();
  
    //this.totalCookieSales = this.totalCookieSales + cookieSales;
    //this.cookiesPerHour.push(cookieSales); 
  }
  console.log(Seattle)
}
 
CookieStore.prototype.generateCookiesAtHour = function () {
    //return Math.floor(generateStoreCustomers(this.minCust, this.maxCust) * this.avgCookie);

};

//CookieStore.prototype.displayTable = () => {
  var seattleDiv = document.getElementById('store-list5'); 
  
  var rowElement = document.createElement('tr');
  var nameElement = document.createElement('td');
  nameElement.textContent = `${Seattle.name} minCust: ${Seattle.minCust} maxCust: ${Seattle.maxCust} ${Seattle.avgCookie}`;
  rowElement.appendChild(nameElement);
  console.log(CookieStore, 'cookiestore')

  /* for (var i = 0; i < this.cookiesPerHour.length; i++) {
    var cellElement = document.createElement('td');
    cellElement.textContent = `${this.cookiesPerHour[i]}`;
    rowElement.appendChild(totalElement);

    tableElement.appendChild(rowElement);
  
  } */
  seattleDiv.appendChild(rowElement);

//};
//displayTable();
 /*  function createHeader() {
    console.log(CookieStore.Seattle, 'store seattle');
    var seattleDiv = document.getElementById('store-list5'); 
  
    var rowElement = document.createElement('tr');
    var nameElement = document.createElement('td');
    nameElement.textContent = this.name;
    rowElement.appendChild(nameElement);
    console.log(this.name)

 for (var i = 0; i < this.cookiesPerHour.length; i++) {
   var cellElement = document.createElement('td');
   cellElement.textContent = `${this.cookiesPerHour[i]}`;
   rowElement.appendChild(totalElement);

   tableElement.appendChild(rowElement);
 
 }
 seattleDiv.appendChild(tableElement);

    ///??????????///
  };
createHeader(); */

  function createFooter() {
    var totalOfTotals = 0;
    var hourlyTotal = 0;
    for (var i = 0; i < hours.length; i++) {

      for (var j = 0; j < stores.length; j++) {

        hourlyTotal += stores[j].cookiesPerHour[i];
        totalOfTotals += stores[j].cookiesPerHour[i];
      }
    }

  };

  
  
  

  stores.push(Seattle);
  
   CookieStore.prototype.generateCookiesAtHour();
  CookieStore.prototype.generateCookiesPerHour(); 
