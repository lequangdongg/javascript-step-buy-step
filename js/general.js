function badge() {
  const badgeNumber = document.querySelector(".nav__right-number");
  if (localStorage.getItem("product")) {
    const badge = JSON.parse(localStorage.getItem("product"));
    let badgeItem = Object.values(badge).map((items) => items.quantity);
    let badgeQuantity = 0;
    for (let i = 0; i < badgeItem.length; i++) {
      badgeQuantity += badgeItem[i];
    }
    badgeNumber.innerHTML = badgeQuantity;
  }
}

function cartTitle() {
  if (localStorage.getItem("product")) {
    let cartItem = localStorage.getItem("product");
    cartItem = JSON.parse(cartItem);
    cartItem = Object.values(cartItem);
    const cart = document.querySelector(".nav__right-all");
    let priceMoney = cartItem.map((items) => items.quantity * items.price);
    let priceTotal = 0;
    for (let i = 0; i < priceMoney.length; i++) {
      priceTotal += priceMoney[i];
    }
    if (cartItem && cart) {
      cartItem.map((items) => {
        cart.innerHTML += `
        <div class="nav__right-detail">
          <img src=${items.image} alt=""/>
          <div>
              <p>${items.name}</p>
              <p>${(items.price * items.quantity).toFixed(3)}<span>đ</span></p>
          </div>
          <i class="fas fa-times"></i>
        </div>
      `;
      });
    }
    let createEle = document.createElement("div");
    let setClassMoney = document.createAttribute("class");
    setClassMoney.value = "nav__right-total";
    createEle.setAttributeNode(setClassMoney);
    cart.appendChild(createEle);
    const totalCartMoney = document.querySelector(".nav__right-total");
    totalCartMoney.innerHTML = `
    <span>Tổng số : </span><span>${priceTotal.toFixed(3)}<span>đ</span></span>
    `;
    const cartButton = document.querySelector(".nav__right-cart");
    cart.appendChild(cartButton);
  }
}
