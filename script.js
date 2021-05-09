// using the block class
$('.block').each(function() {
  $(this).css('background-color', 'lightblue')
});

// using blocks id as the parent
$('#blocks > div').each(function() {
  $(this).css('background-color', 'lightblue')
});