// eg:  http://127.0.0.1:5500/artist.html?num=1&name=Kevin
let params = (new URL(document.location)).searchParams;
let artist_num = params.get("num");
let artist_name = params.get("name");
// artist_num = 1
// artist_name = Kevin

let section = document.querySelector('section');
let img = document.createElement('img');
img.src = 'https://randomuser.me/api/portraits/men/' + artist_num + '.jpg';
let h1 = document.createElement('h1');
h1.textContent = artist_name;
section.appendChild(img);
section.appendChild(h1);

let p_title = document.createElement('p');
p_title.textContent = artist_data[artist_num].title;
let p_about = document.createElement('p');
p_about.textContent = artist_data[artist_num].about;
section.appendChild(p_title);
section.appendChild(p_about);
