// load-header-footer

function loadContent(selector, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(error => console.error(`Ошибка загрузки ${filePath}:`, error));
}

document.addEventListener('DOMContentLoaded', function () {
    loadContent('#header', 'header.html'); // Загрузка шапки
    loadContent('#footer', 'footer.html'); // Загрузка подвала
});