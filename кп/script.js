// Устанавливаем начальный индекс слайда равным 1
var slideIndex = 1;

// Вызываем функцию showSlides() для отображения слайда с индексом slideIndex
showSlides(slideIndex);

// Функция для переключения на следующий слайд
function plusSlide() {
    showSlides(slideIndex += 1);
}

// Функция для переключения на предыдущий слайд
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

// Функция для переключения на определенный слайд
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Функция для отображения слайдов
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item"); // Получаем все элементы с классом "item" (слайды)
    var dots = document.getElementsByClassName("slider-dots_item"); // Получаем все элементы с классом "slider-dots_item" (точки управления слайдером)
    
    // Если значение индекса слайда больше количества слайдов, устанавливаем индекс на первый слайд
    if (n > slides.length) {
      slideIndex = 1;
    }
    
    // Если значение индекса слайда меньше 1, устанавливаем индекс на последний слайд
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Скрываем все слайды
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Удаляем класс "active" у всех точек управления слайдером
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Отображаем текущий слайд
    slides[slideIndex - 1].style.display = "block";
    
    // Добавляем класс "active" текущей точке управления слайдером
    dots[slideIndex - 1].className += " active";
}
