let dataJson = null;
const products = document.querySelector(".product__slider");
(function () {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      getData(this.responseText);
    }
  };
  const url = "http://localhost:3000/shopping";
  xhttp.open("GET", url, true);
  xhttp.send();
})();

function getData(data) {
  dataJson = JSON.parse(data);
  let content = "";
  for (let i = 0; i < dataJson.length; i++) {
    content += `
        <div class="product__slider-item">
          <img src=${dataJson[i].img} alt="loading image" />
          <h6 class="product__slider-name">${dataJson[i].name}</h6>
          <p>Mỹ phẩm châu Âu</p>
          <span class="product__slider-border"></span><span class="product__slider-price">${dataJson[i].price}<span>đ</span></span>
          <div class="product__buyCart">
            <button class="product__buyCart-buy">MUA HÀNG</button><span><i class="fas fa-heart"></i></span><span><i class="fas fa-sync-alt"></i></span>
          </div>
        </div>
      `;
  }
  products.innerHTML = content;
}

window.addEventListener("load", function (event) {
  const buttonBuy = document.querySelectorAll(".product__buyCart-buy");
  const image = document.querySelectorAll(".product__slider-item");
  const price = document.querySelectorAll(".product__slider-price");
  const name = document.querySelectorAll(".product__slider-name");
  for (let i = 0; i < buttonBuy.length; i++) {
    buttonBuy[i].addEventListener("click", function (event) {
      let productItem = {
        id: i,
        image: image[i].childNodes[1].src,
        price: price[i].childNodes[0].textContent,
        name: name[i].textContent,
        quantity: 0,
      };
      setItem(productItem);
      window.location.reload();
    });
  }
});

function setItem(productItem) {
  let cartItem = localStorage.getItem("product");
  cartItem = JSON.parse(cartItem);
  if (cartItem != null) {
    if (cartItem[productItem.id] == undefined) {
      cartItem = {
        ...cartItem,
        [productItem.id]: productItem,
      };
    }
    cartItem[productItem.id].quantity += 1;
  } else {
    productItem.quantity = 1;
    cartItem = {
      [productItem.id]: productItem,
    };
  }
  localStorage.setItem("product", JSON.stringify(cartItem));
}

badge();
cartTitle();

function removeItemCart() {
  const removeBtn = document.querySelectorAll(".fa-times");
    let itemLocal = JSON.parse(localStorage.getItem("product"));
    let covertArr = Object.values(itemLocal);
    let covertObj;
    for (let i = 0; i < removeBtn.length; i++) {
      removeBtn[i].addEventListener("click", function (event) {
        covertArr.splice(i, 1);
        covertObj = Object.assign({}, covertArr);
        localStorage.setItem("product", JSON.stringify(covertObj));
        window.location.reload();
      });
    }
}

removeItemCart();
