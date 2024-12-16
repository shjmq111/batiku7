        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "部屋の掃除"; // デフォルトの値

            if (colour === "黒" && number === 0) {
                result = "部屋の掃除";
            } else if (colour === "黒" && number === 1) {
                result = "勉強";
            } else if (colour === "黒" && number === 2) {
                result = "部屋の掃除";
            } else if (colour === "白" && number === 0) {
                result = "勉強";
            } else if (colour === "白" && number === 1) {
                result = "勉強";
            } else if (colour === "白" && number === 2) {
                result = "部屋の掃除";
            } else if (colour === "オレンジ" && number === 0) {
                result = "ショッピング";
            } else if (colour === "オレンジ" && number === 1) {
                result = "ショッピング";
            } else if (colour === "オレンジ" && number === 2) {
                result = "ショッピング";
            }

            document.getElementById('result-output').innerText = "今日することはズバリ…⁉【" + result + "】です";
        }
