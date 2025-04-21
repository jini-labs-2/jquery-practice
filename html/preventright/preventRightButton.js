// 方法２）右クリック禁止(pure javascript)
// document.addEventListener('contextmenu', function (e) {
//   e.preventDefault(); // 기본 우클릭 메뉴 방지
// });

// 方法３）右クリック禁止(use jquery)
$(document).on('contextmenu', function (e) {
  e.preventDefault();
});
