// Завдання 1: Сума перших 10 чисел Фібоначчі
function sumFibonacci() {
    let a = 0, b = 1, sum = 0, count = 0;
    while (count < 10) {
        sum += a;
        let temp = a + b;
        a = b;
        b = temp;
        count++;
    }
    console.log("1. Сума перших 10 чисел Фібоначчі:", sum);
}
sumFibonacci();

// Завдання 2: Сума всіх простих чисел від 1 до 1000
function sumPrimes() {
    let sum = 0;
    for (let num = 2; num <= 1000; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) sum += num;
    }
    console.log("2. Сума всіх простих чисел від 1 до 1000:", sum);
}
sumPrimes();

// Завдання 3: Відповідний день тижня
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1: console.log("3. Понеділок"); break;
        case 2: console.log("3. Вівторок"); break;
        case 3: console.log("3. Середа"); break;
        case 4: console.log("3. Четвер"); break;
        case 5: console.log("3. П’ятниця"); break;
        case 6: console.log("3. Субота"); break;
        case 7: console.log("3. Неділя"); break;
        default: console.log("3. Некоректне число, введіть від 1 до 7.");
    }
}
getDayOfWeek(3);

// Завдання 4: Фільтр рядків з непарною довжиною
function filterOddLengthStrings(strings) {
    return strings.filter(str => str.length % 2 !== 0);
}
console.log("4. Масив з непарними довжинами:", filterOddLengthStrings(["apple", "banana", "kiwi", "grape"]));

// Завдання 5: Стрілкова функція для збільшення кожного числа на 1
const incrementArray = numbers => numbers.map(num => num + 1);
console.log("5. Масив після збільшення на 1:", incrementArray([1, 2, 3, 4, 5]));

// Завдання 6: Перевірка, чи сума або різниця чисел дорівнює 10
function checkSumOrDifference(a, b) {
    return (a + b === 10 || Math.abs(a - b) === 10);
}
console.log("6. Чи сума або різниця дорівнює 10:", checkSumOrDifference(7, 3)); // true
console.log("6. Чи сума або різниця дорівнює 10:", checkSumOrDifference(20, 10)); // true
console.log("6. Чи сума або різниця дорівнює 10:", checkSumOrDifference(4, 5)); // false
