$(function(){
	$.validate({
        modules : 'security'
    });
})


$(document).ready(function() {
    // Initialize form validation
    $.validate({
      form: '#myForm',
      onSuccess: function() {
        // Display alert on successful form submission
        alert('Account created successfully!');
      }
    });
  });