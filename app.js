// 今日することを決める関数

function checkFortune() {

    const sushi = document.getElementById("colour-select").value; // 選んだ寿司ネタ

    const number = document.getElementById("number-input").value; // 入力した数字

    // 数字が0, 1, 2でない場合は警告を出す

    if (number < 0 || number > 2 || number === "") {

        alert("0, 1, 2の数字を入力してください。");

        return;

    }

    // ランダムな結果を生成

    const activities = [

        "今日はリラックスして過ごしましょう！",

        "新しいことに挑戦するのに最適な日です。",

        "友達と楽しい時間を過ごしてください！"

    ];

    // 結果を決定

    const result = activities[number] + " 寿司ネタは" + sushi + "です！";

    // 結果を表示

    document.getElementById("result-output").textContent = result;

} 
