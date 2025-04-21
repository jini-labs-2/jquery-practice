$(document).ready(function () {
  const $dropArea = $('#drop-area');
  const $fileInput = $('#fileInput');
  const $fileList = $('#file-list');

  // ファイル情報出力
  function showFileInfo(file) {
    $fileList.text(`ファイル名: ${file.name}`);
  }

  // ファイル選択ボタン
  $('#fileButton').on('click', function () {
    $fileInput.click();
  });

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
    if (files.length > 0) {
      showFileInfo(files[0]);
    }
  });

  // input ファイル選択処理
  $fileInput.on('change', function (e) {
    const file = e.target.files[0];
    if (file) {
      showFileInfo(file);
    }
  });
});