<?php

if($_POST) {

	// The data coming in. You'll need to
	// edit this area to fit your form.
	$userName = $_POST['cForm01'];
	$yourEmail = $_POST['cForm02'];
	$sendTo = $_POST['cForm03'];
	$comment = $_POST['cForm04'];

	// Removes any HTML for security reasons.
	$userName = strip_tags($userName);
	$email = strip_tags($email);
	$sendTo = strip_tags($sendTo);
	$comment = strip_tags($comment);

	// Setting up the email
	$To = "$sendTo";
	$Subject = "Email form submission.";
	$Message = "$comment\r\n";
	$Extra = "From: $userName <$email>\r\n";

	// Sending the email
	mail($To, $Subject, $Message, $Extra);

}

?>