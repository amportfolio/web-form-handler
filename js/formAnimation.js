// Contact Form label functionality
//
var B = jQuery.noConflict();

B('.sampleForm form .formField').change(function() {
  if (jQuery( this ).val() != "") {
    jQuery( this ).addClass('filled');
  } else {
    jQuery( this ).removeClass('filled');
  }
});

B('.sampleForm form .formArea').change(function() {
  if (jQuery( this ).val() != "") {
    jQuery( this ).addClass('filled');
  } else {
    jQuery( this ).removeClass('filled');
  }
});