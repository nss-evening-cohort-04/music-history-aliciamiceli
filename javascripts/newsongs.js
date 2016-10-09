"use strict";

var request = new XMLHttpRequest();
request.open('GET', 'json/songs.json');
request.send();
request.addEventListener('load', runThisFunctionWhenDomIsLoaded);
var currentSong;


function runThisFunctionWhenDomIsLoaded() {
  /*jshint validthis:true*/
  var data = JSON.parse(this.responseText).songs;

  var parseSongsToDom = "";

  for (var i = 0; i < 3; i++) {
    currentSong = data[i];
    console.log("this is inside the for loop", currentSong);

    parseSongsToDom += `<div id=data${i}>${currentSong.title} `;
      parseSongsToDom += `by ${currentSong.artist} `;
      parseSongsToDom += `on the album ${currentSong.album}`;
      parseSongsToDom += `<button id=button${i}>Delete</button>`;
    parseSongsToDom += `</div>`;

  }

  $('#songsList').html(parseSongsToDom);

  $("#button0").click(buttonFunction0);
  $("#button1").click(buttonFunction1);
  $("#button2").click(buttonFunction2);

  function buttonFunction0() {
    $('#data0').remove();
  }

  function buttonFunction1(){
    $('#data1').remove();
  }

  function buttonFunction2(){
    $('#data2').remove();
  }

var newRequest = new XMLHttpRequest();
newRequest.open('GET', 'json/songs2.json');
newRequest.send();
newRequest.addEventListener('load', moreFunction);

function moreFunction() {

  console.log("more button clicked");
  var secondData = JSON.parse(this.responseText).songs;
  console.log("secondData", secondData);
  var currentSongSecond;

  let parseMoreSongsToDom = "";

  for (let j = 0; j < 3; j++) {
    currentSongSecond = secondData[j];
    console.log("this is inside the second loop", currentSongSecond);

    parseMoreSongsToDom += `<div id=data${j+3}>${currentSongSecond.title} `;
      parseMoreSongsToDom += `by ${currentSongSecond.artist} `;
      parseMoreSongsToDom += `on the album ${currentSongSecond.album}`;
    parseMoreSongsToDom += `</div>`;

  }

  $('#more').click(function(){
    $('#songsList').append(parseMoreSongsToDom);
  });

}

}



















