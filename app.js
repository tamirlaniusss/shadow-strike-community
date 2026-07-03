```javascript
console.log("APP LOADED OK");

let questions = [];

function addQuestion() {
  const input = document.getElementById("questionInput");

  if (!input) {
    console.error("input not found");
    return;
  }

  if (input.value.trim() === "") return;

  questions.unshift({
    text: input.value,
    likes: 0,
    dislikes: 0
  });

  input.value = "";
  render();
}

function render() {
  const list = document.getElementById("questionsList");

  if (!list) {
    console.error("list not found");
    return;
  }

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
  render();
}

function dislike(i) {
  questions[i].dislikes++;
  render();
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

render();
```