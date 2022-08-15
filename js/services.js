$(document).ready(function () {
  let servicesOpen = false;
  let openAvailability = false;
  let openPriceSection = false;
  let largeMediumDisplay = true;
  // Setting color and font for icons
  let smallIcon = $(".smallIcon")[0];
  let barsIcon = $(".barsIcon")[0];
  let largeIcon = $(".largeIcon")[0];
  $(smallIcon).css("color", "gray");
  $(barsIcon).css("color", "gray");
  $(largeIcon).css("color", "black");
  $('#products').css('fontWeight', 'bold');

  const closeServices = () => {
    //Closing services accordian
    if (servicesOpen) {
      $('#services').css("height", "0px");
      $('#services').css("transition", "opacity 0.5s ease, height 1s ease");
      $('#services').css("opacity", "0");
      $('#services').css("marginTop", "none");
      $('#services').css("visibility", "hidden");
      servicesOpen = false;
    }
  }

  const closeAvailability = () => {
    //Closing product availability accordian
    if (openAvailability) {
      $('#availablityOptions').css("height", "0px");
      $('#availablityOptions').css("transition", "opacity 0.5s ease, height 1s ease");
      $('#availablityOptions').css("opacity", "0");
      $('#availablityOptions').css("marginTop", "none");
      $('#availablityOptions').css("visibility", "hidden");
      openAvailability = false;
    }
  }

  const closePrices = () => {
    //Closing product price accordian
    if (openPriceSection) {
      $('#productPriceSection').css("height", "0px");
      $('#productPriceSection').css("transition", "opacity 0.5s ease, height 1s ease");
      $('#productPriceSection').css("opacity", "0");
      $('#productPriceSection').css("marginTop", "none");
      $('#productPriceSection').css("visibility", "hidden");
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
    let smallIcon = $(".smallIcon")[0];
    let barsIcon = $(".barsIcon")[0];
    let largeIcon = $(".largeIcon")[0];
    $('#foodProducts').css("grid-template-columns", "565px auto")
    $('#foodProducts').css("grid-column-gap", "30px")
    $('#foodProducts').css("display", "grid")
    $('#foodProducts').css("width", "auto")
    $('#iconSection').css("width", "1150px")
    $(smallIcon).css("color", "gray")
    $(barsIcon).css("color", "gray")
    $(largeIcon).css("color", "black")
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
    let smallIcon = $(".smallIcon")[0];
    let barsIcon = $(".barsIcon")[0];
    let largeIcon = $(".largeIcon")[0];
    $('#foodProducts').css("grid-template-columns", "275px 275px 275px 270px")
    $('#foodProducts').css("grid-column-gap", "20px")
    $(smallIcon).css("color", "black")
    $(barsIcon).css("color", "gray")
    $(largeIcon).css("color", "gray")
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
    let smallIcon = $(".smallIcon")[0];
    let barsIcon = $(".barsIcon")[0];
    let largeIcon = $(".largeIcon")[0];
    $('#foodProducts').css("grid-template-columns", "none")
    $('#foodProducts').css("display", "grid")
    $(smallIcon).css("color", "gray")
    $(barsIcon).css("color", "black")
    $(largeIcon).css("color", "gray")
  })
  $('#ourServicesOption').click(function () {
    $('#foodData').css("display", "none");
    $('#products').css("fontWeight", "100");
    $('#ourServicesOption').css("fontWeight", "bold");
    $('#training').css("fontWeight", "bold");
    $('#availabilitySection').css("fontWeight", "100");
    $('#priceSection').css("fontWeight", "100");
    $('#trainingServices').css("display", "grid");
    $('#daycareServices').css("display", "none");
    $('#groomingServices').css("display", "none");
    if (!servicesOpen) {
      $('#services').css("height", "110px");
      $('#services').css("transition", "opacity 3s ease, height 1s ease");
      $('#services').css("opacity", "1");
      $('#services').css("marginTop", "10px");
      $('#services').css("visibility", "visible");
      servicesOpen = true;
    } else {
      $('#services').css("height", "0px");
      $('#services').css("transition", "opacity 0.5s ease, height 1s ease");
      $('#services').css("opacity", "0");
      $('#services').css("marginTop", "none");
      $('#services').css("visibility", "hidden");
      servicesOpen = false;
    }
    closeAvailability();
    closePrices();
  })
  $('#products').click(function () {
    $('#foodData').css("display", "grid");
    $('#products').css("fontWeight", "bold");
    $('#ourServicesOption').css("fontWeight", "100");
    $('#training').css("fontWeight", "100");
    $('#availabilitySection').css("fontWeight", "100");
    $('#priceSection').css("fontWeight", "100");
    $('#trainingServices').css("display", "none");
    $('#daycareServices').css("display", "none");
    $('#groomingServices').css("display", "none");
    closeServices();
    closeAvailability();
    closePrices();
  })
  $('#training').click(function () {
    //Hiding tabs other than Training and changing font-weight
    $('#foodData').css("display", "none");
    $('#products').css("fontWeight", "100");
    $('#ourServicesOption').css("fontWeight", "bold");
    $('#training').css("fontWeight", "bold");
    $('#adoption').css("fontWeight", "100");
    $('#grooming').css("fontWeight", "100");
    $('#availabilitySection').css("fontWeight", "100");
    $('#priceSection').css("fontWeight", "100");
    $('#trainingServices').css("display", "grid");
    $('#daycareServices').css("display", "none");
    $('#groomingServices').css("display", "none");
  })
  $('#adoption').click(function () {
    //Hiding tabs other than Daycare and changing font-weight
    $('#foodData').css("display", "none");
    $('#products').css("fontWeight", "100");
    $('#ourServicesOption').css("fontWeight", "bold");
    $('#training').css("fontWeight", "100");
    $('#adoption').css("fontWeight", "bold");
    $('#grooming').css("fontWeight", "100");
    $('#availabilitySection').css("fontWeight", "100");
    $('#priceSection').css("fontWeight", "100");
    $('#trainingServices').css("display", "none");
    $('#daycareServices').css("display", "grid");
    $('#groomingServices').css("display", "none");
  })
  $('#grooming').click(function () {
    //Hiding tabs other than Grooming and changing font-weight
    $('#foodData').css("display", "none");
    $('#products').css("fontWeight", "100");
    $('#ourServicesOption').css("fontWeight", "bold");
    $('#training').css("fontWeight", "100");
    $('#adoption').css("fontWeight", "100");
    $('#grooming').css("fontWeight", "bold");
    $('#availabilitySection').css("fontWeight", "100");
    $('#priceSection').css("fontWeight", "100");
    $('#trainingServices').css("display", "none");
    $('#daycareServices').css("display", "none");
    $('#groomingServices').css("display", "grid");
  })
  $('#availabilityHeader').click(function () {
    //Hiding tabs other than Products and changing font-weight
    $('#foodData').css("display", "grid");
    $('#products').css("fontWeight", "100");
    $('#ourServicesOption').css("fontWeight", "100");
    $('#training').css("fontWeight", "100");
    $('#adoption').css("fontWeight", "100");
    $('#grooming').css("fontWeight", "100");
    $('#availabilityHeader').css("fontWeight", "bold");
    $('#priceSection').css("fontWeight", "100");
    $('#trainingServices').css("display", "none");
    $('#daycareServices').css("display", "none");
    $('#groomingServices').css("display", "none");
    if (!openAvailability) {
      $('#availablityOptions').css("height", "45px");
      $('#availablityOptions').css("transition", "opacity 3s ease, height 1s ease");
      $('#availablityOptions').css("opacity", "1");
      $('#availablityOptions').css("marginTop", "10px");
      $('#availablityOptions').css("visibility", "visible");
      openAvailability = true;
    } else {
      $('#availablityOptions').css("height", "0px");
      $('#availablityOptions').css("transition", "opacity 0.5s ease, height 1s ease");
      $('#availablityOptions').css("opacity", "0");
      $('#availablityOptions').css("marginTop", "none");
      $('#availablityOptions').css("visibility", "hidden");
      openAvailability = false;
    }
    closeServices();
    closePrices();
  })
  $('.stockItems').click(function () {
    if (($('#inStock').is(':checked') && $('#outOfStock').is(':checked')) || (!($('#inStock').is(':checked')) && !($('#outOfStock').is(':checked')))) {
      //Show all the products
      var elements = document.getElementsByClassName("outOfStockFood");
      $('#noOfProducts').html('15 Products');
      for (var i = 0; i < elements.length; i++) {
        if (largeMediumDisplay) {
          elements[i].style.display = 'grid';
        } else {
          elements[i].style.display = 'flex';
        }
      }
      var elements = document.getElementsByClassName("inStockFood");
      for (var i = 0; i < elements.length; i++) {
        if (largeMediumDisplay) {
          elements[i].style.display = 'grid';
        } else {
          elements[i].style.display = 'flex';
        }
      }
    } else if ($('#inStock').is(':checked')) {
      //Show in-stock products
      var elements = document.getElementsByClassName("outOfStockFood");
      $('#noOfProducts').html('10 Products');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
      }
      var elements = document.getElementsByClassName("inStockFood");
      for (var i = 0; i < elements.length; i++) {
        if (largeMediumDisplay) {
          elements[i].style.display = 'grid';
        } else {
          elements[i].style.display = 'flex';
        }
      }
    } else if ($('#outOfStock').is(':checked')) {
      //Show out of stock products
      var elements = document.getElementsByClassName("inStockFood");
      $('#noOfProducts').html('5 Products');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
      }
      var elements = document.getElementsByClassName("outOfStockFood");
      for (var i = 0; i < elements.length; i++) {
        if (largeMediumDisplay) {
          elements[i].style.display = 'grid';
        } else {
          elements[i].style.display = 'flex';
        }
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
    $('#noOfProducts').html(finalCount + ' Products')
  })
  $('#productPriceHeader').click(function () {

    //Hiding tabs other than Products and changing font-weight
    $('#foodData').css("display", "grid");
    $('#products').css("fontWeight", "100");
    $('#ourServicesOption').css("fontWeight", "100");
    $('#training').css("fontWeight", "100");
    $('#adoption').css("fontWeight", "100");
    $('#grooming').css("fontWeight", "100");
    $('#availabilityHeader').css("fontWeight", "100");
    $('#priceSection').css("fontWeight", "bold");
    $('#trainingServices').css("display", "none");
    $('#daycareServices').css("display", "none");
    $('#groomingServices').css("display", "none");
    if (!openPriceSection) {
      $('#productPriceSection').css("height", "45px");
      $('#productPriceSection').css("transition", "opacity 3s ease, height 1s ease");
      $('#productPriceSection').css("opacity", "1");
      $('#productPriceSection').css("marginTop", "10px");
      $('#productPriceSection').css("visibility", "visible");
      openPriceSection = true;
    } else {
      $('#productPriceSection').css("height", "0px");
      $('#productPriceSection').css("transition", "opacity 0.5s ease, height 1s ease");
      $('#productPriceSection').css("opacity", "0");
      $('#productPriceSection').css("marginTop", "none");
      $('#productPriceSection').css("visibility", "hidden");
      openPriceSection = false;
    }
    closeServices();
    closeAvailability();
  })
})