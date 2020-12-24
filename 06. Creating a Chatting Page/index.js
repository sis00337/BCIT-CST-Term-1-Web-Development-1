// Write your code below

let btn = document.querySelectorAll('button');
let textarea = document.querySelectorAll('textarea');
ul = document.querySelector('section ul');

function chatting(number, srcNum, direction) {
  btn[number].addEventListener('click', function (event) {
      let list = document.createElement('li');
      list.style.textAlign = direction;
      let img = document.createElement('img');
      let deleteButton = document.createElement('button');
      let text = document.createTextNode(textarea[number].value);
      deleteButton.textContent = 'X';
      img.src = "https://randomuser.me/api/portraits/thumb/men/" + srcNum + ".jpg";
      ul.appendChild(list);
      list.appendChild(img);
      list.appendChild(text);
      list.appendChild(deleteButton);
      textarea[number].value = ''

      deleteButton.addEventListener('click', function (event) {
          deleteButton.parentNode.remove();
      })
  })
}

chatting(0, 45, 'left')
chatting(1, 75, 'right')
