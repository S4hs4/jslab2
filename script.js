// Допоміжна функція для відображення консольних повідомлень на сторінці
function logToPage(message) {
  const logDiv = document.getElementById("consoleOutput");
  logDiv.textContent += "\n" + message;
  console.log(message);
}

// -------------------------------------------------------------
// Рівень 4-6 балів
// -------------------------------------------------------------

// 1. Повідомлення через prompt та alert з шаблонним рядком
document.getElementById("btnTask1_1").addEventListener("click", () => {
  const userName = prompt("Введіть своє ім'я:", "Олександр");
  if (userName) {
    alert(`Hello, ${userName}! Welcome to JavaScript`);
  }
});

// 2. Розрахунок року народження
document.getElementById("btnTask1_2").addEventListener("click", () => {
  const ageStr = prompt("Введіть ваш вік:");
  const age = parseInt(ageStr, 10);
  if (!isNaN(age)) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    alert(`You were born in ${birthYear}`);
  }
});

// 3. Повне ім'я через + та шаблонний рядок
document.getElementById("btnTask1_3").addEventListener("click", () => {
  const firstName = prompt("Введіть ім'я:", "Олександр") || "";
  const lastName = prompt("Введіть прізвище:", "Дебенко") || "";

  // Конкатенація через +
  const fullNamePlus = "Your full name is " + firstName + " " + lastName;

  // Шаблонний рядок
  const fullNameTemplate = `Your full name is ${firstName} ${lastName}`;

  logToPage("[Task 4-6 #3 - Конкатенація +]: " + fullNamePlus);
  logToPage("[Task 4-6 #3 - Шаблонний рядок]: " + fullNameTemplate);
});

// -------------------------------------------------------------
// Рівень 7-9 балів
// -------------------------------------------------------------

// 1. Глобальна та локальна змінні у блоці if
document.getElementById("btnTask2_1").addEventListener("click", () => {
  let userName = "Олександр (Глобальна)";
  logToPage("--- Завдання 7-9 #1 ---");
  logToPage("До блоку if: " + userName);

  if (true) {
    let userName = prompt("Введіть нове ім'я для блоку if:", "Іван");
    logToPage("Всередині блоку if (Локальна): " + userName);
  }

  logToPage("За блоком if (Глобальна залишилася): " + userName);
  logToPage(
    "Пояснення: let має блочну область видимості, тому локальна змінна всередині if не змінює зовнішню.",
  );
});

// 2. Confirm перевірка
document.getElementById("btnTask2_2").addEventListener("click", () => {
  const name = prompt("Введіть ім'я:", "John") || "John";
  const age = prompt("Введіть вік:", "20") || "20";

  const isContinue = confirm(`Hello, ${name}! Your age is ${age}. Continue?`);
  if (isContinue) {
    alert("Welcome!");
  } else {
    alert("Goodbye!");
  }
});

// 3. Перевірка числа на парність через %
document.getElementById("btnTask2_3").addEventListener("click", () => {
  const numStr = prompt("Введіть число:");
  const num = parseInt(numStr, 10);

  if (isNaN(num)) {
    alert("Це не число!");
    return;
  }

  if (num % 2 === 0) {
    alert("Number is even");
  } else {
    alert("Number is odd");
  }
});

// -------------------------------------------------------------
// Рівень 10-12 балів
// -------------------------------------------------------------

// 1. Функція calculate() та блочна область видимості
function calculate() {
  let result = 10;
  logToPage("--- Завдання 10-12 #1 ---");
  logToPage("У функції calculate() до if: result = " + result);

  if (true) {
    let result = 99;
    logToPage("Всередині блоку if: result = " + result);
  }

  logToPage("У функції calculate() після if: result = " + result);
}

document.getElementById("btnTask3_1").addEventListener("click", () => {
  calculate();
});

// 2. Гра вгадай secretNumber
document.getElementById("btnTask3_2").addEventListener("click", () => {
  const JOURNAL_NUMBER = 3; // Номер у журналі
  const secretNumber = JOURNAL_NUMBER % 10; // 7 % 10 = 7

  const userGuessStr = prompt("Вгадайте секретне число від 0 до 9:");
  const userGuess = parseInt(userGuessStr, 10);

  if (userGuess === secretNumber) {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
});

// 3. Сума чисел через конкатенацію +
document.getElementById("btnTask3_3").addEventListener("click", () => {
  const name = prompt("Введіть важе ім'я:", "John") || "John";
  const num1Str = prompt("Введіть перше число:", "5") || "0";
  const num2Str = prompt("Введіть друге число:", "7") || "0";

  const num1 = parseFloat(num1Str);
  const num2 = parseFloat(num2Str);
  const sum = num1 + num2;

  // Використання конкатенації через оператор +
  const message =
    "Hello, " + name + "! The sum of " + num1 + " and " + num2 + " is " + sum;

  logToPage("[Task 10-12 #3]: " + message);
});
