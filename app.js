// 今日すること占いを実行する関数

function checkFortune() {

  const sushi = document.getElementById('colour-select').value;  // 選んだ寿司ネタ

  const number = document.getElementById('number-input').value; // 選んだ数字

  let fortune = "";

  let colorClass = "";

  // 占い結果の判定

  if (sushi === "マグロ" && number == 0) {

    fortune = "今日は元気に外出する日！新しい発見があるかも！";

    colorClass = "success";  // 成功の時は緑色

  } else if (sushi === "サーモン" && number == 1) {

    fortune = "今日はリラックスする日。家でのんびり過ごしてね！";

    colorClass = "relaxed";  // リラックスした結果

  } else if (sushi === "いくら" && number == 2) {

    fortune = "今日は冒険的な一日！思い切って新しいことに挑戦しよう！";

    colorClass = "adventure";  // 冒険的な結果

  } else {

    fortune = "今日は何か新しい発見がある日かも！";

    colorClass = "mystery";  // 謎めいた結果

  }

  // 結果を画面に表示

  const resultText = document.getElementById('result-output');

  resultText.textContent = fortune;

  resultText.className = 'result-text ' + colorClass;  // クラスを追加して色を変える

} 
