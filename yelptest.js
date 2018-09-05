$(document).ready(function()
{
  // ****
  // Now find the yelp data
  var str = "Fred's Mexican Cafe, San Diego Avenue, San Diego, CA, USA";
  var splitArray = str.split(",");
  var Name = encodeURIComponent(splitArray[0]);
  var Street = encodeURIComponent(splitArray[1]);
  var City = encodeURIComponent(splitArray[2]);
  var State = splitArray[3];

  //var term="Genesee Avenue, San Diego, CA, USA"
  var term = "name=" + Name;

  var url =
    "https://api.yelp.com/v3/businesses/matches?" + 
    term +
    "&address1=" +
    Street +
    "&city=" +
    City +
    "&state=" +
    State +
    "&country=US";

  $.ajaxPrefilter(function(options) {
    if (options.crossDomain && $.support.cors) {
      options.url = "https://cors-anywhere.herokuapp.com/" + options.url;
    }
  });

  $.ajax(url, {
    headers: {
      Authorization:
        "Bearer IOnOmcVyQA7g8bfItyRwB1JFyfXeJh0kXRqdwyKUjuxOP2LmvLLth68IN84LwKiAUSgtQN5Bikqdnm70id-_Sj_0U5vTewXNl7ycBkUayA45WB-ozhQ2VEq7-6AuW3Yx"
    }
  }).then(function(response) {
    console.log("Yelp response", response);
    console.log("Yelp array", response.businesses.length);

    if (response.businesses.length > 0) {
      // Got the yelp ID, now get the yelp rich data
      getYelpData(response.businesses[0].id);
    }
  });
});

function getYelpData(yelpID) {
  // Now get the Yelp data we want from the ID
  url = "https://api.yelp.com/v3/businesses/" + yelpID;

  console.log("getYelpData: URL for Yelp ", url);
  $.ajax(url, {
    headers: {
      Authorization:
        "Bearer IOnOmcVyQA7g8bfItyRwB1JFyfXeJh0kXRqdwyKUjuxOP2LmvLLth68IN84LwKiAUSgtQN5Bikqdnm70id-_Sj_0U5vTewXNl7ycBkUayA45WB-ozhQ2VEq7-6AuW3Yx"
    }
  })
    // $.ajax(url, { headers: { Authorization: 'Bearer s8fyDTIEAcaKIhVHE-YXji0_G6gyCKWLxbwwL5Hg1PQW-Eu_ErKZ-xeV0_xRqQ0VtEV7XpS540SpNB9q4aQkcW-fp43IhgOgfh0fHP_d8YdNVHCqqxgMCBDQ8_U6W3Yx' } })
    .then(function(response) {
      console.log("GetYelpData: Yelp ID search response ", response);

      // Ok, at this point we have all the data we need
      console.log("Yelp business URL: ", response.url);

      // Stuff data Yelp URL into database here
      console.log("Stuff into DB");
    });
}
