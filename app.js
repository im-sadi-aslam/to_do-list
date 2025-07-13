 function addTask() {
      var input = document.getElementById('task-input');
      var taskText = input.value.trim();

      if (taskText === '') {
        alert('Please enter a task!');
        return;
      }

      var li = document.createElement('li');
      li.innerHTML = `
        ${taskText}
        <span class="delete" onclick="this.parentElement.remove()">×</span>
      `;

      document.getElementById('task-list').appendChild(li);
      input.value = '';
    }