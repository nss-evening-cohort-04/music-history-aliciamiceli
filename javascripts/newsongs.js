"use strict";

var parseSongsToDom = "";

$(document).ready(function (){
  $.ajax({ url: 'json/songs.json',
  success: function(data1) {

    for (var i = 0; i < 3; i++) {
      let currentSong = data1.songs[i];

      parseSongsToDom += `<div id=data${i}>${currentSong.title} `;
        parseSongsToDom += `by ${currentSong.artist} `;
        parseSongsToDom += `on the album ${currentSong.album}`;
        parseSongsToDom += `<button id=button${i}>Delete</button>`;
      parseSongsToDom += `</div>`;

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
      }
    }
  });
});

$('#more').click(moreFunction);


  function moreFunction() {
  $.ajax({ url:'json/songs2.json',
  success: function(data) {
    console.log("data", data.songs);

    let parseMoreSongsToDom = "";

    for (let j=0; j < 3; j++) {
      console.log("data.songs[j]", data.songs[j]);
      let currentSongSecond = data.songs[j];

      parseMoreSongsToDom += `<div id=data${j+3}>${currentSongSecond.title} `;
        parseMoreSongsToDom += `by ${currentSongSecond.artist} `;
        parseMoreSongsToDom += `on the album ${currentSongSecond.album}`;
      parseMoreSongsToDom += `</div>`;

        }
      $('#songsList').append(parseMoreSongsToDom);
      }
    }
  );
}