$(document).ready(function () {
  console.log("OpenMarketsGroup");
  // let url = "http://roshan.com.au/data.json";
  let url = "https://roshanlakmal.github.io/test/data.json";
  /*  Render Card List */
  //Get JSON data from data.json
  $.getJSON(url, function (data) {
    //Loop through JSON array and update the item information
    $.each(data, function (index, value) {
      let imageName = value.title.toLowerCase();
      $(".cards").append(
        "<div class='card'>" +
          "<img class='inner-img' src='resources/img/" +
          imageName +
          ".png'" +
          " alt='" +
          imageName +
          "'/>" +
          "<h5 class='item-name'>" +
          value.title +
          "</h5>" +
          "<p class='item-price'>" +
          value.price +
          "</p>" +
          "</div>"
      );
    });
  }).catch((err) => {
    /* Error checking */
    alert("something went wrong Error Code - " + err.status);
  });
  /*  End Render Card List */

  /* Loading Animation*/
  $(window).on("load", function () {
    $("#cover").fadeOut(1750);
  });
});
