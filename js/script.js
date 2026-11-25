/* КНОПКА МОБИЛЬНОГО МЕНЮ */

.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: #c9a45c;
    font-size: 30px;
    cursor: pointer;
}

/* НАСТРОЙКИ ТЕЛЕФОНОВ */

@media (max-width: 768px) {

    .menu-toggle {
        display: block;
    }

    .navigation {
        display: none;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 20px;
        background-color: #151515;
    }

    .navigation.active {
        display: flex;
    }

}// НАХОДИМ ФОРМУ

const bookingForm = document.getElementById("bookingForm");


// ОБРАБОТКА ОТПРАВКИ

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("clientName").value;

    const phone = document.getElementById("clientPhone").value;

    const service = document.getElementById("serviceSelect").value;

    const message = document.getElementById("formMessage");


    if (name.trim() === ""  phone.trim() === ""  service === "") {

        message.textContent = "Заполни все поля!";

        return;

    }


    message.textContent = "Спасибо, " + name + "! Заявка заполнена.";

    bookingForm.reset();

});