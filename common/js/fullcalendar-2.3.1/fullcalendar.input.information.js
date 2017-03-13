jQuery.noConflict();
(function($) {
    $(document).ready(function () {
	$('#calendar').fullCalendar({

	    // googleCalendarApiKey: 'AIzaSyB7M5IyWkvJOQsbhuxGbXQmTMZSE50YrhE',
	    googleCalenderApiKey: 'AIzaSyAvqtb4BwbRRgU66-8DUV5MFMGweMqYcNk',
	    
	    events:{
		// googleCalendarId: 'hoseisofttenniskoganei@gmail.com'
		googleCalenderId: 'h.kotairen.softtennis@gmail.com'
	    }
	});
    });
})(jQuery);
