

```javascript
let questions = [];

function addQuestion() {
  const input = document.getElementById("questionInput");

  if (input.value.trim() === "") return;

  questions.unshift({
    text: input.value,
    likes: 0,
    dislikes: 0,
    time: new Date().toLocaleTimeString()
  });

  input.value = "";
  render();
}

function render() {
  const list = document.getElementById("questionsList");
  list.innerHTML = "";

  questions.forEach((q, i) => {
    list.innerHTML += `
      <div class="question">
        <div class="meta">Posted at ${q.time}</div>

        <h3>${q.text}</h3>

        <div class="actions">
          <button onclick="like(${i})">👍 ${q.likes}</button>
          <button onclick="dislike(${i})">👎 ${q.dislikes}</button>
        </div>
      </div>
    `;
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