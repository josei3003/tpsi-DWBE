/*var p1 = 12
var p2 = 14
var freq = 10

var notaF = p1 * 0.3 + p2 * 0.4 + freq * 0.3;

console.log("a nota final e: " + notaF);

if (nota_final >= 9.5) {
    console.log("Aprovado");
}
else
    console.log("Reprovado");

function calculateGrade(p1, p2, freq) {


    var p1 = 12
    var p2 = 14
    var freq = 10

    var notaF = p1 * 0.3 + p2 * 0.4 + freq * 0.3;

    console.log("a nota final e: " + notaF);

    if (notaF >= 9.5) {
        console.log("Aprovado");
    }
    else
        console.log("Reprovado");


}

calculateGrade(12,19,18);
calculateGrade(11,12,14);
calculateGrade(9,10,7);

function mes(numeroMes) {
    switch (numeroMes) {
        case 1:
            console.log("janeiro");
            break;
        case 2:
            console.log("fevereiro");
            break;
        case 3:
            console.log("março");
            break;
        case 4:
            console.log("abril");
            break;
        case 5:
            console.log("maio");
            break;
        case 6:
            console.log("junho");
            break;
        case 7:
            console.log("julho");
            break;
        case 8:
            console.log("agosto");
            break;
        case 9:
            console.log("setembro");
            break;
        case 10:
            console.log("outubro");
            break;
        case 11:
            console.log("novembro");
            break;
        case 12:
            console.log("dezembro");
            break;
        default:
            console.log("Número de mês inválido");
    }
    return numeroMes;

}

mes(1);
mes(4);
mes(7);

function suma(x,y) {
    var z = x + y;
    return z;
}
console.log(suma(1+4));*/


function calculate(val1, val2, op) {
    if (op == "+")
        return val1 + val2;
    else if (op == "-")
        return val1 - val2;
    else if (op == "*")
        return val1 * val2;
    else if (op == "/")
        return val1 / val2;
    else
        return "error";
}

console.log(calculate(2, 3, "/"));


function imprimir() {
    for (var i = 0; i < 20; i += 5) {
        console.log(i)
    }
}
imprimir(20)

function suma_int(num) {
    var res = 0;
    for (var i = 0; i <= num; i++)
        res += i;
    return res;
}

console.log(suma_int(8))

function factorial(num1) {
    var res = 1;
    for (var i = 1; i <= num1; i++)
        res = res * i;
    console.log(res);
    return res;
}

factorial(5);




var array = [5, 3, 5, 10];
function min(array) {
    index = 0
    var m = array[0];
    while (index < array.length) {
        if (array[index] < m)
            m = array[index];
        index++
    }
    return m;


}
console.log(min(array));

function max(array) {
    var m = array[0];
    for (let index = 1; index < array.length; index++) {
        if (array[index] > m) {
            m = array[index];
        }
    }
    return m;
}

var array = [5, 3, 5, 10];
console.log(max(array)); 

var array = [5, 3, 5, 10];
function med(array) {
    var res = 0;
    for (let index = 0; index < array.length; index++) {
        res += array[index];
    }
    return res / array.length;
}
console.log(med(array));