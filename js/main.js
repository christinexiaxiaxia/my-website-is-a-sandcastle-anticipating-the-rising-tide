// CHECK MOUSEMOVE TIMEOUT https://stackoverflow.com/questions/14094272/jquery-detect-if-the-mouse-is-still

var timeout = null;

$(document).on('mousemove', function() {
    clearTimeout(timeout);

	$('.wrapper').stop().animate({opacity: 1.0}, 2000, function() { // LENGTH OF TIME FOR BLUE FADE OUT ON MOUSE MOVE
		$('.wrapper').toggle('fast', function(){
			$('.wrapper').animate({opacity: 1})
		})
	});
	console.log("Mouse is moving")

    timeout = setTimeout(function() {
		$('.wrapper').stop().animate({opacity: 0}, 15000, function() { // LENGTH OF TIME FOR BLUE TO FADE IN WHEN MOUSE STILL
			// $('.wrapper').toggle('fast', function (){
				// $('.wrapper').animate({opacity: 1});
			// })
		});
		console.log("Mouse is idle")
    }, 1000); // LAG BEFORE BLUE STARTS APPEARING
});