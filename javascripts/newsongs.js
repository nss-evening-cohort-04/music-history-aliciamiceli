"use strict";

// var request = new XMLHttpRequest();
// request.open('GET', 'json/songs.json');
// request.send();
// request.addEventListener('load', runThisFunctionWhenDomIsLoaded);
// var currentSong;
  var parseSongsToDom = "";

$(document).ready(function (){
  $.ajax({ url: 'json/songs.json',
    success: function(data1) {
      console.log("data1", data1.songs);

  /*jshint validthis:true*/



  for (var i = 0; i < 3; i++) {
   let currentSong = data1.songs[i];
    console.log("this is inside the for loop", data1.songs[i]);
  console.log("parseSongsToDom", parseSongsToDom);

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

console.log("parseMoreSongsToDom", parseMoreSongsToDom);

}

$('#songsList').append(parseMoreSongsToDom);





 }
}
);
}


// function moreFunction() {
// $.ajax({
//   type: 'GET',
//   dataType: 'JSON',
//   url: "json/songs2.json",
//   success: function() {
//     $('#songsList').append("done");
//   }
// }

// )
// }



  // console.log("more button clicked");
  // var secondData = JSON.parse(this.responseText).songs;
  // console.log("secondData", secondData);
  // var currentSongSecond;

  // let parseMoreSongsToDom = "";

  // // for (let j = 0; j < 3; j++) {
  // //   currentSongSecond = secondData[j];
  // //   console.log("this is inside the second loop", currentSongSecond);

  // //   parseMoreSongsToDom += `<div id=data${j+3}>${currentSongSecond.title} `;
  // //     parseMoreSongsToDom += `by ${currentSongSecond.artist} `;
  // //     parseMoreSongsToDom += `on the album ${currentSongSecond.album}`;
  // //   parseMoreSongsToDom += `</div>`;

  // // }

  // $('#more').click(function(){
  //   $('#songsList').append(parseMoreSongsToDom);
  // });

// }

// }



















