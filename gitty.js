//TARGET, THEN COMMAND....
// Adding a click event listener to the "ADD TO CART" button
var cart = [];

document.getElementById("atcbtn").addEventListener("click", function () {
  // Get values from all the dropdowns
  var snackMenu = document.getElementById("s-menu").value;
  var beveragesMenu = document.getElementById("b-menu").value;
  var mainCourseMenu = document.getElementById("mm-menu").value;
  var dessertsMenu = document.getElementById("d-menu").value;

  var customAlert = document.getElementById("customAlert"); // Reference to the custom alert box
  var alertMessage = document.getElementById("alertMessage"); // Reference the message element inside the alert

  //adding selected items to cart
  if (snackMenu) cart.push(snackMenu);
  if (beveragesMenu) cart.push(beveragesMenu);
  if (mainCourseMenu) cart.push(mainCourseMenu);
  if (dessertsMenu) cart.push(dessertsMenu);

  //saving cart to Local Storage
  localStorage.setItem("cart", JSON.stringify(cart));


  document.getElementById('viewOrderList').addEventListener('click', function(){
    window.location.href = "orderlist.html";
  })
  // Check if at least one item is selected
  if (snackMenu === "" && beveragesMenu === "" && mainCourseMenu === "" && dessertsMenu === "") {
    alertMessage.textContent = "You haven't ordered anything yet... please choose from the list provided.";
  } else {
    alertMessage.textContent = "Your order has been added to the cart successfully!";
  }

  // Show the custom alert box
  customAlert.style.display = "flex";
});

// Close the custom alert box when "OKAY" is clicked
document.getElementById("closeAlert").addEventListener("click", function () {
  var customAlert = document.getElementById("customAlert");
  customAlert.style.display = "none"; // Hide the custom alert
});

document.getElementById('pictures').addEventListener('click', function(){
  window.location.href ="varii.html";
})

document.getElementById('news').addEventListener('click', function(){
  window.location.href ="feedbck.html";
})

