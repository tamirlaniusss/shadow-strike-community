javascript
console.log("JS LOADED OK");

function addQuestion() {
  const input = document.getElementById("questionInput");
  const list = document.getElementById("questionsList");

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
}