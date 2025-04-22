$(document).on("contextmenu", function(event) {
  if ($(event.target).closest('.allowrightbutton_area').length) {
    event.preventDefault();
    $('#customCopyMenu')
      .css({top: event.pageY, left: event.pageX})
      .fadeIn(150);
  } else {
    $('#customCopyMenu').fadeOut(100);
    event.preventDefault();
  }
})

$(document).on('click', '#customCopyMenu .menu-item', function() {
  const action = $(this).data('action');
  console.log('action => ' + action);

  if (action == 'copy') {
    console.log('copy to clipboard');
  } else if (action == 'paste') {
    console.log('paste from clipboard');
  } else {
    console.log('unknown action');
  }
});

$(document).on('click', function() {
  $('#customCopyMenu').fadeOut(100);
})
