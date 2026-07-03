
```javascript
console.log("JS LOADED OK");

let questions = [];

// load saved posts
window.addEventListener("load", () => {
  const saved = localStorage.getItem("questions");

  if (saved) {
    try {
      questions = JSON.parse(saved);
    } catch (e) {
      questions = [];
    }
  }

  render();
});

function save() {
  localStorage.setItem("questions", JSON.stringify(questions));
}

function addQuestion() {
  const input = document.getElementById("questionInput");
  const list = document.getElementById("questionsList");

  if (!input || !list) return;

  const text = input.value.trim();
  if (text === "") return;

  // add to memory
  questions.unshift(text);

  // save
  save();

  // re-render everything (safe)
  render();

  input.value = "";
}

function render() {
  const list = document.getElementById("questionsList");
  if (!list) return;

  list.innerHTML = "";

  questions.forEach((text) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = "<h3>" + text + "</h3>";
    list.appendChild(div);
  });
}

function toggleTheme() {
  document.body.classList.toggle("light");
}
```
