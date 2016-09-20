var request = new XMLHttpRequest();
request.open('GET', 'songs.json');
request.send();
request.addEventListener('load', runThisFunctionWhenDomIsLoaded)
var output = document.getElementById("songsList");
var currentSong;

function runThisFunctionWhenDomIsLoaded() {
  var data = JSON.parse(this.responseText).songs;

  var parseSongsToDom = "";

  for (var i = 0; i < 3; i++) {
    currentSong = data[i];
    console.log("this is inside the for loop", currentSong);

    parseSongsToDom += `<div id=data${i}>${currentSong.title} `
      parseSongsToDom += `by ${currentSong.artist} `
      parseSongsToDom += `on the album ${currentSong.album}`
      parseSongsToDom += `<button id=button${i}>Delete</button>`
    parseSongsToDom += `</div>`

  }
  output.innerHTML = parseSongsToDom;
  document.getElementById("button0").addEventListener('click', buttonFunction);
  document.getElementById("button1").addEventListener('click', buttonFunction);
  document.getElementById("button2").addEventListener('click', buttonFunction);

  function buttonFunction() {
    console.log()
  }

}

