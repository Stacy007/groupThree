// Get references to page elements
var $itemText = $("#item-text");
var $itemNote = $("#item-note");
var $submitBtn = $("#submit");
var $itemList = $("#item-list");
var itemAuthor = "JohnB";

// The API object contains methods for each kind of request we'll make
var API = {
  saveItem: function(item) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/items",
      data: JSON.stringify(item)
    });
  },
  getItems: function() {
    return $.ajax({
      url: "api/items",
      type: "GET"
    });
  },
  deleteItem: function(id) {
    return $.ajax({
      url: "api/items/" + id,
      type: "DELETE"
    });
  }
};

// handleFormSubmit is called whenever we submit a new item
// Save the new item to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var item = {
    text: $itemText.val().trim(),
    author: itemAuthor,
    note: $itemNote.val().trim()
  };

  API.saveItem(item).then(function() {
    window.location.assign("/home");
  });

  $itemText.val("");
  $itemNote.val("");
};

// handleDeleteBtnClick is called when an item's delete button is clicked
// Remove the item from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteItem(idToDelete).then(function() {
    window.location.assign("/home");
  });
};

// Add autocomplete functionality to recommendation
autocomplete = new google.maps.places.Autocomplete(
  document.getElementById("item-text")
);

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$itemList.on("click", ".delete", handleDeleteBtnClick);
