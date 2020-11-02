/*
  Using jQuery:
    - when you click on the button
    - empty the 'magic-goes-here' div and re-populate it with an artist, album name, and album image of your choice

  Bonus:
    - set up an object array of music objects that contain the keys artist, album, and album picture
    - load it up with as many albums as you want
    - when you click on the button, you change the album that is show on the ui
      - to do this, you'll select an exact index in that array, i.e. musicAlbums[0] will show the arist, album, and album cover image
        - you can generate that index number randomly every time the button is pressed
        - or you can have a number incremented by 1 every time the button is pressed
        - so, to place the album cover in the image tag in jQuery for the first object in the array, itll look something like $("<img>").attr("src", musicAlbums[o].albumPic)
*/
var addArtistAndAlbum = $("<h2>");
addArtistAndAlbum.text("Joni Mitchel, Blue");
var imageBlue = $("<img>");
imageBlue.attr("src", "https://upload.wikimedia.org/wikipedia/en/e/e1/Bluealbumcover.jpg");

$('#change-album').click(function() {
  $('.magic-goes-here').empty();
  console.log("hello");
  $('.magic-goes-here').append(addArtistAndAlbum);
  $('.magic-goes-here').append(imageBlue);
});
var musicArray = [];
