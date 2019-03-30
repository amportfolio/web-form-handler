// jQuery Web Form Handler
// Version 1.0 by Alex Moschopoulos

// Keeping this script from conflicting with other jQuery scripts.
var K = jQuery.noConflict();

K(function() {
	K(".submit").click(function() {
		// The "processing" message appears.
		K('.success').fadeOut(100).hide();
	    K('.error').fadeIn(100).hide();
	    K('.processing').fadeIn(100).show();

	    // The data collection from your form fields.
	    // Edit these to fit your needs.
		var cForm01 = K("#cForm01").val();
		var cForm02 = K("#cForm02").val();
		var cForm03 = K("#cForm03").val();
		var cForm04 = K("#cForm04").val();
		var dataString = 'cForm01='+ cForm01 + '&cForm02=' + cForm02 + '&cForm03=' + cForm03 + '&cForm04=' + cForm04;

		// Checking to see if required fields are fulfilled
		if(cForm01=='' || cForm02=='' || cForm03=='' || cForm04=='') {
			// The "error" message appears.
			K('.processing').fadeOut(100).hide();
			K('.success').fadeOut(100).hide();
		    K('.error').fadeIn(100).show();
		} else {
			// AJAX call to formHandler.php to send the data via email.
			K.ajax({
			type: "POST",
    		url: "formHandler.php",
		    data: dataString,
		    success: function(){
		    	// The "success" message appears.
				K('.processing').fadeOut(100).hide();
				K('.success').fadeIn(100).show();
			    K('.error').fadeOut(100).hide();
			    // Form fields are cleared.
				document.form.reset();
		   		}
			});
		}
	return false;
	});
});