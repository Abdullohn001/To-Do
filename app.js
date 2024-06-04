const formEl = document.querySelector("#form");
const ulEl = document.querySelector("#ul");
const clear = document.querySelector("#clear")

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (formEl.input.value.trim()) {
    const li = document.createElement("li");
    const spanRound = document.createElement("span");
    const paragrfText = document.createElement("p");
    const button = document.createElement("button")
    spanRound.classList.add("span");
    paragrfText.classList.add("param")
    li.classList.add("li-style");
    button.classList.add("remove")
    button.textContent = "Complate"
    button.addEventListener("click", () => paragrfText.classList.toggle("complate"));
    paragrfText.textContent = formEl.input.value;
    li.appendChild(paragrfText);
    li.appendChild(button);
    ulEl.appendChild(li);
    errorMesg.textContent = "";
    formEl.input.value = "";
    } else {
    alert("You should write something :(");
  }
});

  clear.addEventListener("click", () => location.reload());