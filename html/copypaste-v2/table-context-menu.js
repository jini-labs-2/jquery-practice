let clipboardData = '';
let clickedCell = null;

$(document).ready(function() {
  // ポップアップメニューを用意する。
  const $menu = $(`
    <div class="context-menu" id="contextMenu" style="display:none; position:absolute; z-index:1000; background:#fff; border:1px solid #aaa; border-radius: 5px;">
      <ul style="list-style:none; margin:0; padding:5px 0;">
        <li id="copy" style="padding:5px 15px; cursor:pointer;">コピー<span>Ctrl+C</span></li>
        <li id="paste" style="padding:5px 15px; cursor:pointer;">貼り付け<span>Ctrl+V</span></li>
      </ul>
    </div>
  `).appendTo('body');

  // ポップアップメニューホバーをハンドルする。
  $menu.find("li").hover(
    function() {
      $(this).css("background-color", "#f0f0f0");
    },
    function() {
      $(this).css("background-color", "");
    }
  );

  // 右クリックでブラウザーのメニューを表示しないようにする。
  $(document).on('contextmenu', function(e) {
    if (!$(e.target).closest('#myTable td:nth-child(1), #myTable td:nth-child(4)').length) {
      e.preventDefault();
      $('#contextMenu').hide();
    }
  })

  // 右クリックでポップアップを表示する。
  $('#myTable').on('contextmenu', 'td:nth-child(1), td:nth-child(4)', function(e) {
    e.preventDefault();
    clickedCell = $(this);
    $('#contextMenu').css({
      top: e.pageY + 'px',
      left: e.pageX + 'px'
    }).show();
  });

  // ポップアップメニューからコピーをクリックした場合の処理
  $('#contextMenu').on('click', '#copy', async function() {
    if (!clickedCell) return;

    const row = clickedCell.closest('tr').find('td')
    if (clickedCell.index() === 0) {
      clipboardData = [
        row.eq(0).text(),
        row.eq(1).text(),
        row.eq(2).text()
      ];
    } else if (clickedCell.index() === 3) {
      const text = row.eq(3).text() + '\t' + row.eq(4).text();
      clipboardData = text;
      try {
        await navigator.clipboard.writeText(text);
      } catch (err) {
        console.error('クリップボードコピー失敗:', err);
      }
    }
    console.log('--s0190--:', clipboardData);

    $('#contextMenu').hide();
  });

  // ポップアップメニューから貼り付けクリックした場合の処理
  $('#contextMenu').on('click', '#paste', async function() {
    if (!clickedCell) return;
    console.log('--s0200--:', clipboardData);

    const row = clickedCell.closest('tr').find('td')
    if(clickedCell.index() === 0 && Array.isArray(clipboardData)) {
      row.eq(0).text(clipboardData[0]);
      row.eq(1).text(clipboardData[1]);
      row.eq(2).text(clipboardData[2]);
    } else if (clickedCell.index() === 3) {
      try {
        const text = await navigator.clipboard.readText();
        const parts = text.split('\t');
        if (parts.length === 2) {
          row.eq(3).text(clipboardData[0]);
          row.eq(4).text(clipboardData[1]);
        }
      } catch(err) {
        console.error('クリップボード読み込み失敗:', err);
      }
    }

    $('#contextMenu').hide();
  });

  // 枠外をクリックの場合ポップアップメニューを非表示
  $(document).on('click', function() {
    $('#contextMenu').hide();
  })

});