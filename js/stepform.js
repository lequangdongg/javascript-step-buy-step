const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = [...document.querySelectorAll(".step p")];
const progressCheck = [...document.querySelectorAll(".step .check")];
const bullet = [...document.querySelectorAll(".step .bullet")];
const formEmail = document.form.email;
const formPhone = document.form.phone;
const formUser = document.form.username;
const formPassword = document.form.password;
function validateEmail(email) {
  let emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailRegex.test(email);
}
function validatePhone(phone) {
  let phoneRegex = /^(\+91-|\+91|0)?\d{10,}$/;
  return phoneRegex.test(phone);
}
function validatePassword(password) {
  var pass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return pass.test(password);
}
slidePage.appendChild(nextBtnFirst);
let max = 4;
let current = 1;
nextBtnFirst.addEventListener("click", function (event) {
  event.preventDefault();
  if (document.querySelector(".cart__table-item")) {
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  } else {
    alert("Vui lòng mua hàng để tiếp tục");
    return false;
  }
});
nextBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  if (!validateEmail(formEmail.value) || !validatePhone(formPhone.value)) {
    alert("Email hoặc số điện thoại không lợp lệ");
    return false;
  } else {
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }
});
nextBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (
    formUser.value == "" ||
    formUser.value == null ||
    !validatePassword(formPassword.value)
  ) {
    alert("Tên đăng nhập hoặc mật khẩu không hợp lệ");
    return false;
  } else {
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    setTimeout(function () {
      alert("Đăng nhập thành công và thanh toán hoàn tất");
      localStorage.clear();
      window.location.reload();
    }, 1000);
  }
});

prevBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
