function onClickSelectFile() {
  document.getElementById('hksFile').click();
}

function onChangeFile() {
  const fileInput = document.getElementById('hksFile');
  const display = document.getElementById('displayHksFile');
  const errorMsg = document.getElementById('errorMsg');

  if (fileInput.files.length > 0) {
    display.value = fileInput.files[0].name;
    errorMsg.textContent = '';
  } else {
    display.value = '';
  }
}

function onClickUpload() {
  const fileInput = document.getElementById('hksFile');
  const errorMsg = document.getElementById('errorMsg');

  if (fileInput.files.length === 0) {
    errorMsg.textContent = 'selct file.';
    return;
  }

  const file = fileInput.files[0];
  const fs = file.size;

  if (fs < 1) {
    errorMsg.textContent = 'file size is 0.';
    return;
  }

  if (fs > 1024) {
    errorMsg.textContent = 'file size is too big.';
    return;
  }
  
  errorMsg.textContent = '';
  document.getElementById('uploadForm').onsubmit();
}