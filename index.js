/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getDataFromApi, displaySearchData, and watchSubmit functions. When you're done, this app should allow a user to search for an artist and song title (both should be required), and display the song lyrics. You should make requests to this API: https://lyricsovh.docs.apiary.io/# . Also make any necessary adjustments to make this app accessible. */

function getDataFromApi(artist, title, callback) {
  //your code here
  console.log('getDatafromApi was called');
  $.get(`https://api.lyrics.ovh/v1/${artist}/${title}`, function(data, status){
        console.log(data);
        callback(data);
    });
  
}

function displaySearchData(data) {
	console.log(data);
  $('.js-search-results').html(`
  	<div>
  	<h1>${data.lyrics}</h1>
  	`);
}

function watchSubmit() {
  //listen for submit click
  $('.js-search-form').submit(e => {
  	e.preventDefault();
  	//assign params to pass
  	const artist = $('.js-query-artist').val();
  	const title = $('.js-query-title').val();
  	//call getDatafromApi
  	getDataFromApi(artist, title, displaySearchData);
  })
}

$(watchSubmit);