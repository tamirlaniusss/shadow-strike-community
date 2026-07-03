```javascript
let questions = [];

// Load saved posts when page opens
window.onload = function () {
  const saved = localStorage.getItem("questions");

  if (saved) {
    questions = JSON.parse(saved);
  }

  render();
};

function saveToStorage() {
  localStorage.setItem("questions", JSON.stringify(questions));
}

function addQuestion() {
  const input = document.getElementById("questionInput");
  const list = document.getElementById("questionsList");

  if (!input || input.value.trim() === "") return;

  questions.unshift({
    text: input.value,
    likes: 0,
    dislikes: 0
  });

  input.value = "";

  saveToStorage();
  render();
}

function render() {
  const list = document.getElementById("questionsList");
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
  saveToStorage();
  render();
}

function dislike(i) {
  questions[i].dislikes++;
  saveToStorage();
  render();
}

function toggleTheme() {
  document.body.classList.toggle("light");
}
```