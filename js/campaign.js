$(document).ready(function() {
	$('button').click(function() {
		// saving to JSON
		var title = $('#campaignTitle').val();
		var campaign = {title:title};
		
		// go to next page
		window.location.replace('survey.php');
	}); // end click
}); // end ready