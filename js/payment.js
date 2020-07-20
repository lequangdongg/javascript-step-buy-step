badge();
cartTitle();

function paymentCart() {
  let cartItem = localStorage.getItem("product");
  cartItem = JSON.parse(cartItem);
  let cartTable = document.getElementsByTagName("tbody");
  let cartBody;
  for (let i = 0; i < cartTable.length; i++) {
    cartBody = cartTable[i];
  }
  let arrayCart = Object.values(cartItem);
  let totalMoney = document.querySelector(".totalMoney");
  let mapArr = arrayCart.map(items => (items.price * items.quantity).toFixed(3));
  let num = 0;
  for(let i = 0; i < mapArr.length; i++){
    let par = Number(mapArr[i]);
    num += par;
  }
  totalMoney.innerHTML = `Tổng tiền : ${num.toFixed(3)} đ`
  if (cartItem && cartTable) {
    arrayCart.map((items) => {
      for (let i = 0; i < cartTable.length; i++) {
        cartBody = cartTable[i];
        cartBody.innerHTML += `
        <tr class="cart__table-item">
          <td><img src=${items.image} alt="" /></td>
          <td><p class="cart__table-name">${items.name}</p></td>
          <td>
            <span class="cart__table-price">${items.price}<span>đ</span></span>
          </td>
          <td><button class="cart__table-quantity">${
            items.quantity
          }</button></td>
          <td>
            <span class="cart__table-price">${(
              items.price * items.quantity
            ).toFixed(3)}<span>đ</span></span>
          </td>
          <td><i class="far fa-trash-alt"></i></td>
          </tr>
        `;
      }
    });
  }
}
paymentCart();

function removeCartPayment() {
  const removeBtnPayment = document.querySelectorAll(".fa-trash-alt");
  let getItemPayment = JSON.parse(localStorage.getItem("product"));
  let coverArrPayment = Object.values(getItemPayment);
  let coverObjPayment;
  for (let i = 0; i < removeBtnPayment.length; i++) {
    removeBtnPayment[i].addEventListener("click", function (event) {
      coverArrPayment.splice(i, 1);
      coverObjPayment = Object.assign({}, coverArrPayment);
      localStorage.setItem("product", JSON.stringify(coverObjPayment));
      window.location.reload();
    });
  }
}

removeCartPayment();
