```javascript
console.log("APP JS LOADED");

let questions = [];

function addQuestion() {
  const input = document.getElementById("questionInput");
  const list = document.getElementById("questionsList");

  if (!input || !list) {
    console.error("Missing HTML elements");
    return;
  }

  if (input.value.trim() === "") return;

  questions.push(input.value);
  input.value = "";

  render();
}

function render() {
  const list = document.getElementById("questionsList");
  list.innerHTML = "";

  questions.forEach((q) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = "<h3>" + q + "</h3>";
    list.appendChild(div);
  });
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

render();
```