(function () {
    document.oncontextmenu = (e) => {
        //右クリックした要素のテキストを取得する
        const linkText = e.target.textContent;
        //backgroundのcontextMenus.jsに送る
        chrome.runtime.sendMessage({ linkText })
    }
}());