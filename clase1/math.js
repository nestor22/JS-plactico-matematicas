console.group('cuadrado')
const ladoCuadrado = 5;
const perimetro = ladoCuadrado * 4;


const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetro,
    areaCuadrado
});
function imprimirCuadrado(lado){
    return{
        lado: lado,
        perimetro: lado * 4,
        area: lado * lado 
    }
}
console.groupEnd();


const ladoTriangulo1 = 5;
const ladoTriangulo2 = 6;
const baseTriangulo = 6;
const altura = 5.5;

function calcularPerimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
}


const areaTriangulo = (baseTriangulo * altura ) / 2;

console.log({altura, perimetroTriangulo, areaTriangulo});


