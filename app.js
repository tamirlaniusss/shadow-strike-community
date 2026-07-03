javascript
console.log("JS CONNECTED ✔");

function getSaved() {
  return JSON.parse(localStorage.getItem("questions") || "[]");
}

function save(data) {
  localStorage.setItem("questions", JSON.stringify(data));
}

function renderAll() {
  const list = document.getElementById("questionsList");
  if (!list) return;

  list.innerHTML = "";

  getSaved().forEach(text => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = "<h3>" + text + "</h3>";
    list.appendChild(div);
  });
}

// run on page load
window.addEventListener("load", renderAll);javascript
function addQuestion() {
  const input = document.getElementById("questionInput");

  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  const data = getSaved();
  data.unshift(text);

  save(data);

  input.value = "";
  renderAll();
}

function toggleTheme() {
  document.body.classList.toggle("light");
}
