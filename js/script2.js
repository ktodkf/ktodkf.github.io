let a_days = document.getElementById("5_days");
let b_days = document.getElementById("7_days");
let c_days = document.getElementById("10_days");
let five_days = document.getElementById("five_days");
let seven_days = document.getElementById("seven_days");
let ten_days = document.getElementById("ten_days");


/*кнопки 5 дней, 7 дней, 10 дней*/
a_days.addEventListener("click", () => {
  a_days.style.color = "#DC143C";
  b_days.style.color = "#717171";
  c_days.style.color = "#717171";
  seven_days.style.display = "none";
  ten_days.style.display = "none";
  five_days.style.display = "block";
})

b_days.addEventListener("click", () => {
  b_days.style.color = "#DC143C";
  a_days.style.color = "#717171";
  c_days.style.color = "#717171";
  five_days.style.display = "none";
  ten_days.style.display = "none";
  seven_days.style.display = "block";

})

c_days.addEventListener("click", () => {
  c_days.style.color = "#DC143C";
  b_days.style.color = "#717171";
  a_days.style.color = "#717171";
  seven_days.style.display = "none";
  five_days.style.display = "none";
  ten_days.style.display = "block";
})

/*слайдер в меню*/