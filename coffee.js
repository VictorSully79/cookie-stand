'use strict';

var cookieShop = {
  location: 'Seattle',
  customers: null,
  hours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  sales: null,

  generateSales: function (salesEstimate) {
    
    var seattleSales = Math.floor((Math.random() * 10) + 1);
    console.log(seattleSales)
    this.customers = seattleSales;
  },
}