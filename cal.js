
let oneincree = document.getElementById("oneincrement")
let onedecree = document.getElementById("onedecrement")
let oneincree2 = document.getElementById("secondincrement")
let onedecree2 = document.getElementById("seconddecrement")
let firstvalue = document.getElementById("firstvalue")
let secondvalue = document.getElementById("secondvalue")
let operator = document.querySelector(".opearor_style")
let add = document.getElementById("add")
let substract = document.getElementById("substract")
let divide = document.getElementById("divide")
let multipication = document.getElementById("multi")
let header = document.getElementById("header-color")
let button = document.getElementById("only_button")
let operatorcolor = document.getElementById("operator-color")
let answer = document.querySelector(".answer")
let menu = document.getElementById("justchange")

let num1 = 0;
let num2 = 0
let operation = "+";

//<<-----------through these i am increment and decrement the number by one on clicking-------->> 

oneincree.addEventListener("click", function (){
    num1 = Number(firstvalue.value)
    num1++;
    firstvalue.value = num1++
})

onedecree.addEventListener("click", function(){
    num1 = Number(firstvalue.value)
    num1--;
    firstvalue.value = num1;
})

oneincree2.addEventListener("click",function(){
    num2 = Number(secondvalue.value)
    num2++;
    secondvalue.value = num2
})

onedecree2.addEventListener("click", function(){
    num2 = Number(secondvalue.value)
    num2--;
    secondvalue.value = num2
})
//<<----------------------------------------------------->>

//<<----------on click symbol of the operation will change and it also help us in later code--------------->>

add.addEventListener("click", function(){
    operator.textContent = "+"
    header.style.background = "#f1c40f"
    button.style.background = "#f1c40f"
    operatorcolor.style.color = "#f1c40f"
    firstvalue.style.color = "#f1c40f"
    secondvalue.style.color = "#f1c40f"
    operation = "+"
})

substract.addEventListener("click", function(){
    operator.textContent  = "-"
    header.style.background = "#5499C7"
    button.style.background = "#5499C7"
    operatorcolor.style.color = "#5499C7"
    firstvalue.style.color = "#5499C7"
    secondvalue.style.color = "#5499C7"
    operation = "-";
})

divide.addEventListener("click", function(){
    operator.textContent  = "/"
    header.style.background = "#C0392B"
    button.style.background = "#C0392B"
    operatorcolor.style.color = "#C0392B"
    firstvalue.style.color = "#C0392B"
    secondvalue.style.color = "#C0392B"
    operation = "/";
})
multipication.addEventListener("click", function(){
    operator.textContent  = "*"
    header.style.background = "#16A085"
    button.style.background = "#16A085"
    operatorcolor.style.color = "#16A085"
    firstvalue.style.color = "#16A085"
    secondvalue.style.color = "#16A085"
    operation = "*";
})
//<<-------------------------------------------------------->>

//<<--------main function of all kind of calculation------------->>

button.addEventListener("click", function(e){
    e.preventDefault;

    let result
    num1 = Number(firstvalue.value)
    num2 = Number(secondvalue.value)


    if(operation == "+"){
        result = num1 + num2
    }
    if(operation == "-"){
        result = num1 - num2
    }
    if(operation == "/"){
        result = num1 / num2
    }
    if(operation == "*"){
        result = num1 * num2
    }
    answer.textContent = result.toFixed(2)
})

//<<-------------------------------------------------->>
