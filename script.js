const input = document.querySelector("#input");
const btn = document.querySelector(".btn");
const itemsList = document.querySelector("#items-list");

btn.addEventListener("click", () => {
  const InputTask = input.value.trim();
  if (InputTask !== "") {
    const Li = document.createElement("li");


    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("check");
    Li.appendChild(checkbox);

    
    const span = document.createElement("span");
    span.textContent = InputTask;
    Li.appendChild(span);

    const icon = document.createElement("i");
    icon.className = "fa-solid fa-delete-left";
    icon.style.cursor = "pointer";
    icon.style.color ="white"
    Li.appendChild(icon);


    icon.addEventListener("click", () => {
      Li.remove();
    });
    
     Li.addEventListener("click", () => {
      Li.classList.toggle("completed");
    });

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        span.style.textDecoration = "line-through";
        span.style.color = "#aaa";
      } else {
        span.style.textDecoration = "none";
        span.style.color = "";
      }
    });

    itemsList.appendChild(Li);
    input.value = "";
  }
});
