$(document).ready(function () {
  const dropAreas = $('.drop-area');

  dropAreas.each(function() {
    const $dropArea = $(this);
    const fileInput = $dropArea.find('.file-input')[0];
    const fileListId = $dropArea.data('file-list-id');
    const $fileList = $('#' + fileListId);

    // ドラッグオーバー処理
    $dropArea.on('dragover', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $dropArea.addClass('hover');
    });

    $dropArea.on('dragleave', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $dropArea.removeClass('hover');
    });

    // ドロップ処理
    $dropArea.on('drop', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $dropArea.removeClass('hover');

      const files = e.originalEvent.dataTransfer.files;
      handleFiles(files, $fileList);
    });

    fileInput.addEventListener('change', function() {
      const files = this.files;
      handleFiles(files, $fileList);
    });
  });

  function handleFiles(files, $fileList) {
    $fileList.empty();
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const listItem = file.name;
      $fileList.prepend(listItem);
    }
  }
})
