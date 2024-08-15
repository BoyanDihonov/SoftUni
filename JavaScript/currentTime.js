const today = new Date();
let day = today.getDay();
let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(`Today is ${dayList[day]}`)

let dd = today.getDate()

if (dd < 10) {
    dd = '0' + dd
}

let mm = today.getMonth() + 1

if (mm < 10) {
    mm = '0' + mm;
}
let yyyy = today.getFullYear()

console.log(`The date is ${dd}/${mm}/${yyyy}`)

let hour = today.getHours()
let minute = today.getMinutes()
let seconds = today.getSeconds()

console.log(`Current time is ${hour}:${minute}:${seconds}`)

// let hour = today.getHours();
// let minute = today.getMinutes();
// let second = today.getSeconds();
// let amPm = (hour >= 12) ? " PM " : " AM ";
// hour = (hour >= 12) ? hour - 12 : hour;
// if (hour === 0 && amPm === ' PM ') {
//     if (minute === 0 && second === 0) {
//         hour = 12
//         amPm = ' Noon '
//     } else {
//         hour = 12;
//         amPm = ' PM '
//     }
// }
// if (hour === 0 && amPm === ' AM ') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         amPm = ' Midnight';
//     }
//     else {
//         hour = 12;
//         amPm = ' AM';
//     }
// }
// console.log("Current Time : " + hour + amPm + " : " + minute + " : " + second);

