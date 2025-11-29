//№1
//  Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

const styles = ['jazz', 'blues'];
styles.push('rock-n-roll');
const index = styles.indexOf('blues');  
if (index !== -1) {
    styles[index] = 'classic';
}
function logItems(array) {
    for (let i = 0; i < array.lenght; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
//   for (const elem of array)
}

//№ 2
//  Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

function checkLogin(array) {
     const name = prompt("Enter your name:");
    if (array.includes(name)) {
    alert(`Welcome, ${name}!`);
} else {
    alert("User not found");
  }
}

const logins = ["Peter", "John", "Igor", "Sasha"];
// checkLogin(logins);

// №3
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function caclculateAverage(...args) { 
    let sum = 0;
    let count = 0;

    for (let iten of args) {
        if (typeof iten === "number") {
            sum += iten;
            count++;
    }
    }
    if (count === 0) {
     return "нет чисел"
    }
    return sum / count;
}
// console.log(caclculateAverage(10, 20, 30)); // 20
// console.log(caclculateAverage(1, 2, 3, 4)); // 2.5
// console.log(caclculateAverage(5, "x", 10)); //