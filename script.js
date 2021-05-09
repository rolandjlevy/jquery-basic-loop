// using the block class
$('.block').each(function() {
  $(this).css('background-color', 'lightblue')
});

// using blocks id as the parent
$('#blocks > div').each(function() {
  $(this).css('background-color', 'lightblue')
});

var myArray = ["div1", "div2", "div3"]
$.each(myArray, function( index, div ) {
  $('#' + div).css('background-color', 'lightblue');
});