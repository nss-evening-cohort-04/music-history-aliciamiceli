"use strict";

var request = new XMLHttpRequest();
request.open('GET', 'songs.json');
request.send();
request.addEventListener('load', runThisFunctionWhenDomIsLoaded)
var currentSong;

$.ajax({url: ''})



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
  $('#songsList').html(parseSongsToDom);

  $('#button0').click(buttonFunction);

  function buttonFunction() {
    console.log("click");
    }
  }
}




















