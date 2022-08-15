$(document).ready(function () {
  let servicesOpen = false;
  let openAvailability = false;
  let openPriceSection = false;
  let largeMediumDisplay = true;
  // Setting color and font for icons
  document.getElementsByClassName('smallIcon')[0].style.color = 'gray';
  document.getElementsByClassName('barsIcon')[0].style.color = 'gray';
  document.getElementsByClassName('largeIcon')[0].style.color = 'black';
  document.getElementById('products').style.fontWeight = 'bold';

  // Hide Other Services other than Products
  document.getElementById('trainingServices').style.display = 'none';
  document.getElementById('daycareServices').style.display = 'none';
  document.getElementById('groomingServices').style.display = 'none';

  const closeServices = () => {
    //Closing services accordian
    if (servicesOpen) {
      document.getElementById('services').style.height = '0px';
      document.getElementById('services').style.transition = 'opacity 0.5s ease, height 1s ease';
      document.getElementById('services').style.opacity = '0';
      document.getElementById('services').style.marginTop = 'none';
      document.getElementById('services').style.visibility = 'hidden';
      servicesOpen = false;
    }
  }

  const closeAvailability = () => {
    //Closing product availability accordian
    if (openAvailability) {
      document.getElementById('availablityOptions').style.height = '0px';
      document.getElementById('availablityOptions').style.transition = 'opacity 0.5s ease, height 1s ease';
      document.getElementById('availablityOptions').style.opacity = '0';
      document.getElementById('availablityOptions').style.marginTop = 'none';
      document.getElementById('availablityOptions').style.visibility = 'hidden';
      openAvailability = false;
    }
  }

  const closePrices = () => {
    //Closing product price accordian
    if (openPriceSection) {
      document.getElementById('productPriceSection').style.height = '0px';
      document.getElementById('productPriceSection').style.transition = 'opacity 0.5s ease, height 1s ease';
      document.getElementById('productPriceSection').style.opacity = '0';
      document.getElementById('productPriceSection').style.marginTop = 'none';
      document.getElementById('productPriceSection').style.visibility = 'hidden';
      openPriceSection = false;
    }
  }
  $('.largeIcon').click(function () {
    // Setting width and border for Images
    largeMediumDisplay = true;
    var elements = document.getElementsByClassName("dogFoodImage");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.width = (560 + "px");
      elements[i].style.height = (400 + "px");

      elements[i].style.borderRadius = (10 + "px");
    }
    // Setting width and display for Images div
    var petFoodDetails = document.getElementsByClassName("petFoodDetails");
    for (var i = 0; i < elements.length; i++) {
      petFoodDetails[i].style.width = (0 + "px");
      petFoodDetails[i].style.display = ("grid");
      petFoodDetails[i].style.marginBottom = ("15px");
    }
    // Setting margin for Food Item Name
    var foodItemName = document.getElementsByClassName("foodItemName");
    for (var i = 0; i < elements.length; i++) {
      foodItemName[i].style.margin = "0px";
    }
    // Setting margin for Food Item Price
    var foodItemCost = document.getElementsByClassName("foodItemCost");
    for (var i = 0; i < elements.length; i++) {
      foodItemCost[i].style.margin = "0px";
    }
    // Setting display, width for Food Items Section
    document.getElementById('foodProducts').style.gridTemplateColumns = '565px auto';
    document.getElementById('foodProducts').style.gridColumnGap = '30px';
    document.getElementById('foodProducts').style.display = 'grid';
    document.getElementById('foodProducts').style.width = 'auto';
    document.getElementById('iconSection').style.width = '1150px';
    document.getElementsByClassName('barsIcon')[0].style.color = 'gray';
    document.getElementsByClassName('largeIcon')[0].style.color = 'black';
    document.getElementsByClassName('smallIcon')[0].style.color = 'gray';
  })
  $('.smallIcon').click(function () {
    // Setting width and border for Images
    largeMediumDisplay = true;
    var elements = document.getElementsByClassName("dogFoodImage");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.width = (265 + "px");
      elements[i].style.height = (265 + "px");
    }
    // Setting width and display for Images div
    var petFoodDetails = document.getElementsByClassName("petFoodDetails");
    for (var i = 0; i < elements.length; i++) {
      petFoodDetails[i].style.display = ("grid");
      petFoodDetails[i].style.marginBottom = ("15px");
    }
    // Setting margin for Food Item Name
    var foodItemName = document.getElementsByClassName("foodItemName");
    for (var i = 0; i < elements.length; i++) {
      foodItemName[i].style.margin = "0px";
    }
    // Setting margin for Food Item Price
    var foodItemCost = document.getElementsByClassName("foodItemCost");
    for (var i = 0; i < elements.length; i++) {
      foodItemCost[i].style.margin = "0px";
    }
    // Setting display, width for Food Items Section
    document.getElementById('foodProducts').style.gridTemplateColumns = '275px 275px 275px 270px';
    document.getElementById('foodProducts').style.gridColumnGap = '20px';
    document.getElementsByClassName('smallIcon')[0].style.color = 'black';
    document.getElementsByClassName('barsIcon')[0].style.color = 'gray';
    document.getElementsByClassName('largeIcon')[0].style.color = 'gray';
  })
  $('.barsIcon').click(function () {
    // Setting width and border for Images
    largeMediumDisplay = false;
    var elements = document.getElementsByClassName("dogFoodImage");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.width = (265 + "px");
      elements[i].style.height = (265 + "px");
    }
    // Setting width and display for Images div
    var petFoodDetails = document.getElementsByClassName("petFoodDetails");
    for (var i = 0; i < elements.length; i++) {
      petFoodDetails[i].style.width = (1150 + "px");
      petFoodDetails[i].style.marginBottom = (50 + "px");
      petFoodDetails[i].style.display = "flex";
    }
    // Setting margin for Food Item Name
    var foodItemName = document.getElementsByClassName("foodItemName");
    for (var i = 0; i < elements.length; i++) {
      foodItemName[i].style.margin = "auto 30px";
    }
    // Setting margin for Food Item Price
    var foodItemCost = document.getElementsByClassName("foodItemCost");
    for (var i = 0; i < elements.length; i++) {
      foodItemCost[i].style.margin = "auto 0px auto 518px";
    }
    // Setting display, width for Food Items Section
    document.getElementById('foodProducts').style.display = 'grid';
    document.getElementById('foodProducts').style.gridTemplateColumns = 'none';
    document.getElementsByClassName('barsIcon')[0].style.color = 'black';
    document.getElementsByClassName('largeIcon')[0].style.color = 'gray';
    document.getElementsByClassName('smallIcon')[0].style.color = 'gray';
  })
  $('#ourServicesOption').click(function () {
    document.getElementById('foodData').style.display = 'none';
    document.getElementById('products').style.fontWeight = '100';
    document.getElementById('ourServicesOption').style.fontWeight = 'bold';
    document.getElementById('training').style.fontWeight = 'bold';
    document.getElementById('availabilitySection').style.fontWeight = '100';
    document.getElementById('priceSection').style.fontWeight = '100';
    document.getElementById('trainingServices').style.display = 'grid';
    document.getElementById('daycareServices').style.display = 'none';
    document.getElementById('groomingServices').style.display = 'none';
    if (!servicesOpen) {
      document.getElementById('services').style.height = '110px';
      document.getElementById('services').style.transition = 'opacity 3s ease, height 1s ease';
      document.getElementById('services').style.opacity = '1';
      document.getElementById('services').style.marginTop = '10px';
      document.getElementById('services').style.visibility = 'visible';
      servicesOpen = true;
    } else {
      document.getElementById('services').style.height = '0px';
      document.getElementById('services').style.transition = 'opacity 0.5s ease, height 1s ease';
      document.getElementById('services').style.opacity = '0';
      document.getElementById('services').style.marginTop = 'none';
      document.getElementById('services').style.visibility = 'hidden';
      servicesOpen = false;
    }
    closeAvailability();
    closePrices();
  })
  $('#products').click(function () {
    document.getElementById('foodData').style.display = 'grid';
    document.getElementById('trainingServices').style.display = 'none';
    document.getElementById('daycareServices').style.display = 'none';
    document.getElementById('groomingServices').style.display = 'none';
    document.getElementById('products').style.fontWeight = 'bold';
    document.getElementById('ourServicesOption').style.fontWeight = '100';
    document.getElementById('training').style.fontWeight = '100';
    document.getElementById('availabilitySection').style.fontWeight = '100';
    document.getElementById('priceSection').style.fontWeight = '100';
    closeServices();
    closeAvailability();
    closePrices();
  })
  $('#training').click(function () {
    //Hiding tabs other than Training and changing font-weight
    document.getElementById('foodData').style.display = 'none';
    document.getElementById('trainingServices').style.display = 'grid';
    document.getElementById('daycareServices').style.display = 'none';
    document.getElementById('groomingServices').style.display = 'none';
    document.getElementById('products').style.fontWeight = '100';
    document.getElementById('ourServicesOption').style.fontWeight = 'bold';
    document.getElementById('training').style.fontWeight = 'bold';
    document.getElementById('adoption').style.fontWeight = '100';
    document.getElementById('grooming').style.fontWeight = '100';
    document.getElementById('availabilitySection').style.fontWeight = '100';
    document.getElementById('priceSection').style.fontWeight = '100';
  })
  $('#adoption').click(function () {
    //Hiding tabs other than Daycare and changing font-weight
    document.getElementById('foodData').style.display = 'none';
    document.getElementById('trainingServices').style.display = 'none';
    document.getElementById('daycareServices').style.display = 'grid';
    document.getElementById('groomingServices').style.display = 'none';
    document.getElementById('products').style.fontWeight = '100';
    document.getElementById('ourServicesOption').style.fontWeight = 'bold';
    document.getElementById('training').style.fontWeight = '100';
    document.getElementById('adoption').style.fontWeight = 'bold';
    document.getElementById('grooming').style.fontWeight = '100';
    document.getElementById('availabilitySection').style.fontWeight = '100';
    document.getElementById('priceSection').style.fontWeight = '100';
  })
  $('#grooming').click(function () {
    //Hiding tabs other than Grooming and changing font-weight
    document.getElementById('foodData').style.display = 'none';
    document.getElementById('trainingServices').style.display = 'none';
    document.getElementById('daycareServices').style.display = 'none';
    document.getElementById('groomingServices').style.display = 'grid';
    document.getElementById('products').style.fontWeight = '100';
    document.getElementById('ourServicesOption').style.fontWeight = 'bold';
    document.getElementById('training').style.fontWeight = '100';
    document.getElementById('adoption').style.fontWeight = '100';
    document.getElementById('grooming').style.fontWeight = 'bold';
    document.getElementById('availabilitySection').style.fontWeight = '100';
    document.getElementById('priceSection').style.fontWeight = '100';
  })
  $('#availabilityHeader').click(function () {
    //Hiding tabs other than Products and changing font-weight
    document.getElementById('foodData').style.display = 'grid';
    document.getElementById('trainingServices').style.display = 'none';
    document.getElementById('daycareServices').style.display = 'none';
    document.getElementById('groomingServices').style.display = 'none';
    document.getElementById('products').style.fontWeight = '100';
    document.getElementById('ourServicesOption').style.fontWeight = '100';
    document.getElementById('training').style.fontWeight = '100';
    document.getElementById('adoption').style.fontWeight = '100';
    document.getElementById('grooming').style.fontWeight = '100';
    document.getElementById('availabilityHeader').style.fontWeight = 'bold';
    document.getElementById('priceSection').style.fontWeight = '100';
    if (!openAvailability) {
      document.getElementById('availablityOptions').style.height = '45px';
      document.getElementById('availablityOptions').style.transition = 'opacity 3s ease, height 1s ease';
      document.getElementById('availablityOptions').style.opacity = '1';
      document.getElementById('availablityOptions').style.marginTop = '10px';
      document.getElementById('availablityOptions').style.visibility = 'visible';
      openAvailability = true;
    } else {
      document.getElementById('availablityOptions').style.height = '0px';
      document.getElementById('availablityOptions').style.transition = 'opacity 0.5s ease, height 1s ease';
      document.getElementById('availablityOptions').style.opacity = '0';
      document.getElementById('availablityOptions').style.marginTop = 'none';
      document.getElementById('availablityOptions').style.visibility = 'hidden';
      openAvailability = false;
    }
    closeServices();
    closePrices();
  })
  $('.stockItems').click(function () {
    if (document.getElementById('inStock').checked && document.getElementById('outOfStock').checked) {
      //Show all the products
      var elements = document.getElementsByClassName("outOfStockFood");
      document.getElementById('noOfProducts').innerHTML = '15 Products';
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'grid';
      }
    } else if (document.getElementById('inStock').checked) {
      //Show in-stock products
      var elements = document.getElementsByClassName("outOfStockFood");
      document.getElementById('noOfProducts').innerHTML = '10 Products';
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
      }
    } else if (document.getElementById('outOfStock').checked) {
      //Show out of stock products
      var elements = document.getElementsByClassName("inStockFood");
      document.getElementById('noOfProducts').innerHTML = '5 Products';
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
      }
    }
  })
  $('#range').change(function () {
    //Show products based on selected range
    var slider = document.getElementById("range");
    var output = document.getElementById("endValue");
    output.innerHTML = '$' + slider.value;
    slider.oninput = function () {
      output.innerHTML = '$' + this.value;
    }
    let count = 0;
    const obj = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    }
    Object.keys(obj).map(data => {
      if (obj[data] >= Number(slider.value)) {
        const foodItems = document.getElementsByClassName(data);
        for (var i = 0; i < foodItems.length; i++) {
          foodItems[i].style.display = 'none';
          count += 1;
        }
      } else {
        const foodItems = document.getElementsByClassName(data);
        for (var i = 0; i < foodItems.length; i++) {
          if (largeMediumDisplay) {
            foodItems[i].style.display = 'grid';
          } else {
            foodItems[i].style.display = 'flex';
          }
        }
      }
    })
    const finalCount = 15 - count;
    document.getElementById('noOfProducts').innerHTML = finalCount + ' Products'
  })
  $('#productPriceHeader').click(function () {

    //Hiding tabs other than Products and changing font-weight
    document.getElementById('foodData').style.display = 'grid';
    document.getElementById('trainingServices').style.display = 'none';
    document.getElementById('daycareServices').style.display = 'none';
    document.getElementById('groomingServices').style.display = 'none';
    document.getElementById('products').style.fontWeight = '100';
    document.getElementById('ourServicesOption').style.fontWeight = '100';
    document.getElementById('training').style.fontWeight = '100';
    document.getElementById('adoption').style.fontWeight = '100';
    document.getElementById('grooming').style.fontWeight = '100';
    document.getElementById('availabilityHeader').style.fontWeight = '100';
    document.getElementById('priceSection').style.fontWeight = 'bold';
    if (!openPriceSection) {
      document.getElementById('productPriceSection').style.height = '45px';
      document.getElementById('productPriceSection').style.transition = 'opacity 3s ease, height 1s ease';
      document.getElementById('productPriceSection').style.opacity = '1';
      document.getElementById('productPriceSection').style.marginTop = '10px';
      document.getElementById('productPriceSection').style.visibility = 'visible';
      openPriceSection = true;
    } else {
      document.getElementById('productPriceSection').style.height = '0px';
      document.getElementById('productPriceSection').style.transition = 'opacity 0.5s ease, height 1s ease';
      document.getElementById('productPriceSection').style.opacity = '0';
      document.getElementById('productPriceSection').style.marginTop = 'none';
      document.getElementById('productPriceSection').style.visibility = 'hidden';
      openPriceSection = false;
    }
    closeServices();
    closeAvailability();
  })
})