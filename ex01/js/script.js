let dict = {2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0, 12:0};
let result = "";

for (let i = 0; i < 36000; i++) {
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;
    let suma = num1 + num2;
    dict[suma]++;
}

for (let key in dict) {
    let value = dict[key];
    result += ("" + key + " : " + value + "\n")
}

alert(result)