$(document).on("contextmenu", function(event) {
  const allowedId = 'allowrightbutton_area';
  //const allowedId = 'myElement';

  if ($(event.target).closest('#' + allowedId).length) {
    event.preventDefault();
    $('#customCopyMenu')
      .css({top: event.pageY, left: event.pageX})
      .fadeIn(150);
  } else {
    $('#customCopyMenu').fadeOut(100);
    event.preventDefault();

  }
})

$('#customCopyMenu .menu-item').on('click', function() {
  const action = $(this).data('action');
  console.log('action => '+ action)
})
