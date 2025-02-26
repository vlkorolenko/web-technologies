
document.getElementById("message").textContent = "Hello world!";

// querySelectorAll для вибору всіх <li>
const listItems = document.querySelectorAll("ul li");

// Додаємо обробник події ondblclick для кожного <li>
listItems.forEach(item => {
    item.ondblclick = function() {
        // alert("Ви двічі клікнули на: " + item.textContent);
        console.error("Ім'я студента: Влад");
    };
});

// Додаємо обробник події на кнопку
document.getElementById("myButton").ondblclick = function() {
    console.error("Ім'я студента: Влад");
};
