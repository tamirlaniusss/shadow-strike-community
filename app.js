```javascript
console.log("JS LOADED OK");

// load saved posts
let questions = [];

window.addEventListener("load", () => {
  const saved = localStorage.getItem("questions");

  if (saved) {
    questions = JSON.parse(saved);
    questions.forEach(q => renderQuestion(q));
  }
});

function save() {
  localStorage.setItem("questions", JSON.stringify(questions));
}

function renderQuestion(text) {
  const list = document.getElementById("questionsList");

  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = "<h3>" + text + "</h3>";

  list.appendChild(div);
}

function addQuestion() {
  const input = document.getElementById("questionInput");
  const list = document.getElementById("questionsList");

  if (!input || !list) return;
  if (input.value.trim() === "") return;

  const text = input.value;

  // save in memory
  questions.push(text);

  // save in browser storage
  save();

  // show on screen
  renderQuestion(text);

  input.value = "";
}

function toggleTheme() {
  document.body.classList.toggle("light");
}
```