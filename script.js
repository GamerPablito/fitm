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

var footer = document.querySelector('footer');
footer.innerHTML += '<br><br><h2>Be Part Of The Multiverse!</h2>\n';
footer.innerHTML += `<img id="media2" src="icon_twitter.png" alt="Twitter Logo" onclick='window.open("https://twitter.com/FunkyVersal_st", "_blank")'>\n`;
footer.innerHTML += `<img id="media2" src="icon_youtube.png" alt="Youtube Logo" onclick='window.open("https://www.youtube.com/@funkyversalstudios", "_blank")'>\n`;
footer.innerHTML += `<img id="media2" src="icon_gamebanana.png" alt="GameBanana Logo" onclick='window.open("https://gamebanana.com/wips/73595", "_blank")'>\n`;
footer.innerHTML += `<img id="media2" src="icon_discord.png" alt="Discord Logo" onclick='window.open("https://discord.gg/M47FnA8VMB", "_blank")'><br><br>\n`;

var p = document.createElement("p");
p.innerText += "FNF: Funkin' In The Multiverse, created and directed by L-C 380. Developed by FunkyVersal Studio created in 2023. Gamebanana page submitted by ";
p.innerText += "Thomas Peerman. Funkin' In The Multiverse website created by GamerPablito. Other logos and copyrights are property of their respective owners.";
p.innerText += "Friday Night Funkin' game by Funkin' Crew Inc.\n\nAmong Us created by Innersloth, 2018\nGeometry Dash created by RobTop Games, 2013\nPlants vs Zombies created by PopCap Games, 2009";
footer.appendChild(p);