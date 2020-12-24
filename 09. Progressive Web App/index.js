// Hide / show inputs as needed
// js code for taking input data and creating new elements

let addButton = document.querySelector('section button');
let userInput = document.querySelector('.userInput');
let show = true;
addButton.addEventListener('click', function(event) {
  if (show) {
      userInput.style.display = 'block';
      show = false;
  } else {
      userInput.style.display = 'none';
      show = true;
  }
});

let inputAddButton = document.querySelector('#submit_button');
inputAddButton.addEventListener('click', function(event) {
  userInput.style.display = 'none';
  show = true;

  let nameInput = document.querySelector('#nameInput');
  let artistInput = document.querySelector('#artistInput');
  let numberInput = document.querySelector('#numberInput');
  if (numberInput.value >=1 && numberInput.value <= 99) {
    let main = document.querySelector('main');
    let div = document.createElement('div');
    main.appendChild(div);

    let img = document.createElement('img');
    img.src = 'https://randomuser.me/api/portraits/men/' + numberInput.value + '.jpg';

    let anchor = document.createElement('a');
    anchor.href = './artist.html?num=' + numberInput.value + '&name=' + nameInput.value;
    let anchorFirstChild = document.createElement('div');
    anchorFirstChild.textContent = nameInput.value;
    let anchorSecondChild = document.createElement('div');
    anchorSecondChild.textContent = artistInput.value
    anchor.appendChild(anchorFirstChild);
    anchor.appendChild(anchorSecondChild);

    div.appendChild(img);
    div.appendChild(anchor);

    nameInput.value = '';
    artistInput.value = '';
    numberInput.value = '';
  } 
  else {
    alert('Artist Number must be between 1 to 99 inclusive. Try again :(')
  }
});

// register the service worker (sw.js)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').
  then(function(response) {
    console.log('Service Worker has successfully registered.');
  }).
  catch(function(error) {
    console.log('Failed to register a Service Worker...')
  })
}
