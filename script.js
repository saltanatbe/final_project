
//создаем переменную для часов
let clock = document.querySelector('.clock');
//создаем событие DOMContentLoaded

// Создаем функцию полной загрузки
function loaded() {
    //то, что будет выполняться после задержки: добавляем body класс loaded
    document.body.classList.add('loaded');
    //убираем body класс loaded_hiding
    document.body.classList.remove('loaded_hiding');
    //добавляем часам класс clockHide
    clock.classList.add('clockHide');
    //убираем у часов класс clockShow
    clock.classList.remove('clockShow');
}

// Создаем функцию начала загрузки
function start() {
    //добавляем body класс loaded_hiding
    document.body.classList.add('loaded_hiding');
    //добавляем часам класс clockShow
    clock.classList.add('clockShow');
    // Используем setTimeout для вызова функции loaded с задержкой
    //у нас это 3000 миллисекунд или 3 секунды
    setTimeout(loaded, 3000);
}

// Обрабатываем событие 'DOMContentLoaded', вызывая функцию start
document.addEventListener('DOMContentLoaded', start);