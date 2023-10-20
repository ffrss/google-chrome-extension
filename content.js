// Загружаем файл script.js
const script = document.createElement("script");
script.defer = true;
script.src = chrome.extension.getURL("script.js");

// Выполняем файл script.js в контенте страницы
document.documentElement.appendChild(script);
