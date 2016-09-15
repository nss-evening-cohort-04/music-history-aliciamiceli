var listView = document.getElementById('listView');
listView.addEventListener('click', listViewFunction);
var songsContainer = document.getElementById("songsList");

var songs = [];

songs[songs.length] = "Legs - by ZZTop on the album Eliminator";
songs[songs.length] = "The Logical Song - by Supertramp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall - by Pink Floyd on the album The Wall";
songs[songs.length] = "Welcome to the Jungle - by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironic - by Alanis Morisette on the album Jagged Little Pill";

songs.push("In A Week - by Hozier on the album Hozier");
songs.unshift("Summer of '69 - by Bryan Adams on the album Reckless");

var songDisplay = (function (){

for (var i = 0; i < songs.length; i++) {
songsContainer.innerHTML += ("<li>" + songs[i] + "</li>")
}

}())

function listViewFunction(){

  songsContainer.innerHTML = "";

  for (var i = 0; i < songs.length; i++) {
    var newSong = songs[i].replace(/>/g, "-").replace(/[*|@|(|!]/g, "");

    songsContainer.innerHTML += ("<li>" + newSong + "</li>")
  }
}

var addView = document.getElementById('addView');

addView.addEventListener('click', addViewFunction);

function addViewFunction() {
  songsContainer.innerHTML = "";
  songsContainer.innerHTML = `<div class="input">
  <ul>Enter a new song!<br>
    <li>Enter song title here:<input id='titleinput'></li>
    <li>Enter artist name here:<input id='artistinput'></li>
    <li>Enter album title here:<input id='albuminput'></li>
  </ul>
  <button id="add">Add!</button>
</div> `
}

songsContainer.addEventListener('click', function(e) {
  if (e.target.id === 'add') {
    var title = document.getElementById('titleinput').value;
    var artist = document.getElementById('artistinput').value;
    var album = document.getElementById('albuminput').value;

    songs[songs.length] = (title + " by " + artist + " on the album " + album);
  }
})