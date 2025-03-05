function findMinMax(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
}

console.log(findMinMax([3, 7, 2, 9, 5]));


function compareObjects(obj1, obj2, property) {
    if (!obj1.hasOwnProperty(property) || !obj2.hasOwnProperty(property)) {
        return "Властивість не знайдено!";
    }
    return obj1[property] === obj2[property] ? "Об'єкти рівні" : "Об'єкти різні";
}

const person1 = { name: "Іван", age: 25 };
const person2 = { name: "Марія", age: 25 };

console.log(compareObjects(person1, person2, "age"));
console.log(compareObjects(person1, person2, "name"));

function isInRange(num, min, max) {
    return num >= min && num <= max;
}

console.log(isInRange(10, 5, 15));
console.log(isInRange(20, 5, 15));

// let isActive = true;
// isActive = !isActive;
// console.log(isActive);
//
// isActive = !isActive;
// console.log(isActive);


function getGradeDescription(grade) {
    if (grade >= 90) {
        return "Відмінно";
    } else if (grade >= 75) {
        return "Добре";
    } else if (grade >= 60) {
        return "Задовільно";
    } else {
        return "Незадовільно";
    }
}

console.log(getGradeDescription(85));
console.log(getGradeDescription(45));


// function getSeasonIf(month) {
//     if (month >= 3 && month <= 5) {
//         return "Весна";
//     } else if (month >= 6 && month <= 8) {
//         return "Літо";
//     } else if (month >= 9 && month <= 11) {
//         return "Осінь";
//     } else if (month === 12 || month === 1 || month === 2) {
//         return "Зима";
//     } else {
//         return "Некоректний місяць";
//     }
// }
//
// console.log(getSeasonIf(7));


function getSeasonTernary(month) {
    return (month >= 3 && month <= 5) ? "Весна" :
        (month >= 6 && month <= 8) ? "Літо" :
            (month >= 9 && month <= 11) ? "Осінь" :
                (month === 12 || month === 1 || month === 2) ? "Зима" :
                    "Некоректний місяць";
}

console.log(getSeasonTernary(10));
