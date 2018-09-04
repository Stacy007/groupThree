// Get references to page elements
var $itemText = $("#item-text");
var $itemNote = $("#item-note");
var $itemCat = $("#category");
var $submitBtn = $("#submit");
var $catSubBtn = $("#catsubmit");
var $newCat = $("#new-cat");
var $itemList = $("#item-list");
var authId = window.localStorage.getItem("AuthID");

// The API object contains methods for each kind of request we'll make
var API = {
  saveItem: function(item) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/items",
      data: JSON.stringify(item)
    });
  },
  saveReview: function(review) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/review",
      data: JSON.stringify(review)
    });
  },
  saveCategory: function(newCat) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/category",
      data: JSON.stringify(newCat)
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
  if (!$itemCat.val()) {
    alert("Please select a category");
    return;
  }

  var item = {
    text: $itemText.val().trim(),
    note: $itemNote.val().trim(),
    AuthorId: authId,
    CategoryId: $itemCat.val()
  };
  console.log("item", item);
  API.saveItem(item).then(function() {
    window.location.assign("/home");
  });

  $itemText.val("");
  $itemNote.val("");
};

var newReviewSubmit = function(event) {
  event.preventDefault();
  var id = $(this).data("id");
  var comment = $("#comment" + id)
    .val()
    .trim();
  var review = {
    comment: comment,
    AuthorId: authId,
    ItemId: id
  };
  console.log("review: ", review);
  API.saveReview(review).then(function() {
    window.location.reload("true");
  });
};

var newCatSubmit = function(event) {
  event.preventDefault();
  var newCat = {
    name: $newCat.val().trim()
  };
  console.log("category: ", newCat);
  API.saveCategory(newCat).then(function() {
    window.location.assign("/newitem");
  });
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
// autocomplete = new google.maps.places.Autocomplete(
//   document.getElementById("item-text")
// );

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$itemList.on("click", ".delete", handleDeleteBtnClick);
$(".revsub").on("click", newReviewSubmit);
$catSubBtn.on("click", newCatSubmit);
