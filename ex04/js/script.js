let num1 = "";
let num2 = "";
let op = null;

let pantalla = document.getElementById("pantalla")

let buttons = document.querySelectorAll("button.number")
buttons.forEach(button => {
    button.addEventListener("click", function(){
        if (op == null){
            num1 += button.textContent
            pantalla.value = num1
        }else{
            num2 += button.textContent
            pantalla.value = num1 + " " + op + " " + num2
        }
    }, false)
});

let operation2num_buttons = document.querySelectorAll("button.operation2num")
operation2num_buttons.forEach(button => {
    button.addEventListener("click", function(){
        if (op == null){
            op = button.textContent
            pantalla.value = pantalla.value + " " + op
        }
    }, false)
});

function polaridad(){
    if (op == null){
        let polarity = num1.charAt(0);
        if (polarity != "-"){
            num1 = "-" + num1
        }else{
            num1 = num1.slice(1)
        }
        pantalla.value = num1
    }else{
        let polarity = num2.charAt(0);
        if (polarity != "-"){
            num2 = "-" + num2
        }else{
            num2 = num2.slice(1)
        }
        pantalla.value = num1 + " " + op + " " + num2
    }
}

function retr(){
    num1 = num1.slice(0, -1)
    pantalla.value = num1
}

function ce(){
    if (num2 == ""){
        num1 = ""
        op = null
        pantalla.value = num1
    }else{
        num2 = ""
        pantalla.value = num1 + " " + op + " " + num2
    }
}

function clr(){
    reset()
    pantalla.value = num1
}

function reset(){
    num1 = "";
    num2 = "";
    op = null;
}

function calc(){
    let number1 = Number(num1)
    let number2 = Number(num2)
    switch (op) {
        case "/":
            pantalla.value = number1 / number2
            break;
        
        case "*":
            pantalla.value = number1 * number2
            break;

        case "-":
            pantalla.value = number1 - number2
            break;

        case "+":
            pantalla.value = number1 + number2
            break;
    
        default:
            break;
    }
    reset()
}

function raiz(){
    pantalla.value = Math.sqrt(num1)
    reset()
}

function porcentaje(){
    pantalla.value = "No se que hace '%'"
    reset()
}

function unoEntre(){
    pantalla.value = 1 / Number(num1)
    reset()
}