javascript
console.log("JS CONNECTED ✔");

function addQuestion() {
  const input = document.getElementById("questionInput");
  const list = document.getElementById("questionsList");

  console.log("BUTTON CLICKED ✔");

  if (!input || !list) return;
  if (input.value.trim() === "") return;

  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = "<h3>" + input.value + "</h3>";

  list.appendChild(div);

  input.value = "";
}

function toggleTheme() {
  document.body.classList.toggle("light");
}javascript
function addQuestion() {
  const input = document.getElementById("questionInput");
  const list = document.getElementById("questionsList");

  if (!input || !list) return;
  if (input.value.trim() === "") return;

  const text = input.value;

  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = "<h3>" + text + "</h3>";

  list.appendChild(div);

  input.value = "";

  // SAVE (ONLY ADDITION)
  let saved = JSON.parse(localStorage.getItem("questions") || "[]");
  saved.push(text);
  localStorage.setItem("questions", JSON.stringify(saved));
}