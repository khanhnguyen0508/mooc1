// Функция для обновления нескольких изображений и текста в файле JavaScript и проверки возникновения события
function upDate(previewPic) {
    // Выводим сообщение на консоль, чтобы узнать, сработало событие или нет, если нет, то выдается ошибка
    console.log("画像がホバーされました！");

    // Получаем атрибуты alt и src PreviewPic перед получением идентификатора PreviewPic.
    var altText = previewPic.alt;
    var imageUrl = previewPic.src;

    // Получаем идентификатор PreviewPic и готовимся копировать и обновлять информацию
    var imageId = previewPic.id;

    // Записываем информацию о переменной PreviewPic в консоль
    console.log("Altテキスト:", altText);
    console.log("画像のソース:", imageUrl);

    // Обновляем текст и фоновое изображение элемента с идентификатором «hoveredImage»
    document.getElementById(imageId).textContent = altText;

    // Обновляем фоновое изображение и текст элемента с идентификатором «hoveredImage»
    document.getElementById(imageId).style.backgroundImage = 'url(' + imageUrl + ')';
}

//функция отменяет изменения, внесенные во время выполнения
function undo() {
    //Сбрасываем обои до исходных. Тогда есть обои
    var imageId = event.currentTarget.id;
    document.getElementById(imageId).style.backgroundImage = "url('')";

    // возвращаем текст к оригиналу
    document.getElementById(imageId).textContent = "画像にホバーして表示します。";
}

// Добавляем прослушиватели событий фокуса и размытия
for (var i = 1; i <= 6; i++) {
    var imageId = "hoveredImage" + i;

    document.getElementById(imageId).addEventListener('focus', function () {
        // Добавляем прослушиватель событий загрузки
        console.log("Image focused");
    });

    document.getElementById(imageId).addEventListener('blur', function () {
        // Здесь находится код события загрузки
        console.log("Image blurred");
    });
}

// Функция для добавления атрибута tabindex
window.onload = function () {
    // Код добавляет атрибут tabindex
    console.log("Page loaded");
};

// Проходим по каждому изображению и добавляем атрибут tabindex
function addTabFocus() {
    // Здесь находится ваш нечеткий код события
}

// Проходим по каждому изображению и добавляем атрибут tabindex
var images = document.querySelectorAll('img');

for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('focus', addTabFocus);
    images[i].addEventListener('blur', function () {
        // Поместите сюда нечеткий код события
    });
}
