// dark mood
document.addEventListener("DOMContentLoaded", function(){
  let btn = document.getElementById("themeToggle");
  btn.addEventListener("click",function(){
    document.body.classList.toggle("dark")
   if(document.body.classList.contains("dark"))
   {
    btn.innerHTML = "☀️"
   }else{
    btn.innerHTML = "🌙"
   }
  });
});




let cart = [];
let total = 0;

let cartList =
document.getElementById("cartList");

let totalPrice=
document.getElementById("total");

let buttons = document.querySelectorAll(".product-card button");

buttons.forEach(btn =>{
  btn.addEventListener("click", function (){
    let card = this.parentElement;

    let name = 
    card.querySelector("h4").innerText;
    let priceText=
    card.querySelector("p").innerText;

    let price = parseInt(priceText);

    cart.push({name,price});
    total += price;
    updateCart();
  });
});



function updateCart(){
  cartList.innerHTML = "";

  cart.forEach(item=>{
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerText = item.name +"-" +item.price +"Af"
    cartList.appendChild(li);
  });
  totalPrice.innerText =total;
}


let searchBox = document.getElementById("searchBox");
let cards = document.querySelectorAll(".product-card");
    searchBox.addEventListener("keyup", function(){
      let value = this.value.toLowerCase();
      cards.forEach(card=>{
        let name = card.querySelector("h4").innerText.toLowerCase();
        if(name.includes(value)){
          card.style.display = "block";
        }else{
          card.style.display = "none";
        }
      });
    });




    

