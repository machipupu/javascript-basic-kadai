// btnというidを取得し定数に代入
const btn = document.getElementById('btn');

// クリックされたときにイベント処理を実行
btn.addEventListener('click', () => {
  // <h2> 要素を取得し、テキストを更新
  const text = document.getElementById("text");
  text.textContent = "ボタンをクリックしました";
});