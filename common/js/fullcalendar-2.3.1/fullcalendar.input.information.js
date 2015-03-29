jQuery.noConflict();
    (function($) {
      $(document).ready(function () {
	$('#calendar').fullCalendar({

	  googleCalendarApiKey: 'AIzaSyB7M5IyWkvJOQsbhuxGbXQmTMZSE50YrhE',
	  
	  events:{
	    googleCalendarId: 'hoseisofttenniskoganei@gmail.com'
	  }
	});
      });
    })(jQuery);
