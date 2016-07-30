var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("In A Week - by Hozier on the album Hozier");
songs.unshift("Summer of '69 - by Bryan Adams on the album Reckless");


var songsContainer = document.getElementById("songsList");

for (var i = 0; i < songs.length; i++) {
  var newSong = songs[i].replace(/>/g, "-").replace(/[*|@|(|!]/g, "");

  songsContainer.innerHTML += ("<li>" + newSong + "</li>")
}
