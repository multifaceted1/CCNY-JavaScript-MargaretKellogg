/*
  - Using both inputs, enter a movie name and the year it was made
  - append the value of both inputs to the table

  Bonus:
  - Make sure the table rows dont disappear when you click the button to add a row to the table
  - give the table a border via jquery
  - change the border color of the table every time you click on the add movie button
  - make table text font-size larger by 1px every time you click on the add movie button 
*/
var movieTextInput = $("#enter-movie-input");
var movieDateInput = $("#enter-year-input");
var newMovieTR = $;
var newMovieTH = $ (<th></th>);

$("#add-name").onClick(function(){
  $("movie-table").append(newMovieTR);
  $(newMovieTR).append(newMovieTH);
  $(newMovieTH).text(movieTextInput);
  $(newMovieTR).append(newMovieTH);
  $(newMovieTH).text(movieDateInput);
});

