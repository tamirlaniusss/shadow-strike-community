```javascript
console.log("APP LOADED ✔");

let questions = [];

try {
  const saved = localStorage.getItem("questions");
  if (saved) {
    questions = JSON.parse(saved) || [];
  }
} catch (e) {
  console.log("Storage error:", e);
  questions = [];
}

function save() {
  localStorage.setItem("questions", JSON.stringify(questions));
}

function addQuestion() {
  const input = document.getElementById("questionInput");

  if (!input) return;

  const text = input.value.trim();
  if (text === "") return;

  questions.unshift({
    text: text,
    likes: 0,
    dislikes: 0
  });

  input.value = "";

  save();
  render();
}

function render() {
  const list = document.getElementById("questionsList");
  if (!list) return;

  list.innerHTML = "";

  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "question";

    div.innerHTML = `
      <h3>${q.text}</h3>
      <button onclick="like(${i})">👍 ${q.likes}</button>
      <button onclick="dislike(${i})">👎 ${q.dislikes}</button>
    `;

    list.appendChild(div);
  });
}

function like(i) {
  questions[i].likes++;
  save();
  render();
}

function dislike(i) {
  questions[i].dislikes++;
  save();
  render();
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

window.addEventListener("load", render);
```