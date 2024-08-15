function adAstra(input){
let string = input.shift()
let pattern = /[#|](?<name>[A-Za-z\s*]*)[#|](?<date>\d{2}\/\d{2}\/\d{2})[#|](?<calories>\d+)[#|]/g
let totalDays = 0
let totalCalories = 0
let match = pattern.exec(string)
while (match){
let {name, date ,calories } = match.groups;
totalCalories += Number(match.groups['calories'])
console.log(totalCalories)

}
// console.log(`You have food to last you for: ${days} days!`)

}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']
    )