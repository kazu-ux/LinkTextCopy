let linkText = ""

chrome.contextMenus.create({
    "title": "リンクテキストをコピーする",
    "type": "normal",
    "contexts": ["link"],
    "onclick": (info) => {
        saveToClipboard(linkText);
    }
})

chrome.runtime.onMessage.addListener((req) => {
    //変数linkTextにclikcEventから送られた要素を入れる
    linkText = req.linkText;
})

//テキストをクリップボードにコピーする
const saveToClipboard = (str) => {
    const textArea = document.createElement("textarea");

    document.body.appendChild(textArea);

    textArea.value = str;
    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);
}