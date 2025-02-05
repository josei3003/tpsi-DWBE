/*var p1 = 12
var p2 = 14
var freq = 10

var notaF = p1 * 0.3 + p2 * 0.4 + freq * 0.3;

console.log("a nota final e: " + notaF);

if (nota_final >= 9.5) {
    console.log("Aprovado");
}
else
    console.log("Reprovado");*/

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

function mes(numeroMes){
    switch(numeroMes){
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