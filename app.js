let burger = document.querySelector(".burger");
let masalliq = document.querySelector(".masalliq");
let cheese = document.querySelector(".btn-ch");
let meat = document.querySelector(".btn-m");
let onion = document.querySelector(".btn-o");
let salad = document.querySelector(".btn-s");
let tomato = document.querySelector(".btn-t");
let pickle = document.querySelector(".btn-p");
localStorage.setItem("non", 2)
cheese.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("cheese", 2)
  const sir = document.createElement("div");
  sir.innerHTML = `<img src="./burger-layers/cheese.svg" alt="cheese" />`;
  sir.style.height = "30px";
  sir.style.zIndex = "7";
  masalliq.prepend(sir);
  hisob += 2;
  total.textContent = `Total:  ${hisob}$ dollar`;
  sir.addEventListener("click", (e) => {
    sir.innerHTML = "";
    masalliq.removeChild(sir);
    hisob -= 2;
    total.textContent = `Total:  ${hisob}$ dollar`;
    localStorage.removeItem("cheese")
  });
});
meat.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("meat", 5)
  hisob += 5;
  total.textContent = `Total:  ${hisob}$ dollar`;
  const meat = document.createElement("div");
  meat.innerHTML = `<img src="./burger-layers/meat.svg" alt="meat" />`;
  meat.style.zIndex = "9";
  meat.style.height = "30px";
  masalliq.prepend(meat);
  meat.addEventListener("click", (e) => {
    meat.innerHTML = "";
    masalliq.removeChild(meat);
    hisob -= 5;
    total.textContent = `Total:  ${hisob}$ dollar`;
    localStorage.removeItem("meat")
  });

});
onion.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("onion",1)
  const onion = document.createElement("div");
  hisob += 1;
  total.textContent = `Total:  ${hisob}$ dollar`;
  onion.innerHTML = `<img src="./burger-layers/onion.svg" alt="onion" />`;
  masalliq.prepend(onion);
  onion.style.height = "25px";
  onion.style.zIndex = "-9";
  onion.addEventListener("click", (e) => {
    onion.innerHTML = "";
    masalliq.removeChild(onion);
    hisob -= 1;
    total.textContent = `Total:  ${hisob}$ dollar`;
    localStorage.removeItem("onion")
  });
});
salad.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("salad", 1)
  const salad = document.createElement("div");
  hisob += 1;
  total.textContent = `Total:  ${hisob}$ dollar`;
  salad.innerHTML = `<img src="./burger-layers/salad.svg" alt="salad" />`;
  masalliq.prepend(salad);
  salad.style.height = "30px";
  salad.style.zIndex = "-1";
  salad.addEventListener("click", (e) => {
    salad.innerHTML = "";
    masalliq.removeChild(salad);
    hisob -= 1;
    total.textContent = `Total:  ${hisob}$ dollar`;
    localStorage.removeItem("salad")
  });
});
tomato.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("tomato", 2)
  const tomato = document.createElement("div");
  hisob += 2;
  total.textContent = `Total:  ${hisob}$ dollar`;
  tomato.innerHTML = `<img src="./burger-layers/tomato.svg" alt="tomato" />`;
  masalliq.prepend(tomato);
  tomato.style.height = "30px";
  tomato.style.zIndex = "2";
  tomato.addEventListener("click", (e) => {
    tomato.innerHTML = "";
    masalliq.removeChild(tomato);
    hisob -= 2;
    total.textContent = `Total:  ${hisob}$ dollar`;
    localStorage.removeItem("tomato")
  });
});
pickle.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("pickle", 3)
  const pickle = document.createElement("div");
  hisob += 3;
  total.textContent = `Total:  ${hisob}$ dollar`;
  pickle.innerHTML = `<img src="./burger-layers/pickle.svg" alt="" />`;
  masalliq.prepend(pickle);
  pickle.style.height = "25px";
  pickle.style.zIndex = "1";
  pickle.addEventListener("click", (e) => {
    pickle.innerHTML = "";
    masalliq.removeChild(pickle);
    hisob -= 3;
    total.textContent = `Total:  ${hisob}$ dollar`;
    localStorage.removeItem("pickle")
  });
});
let hisob = 2;
let total = document.querySelector(".total");
total.textContent = `Total:  ${hisob}$ dollar`;
let retry = document.getElementById("retry");
retry.addEventListener("click", (e) => {
  e.preventDefault();
  masalliq.innerHTML = "";
  hisob = 2;
  total.textContent = `Total:  ${hisob}$ dollar`;
  localStorage.clear()
  localStorage.setItem("non", 2)
});
let send = document.querySelector(".send");
let queue = document.querySelector(".queue");
send.addEventListener("click", (e) => {
  e.preventDefault();
  let random = Math.floor(Math.random() * 25) + 10;
  queue.innerHTML = `Your queue is ${random}`;
  localStorage.setItem("itogo", hisob)
  localStorage.setItem("queue", random)
});
