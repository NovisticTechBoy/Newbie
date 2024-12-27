//here, I'll retrieve my cart details from the local storage
var cart = JSON.parse(localStorage.getItem("cart")) || [];
var cartlistContents = document.getElementById('cartlistContents');

if (cart.length === 0) {
    cartlistContents.innerHTML = "<li>You have an empty Order list</li>";
} else {
    cart.forEach(function(item){
        var li = document.createElement("li");
        li.textContent = item;
        cartlistContents.appendChild(li);
    })
}

//going back to the menu page..
document.getElementById('back').addEventListener('click', function(){
    window.location.href = "gitty.html";
});
