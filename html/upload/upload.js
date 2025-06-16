function onClickSelectFile() {
  $('#hksFile').click();
}

function onChangeFile() {
  const $fileInput = $('#hksFile');
  const $display = $('#displayHksFile');
  const $errorMsg = $('#errorMsg');

  const files = $fileInput[0].files;
  $display.val(files[0].name);
  $errorMsg.text('');
}

function onClickUpload() {
  const $fileInput = $('#hksFile');
  const $errorMsg = $('#errorMsg');

  const files = $fileInput[0].files;
  if (files.length === 0) {
    $errorMsg.text('selct file.');
    return;
  }

  const file = files[0];
  const fs = file.size;

  if (fs < 1) {
    $errorMsg.text('file size is 0.');
    return;
  }

  if (fs > 1024) {
    $errorMsg.text('file size is too big.');
    return;
  }
  
  $errorMsg.text('');
  $('#uploadForm').onsubmit();
}