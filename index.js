// 画像とテキストを更新する関数
function upDate(previewPic) {
    // イベントがトリガーされているかを確認するためにコンソールにメッセージを表示
    console.log("画像がホバーされました！");

    // previewPicのaltおよびsrc属性を取得
    var altText = previewPic.alt;
    var imageUrl = previewPic.src;

    // previewPicのIDを取得
    var imageId = previewPic.id;

    // previewPic変数に関する情報をコンソールにログ
    console.log("Altテキスト:", altText);
    console.log("画像のソース:", imageUrl);

    // 'hoveredImage'というIDを持つ要素のテキストを更新
    document.getElementById(imageId).textContent = altText;

    // 'hoveredImage'というIDを持つ要素の背景画像を更新
    document.getElementById(imageId).style.backgroundImage = 'url(' + imageUrl + ')';
}

// 変更を元に戻す関数
function undo() {
    // 背景画像を元の値にリセット
    var imageId = event.currentTarget.id;
    document.getElementById(imageId).style.backgroundImage = "url('')";

    // テキストを元の値にリセット
    document.getElementById(imageId).textContent = "画像にホバーして表示します。";
}

// Add listeners for focus and blur events
for (var i = 1; i <= 6; i++) {
    var imageId = "hoveredImage" + i;

    document.getElementById(imageId).addEventListener('focus', function () {
        // Your focus event code here
        console.log("Image focused");
    });

    document.getElementById(imageId).addEventListener('blur', function () {
        // Your blur event code here
        console.log("Image blurred");
    });
}

// Add onload event listener
window.onload = function () {
    // Your onload event code here
    console.log("Page loaded");
};

// Function for adding tabindex attribute
function addTabFocus() {
    // Code to add tabindex attribute
}

// Loop through each image and add tabindex attribute
var images = document.querySelectorAll('img');

for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('focus', addTabFocus);
    images[i].addEventListener('blur', function () {
        // Your blur event code here
    });
}
