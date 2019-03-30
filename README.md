# jQuery Web Form Handler 1.0

In today’s modern website, having your simple forms function with a page refresh is outdated thinking, and a poor user experience. Many times we’ve all seen older forms like those hang on the loading of a confirmation page, and while the site owner gets their data, the end user might think something went wrong.

Using technology such as JavaScript and PHP allows us to create a smoother experience for the end user. Now while many new frameworks and content management systems offer form handling as a feature or module, this handly little script is great for those who like to at things without the overhead.

## Getting Set Up

You will need jQuery for this particular script if you wish to use it. Eventually I’ll update this script to go vanilla or utilize other setups.

Your first step is to set up a web form for you to use. I did include the JavaScript to give that “material” feel to the form, but it’s not part of the handler. Be sure to set up your form to send data via post:

    <form role="form" method="post" name="form">

Also make sure you use IDs for your form fields.

When you are ready with your form, then you’ll need to configure the *jqueryWebForm.js* file to fit your form. Look at lines 12-16. These lines pull the data from your form fields (you can see why you need to make sure you have IDs on those fields) and creates a datastring that will be fed into whatever you use to process said data.

    var cForm01 = K("#cForm01").val();
    var cForm02 = K("#cForm02").val();
    var cForm03 = K("#cForm03").val();
    var cForm04 = K("#cForm04").val();
    var dataString = 'cForm01='+ cForm01 + '&cForm02=' + cForm02 + '&cForm03=' + cForm03 + '&cForm04=' + cForm04;

The first four lines are for the individual form fields. You’ll need one for each form field you are collecting data from, so if your form has seven fields then you need seven lines there. You can name the variables anything you like, and you tie them to the IDs from your form fields.

The fifth line is the data string that will be sent via post to the PHP Handler that will process your data. We’ll get into that PHP Handler later, but as you can see, every variable you use is made into a string that is remiscent of a querystring, but obviously won’t be visible.

After you set up your data string, you’ll also need to edit line 18, as it pertains to which fields you want as "required":

    if(cForm01=='' || cForm02=='' || cForm03=='' || cForm04=='') {

This is currently set up make all the fields required, but you can add or remove any of those fields as you see fit. I kept this simple for example reasons, but you could modify this further with several if statements or a switch to call out specfic fields that need to be filled.

From there, the script is set up to show the error messaage if the if statement isn’t satisfied, or to send the data to the PHP Handler we will have in place to process said data. The URL on line 25 is our php page that will process the data, and the success function shows the "success" message to the end user.

## The PHP Handler

The file formHandler.php is where the data goes to be sent out via email. You can also set up this file to connect to a database and place the data in if you know how, but we’re sticking to email for this exercise.

Setting this file up for your needs isn’t difficult. Lines 5-8 are where your data is collected from the data string sent from *jqueryWebForm.js*.

    $userName = $_POST["cForm01"];
    $yourEmail = $_POST["cForm02"];
    $sendTo = $_POST["cForm03"];
    $comment = $_POST["cForm04"];

You will need to set up one of these lines for each piece of data you have coming in. The variables are up to you as you see fit. There are also corresponding lines that will strip any and all html tags out of the data that comes on. Totally optional, but ideal for security reasons.

    $userName = strip_tags($userName);
    $email = strip_tags($email);
    $sendTo = strip_tags($sendTo);
    $comment = strip_tags($comment);

The next part is what sets up the polished data to be emailed.

    $To = "$sendTo";
    $Subject = "Email form submission.";
    $Message = "$comment\r\n";
    $Extra = "From: $userName <$email>\r\n";

If you wish to have a dedicated email this data is sent to, then you can remove the $sendTo variable and simply put in an email address. If you’re having several form fields you wish to send in the message area, you can set it up as a string with the carriage return and new line syntax (/r/n) in between them. Here’s an example:

    $Message = "$firstName $lastName\r\n$address1\r\n$address2\r\n$city, $state $zipCode\r\n";

This would obviously send a full name and address, if you had set up the form to do that.

If you have it all set, then you should be good to go from there. Just link *jqueryWebForm.js* on your web form and let it fly.

## What about form security?

I’m sure any experienced web developer would look at this form and ask about security. I will admit I did not put any security measures here because I didn’t want to give away to the public how I secure my forms. I will say though that securing forms is important and not to overlook it, unless you like loads of spam from bots.

## Questions? Comments? Suggestions?

Please feel free to reach out or fork this and improve on it.

## Authors

* **Alex Moschopoulos** - *Initial work* - [amportfolio](https://github.com/amportfolio)

## Acknowledgments

* Bootstrap...it was a nice start, but it drove me to push for more.
* SCSS...I love it