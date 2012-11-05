$(document).ready(function(){
	var foo = 'referrer=Baker';
	$('.content a').attr('href', function(index, attr) {
    	return attr + '?' + foo;
	});
});