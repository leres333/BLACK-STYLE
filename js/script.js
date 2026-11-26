// МОБИЛЬНОЕ МЕНЮ
const menuToggle = document.getElementById("menuToggle");
const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function() {
        navigation.classList.toggle("active");
    });

    navigation.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function() {
            navigation.classList.remove("active");
        });
    });
}


// ФОРМА ЗАПИСИ
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("clientName").value.trim();
        const phone = document.getElementById("clientPhone").value.trim();
        const service = document.getElementById("serviceSelect").value;

        const message = document.getElementById("formMessage");

        // Проверка имени
        if (name.length < 2) {
            message.textContent = "Введите правильное имя";
            return;
        }

        // Проверка телефона
        const digits = phone.replace(/\D/g, "");

        if (digits.length < 10 || digits.length > 15) {
            message.textContent = "Проверьте номер телефона";
            return;
        }

        // Проверка услуги
        if (!service) {
            message.textContent = "Выберите услугу";
            return;
        }

        // Успешная проверка
        message.textContent =
            "Данные проверены! Это демонстрационная форма. Реальная запись пока не подключена.";

        message.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
}