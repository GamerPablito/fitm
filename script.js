var head = document.querySelector('head');
head.innerHTML += '\n<meta charset="UTF-8">\n';
head.innerHTML += '<link rel="shortcut icon" href="icon.png" type="image/png">\n';
head.innerHTML += '<link rel="stylesheet" href="style.css"></link>';

var nav = document.querySelector('nav');
nav.innerHTML += '<img src="logo_funkyversal.png" alt="Funkyversal">\n';
nav.innerHTML += `<img id="lc380" src="logo_lc380.png" alt="L-C 380" title="Go Follow L-C 380 Here!" onclick='window.open("https://twitter.com/lord_380", "_blank")'>\n`;

var pbar = document.createElement('object');
pbar.data = "progress_bar.svg";
pbar.type = "image/svg+xml";
nav.appendChild(pbar);

document.querySelector('footer').innerHTML = "Website version: v2024.10.21<br>Copyright &copy; 2024 Funkin In The Multiverse";