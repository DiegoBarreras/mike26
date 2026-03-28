let num1 = 0;
let num2 = 0;

function calc() {
    num1 = Number(document.getElementById('num1').value);
    num2 = Number(document.getElementById('num2').value);

    function imc() {
        return num1 / (num2 ** 2);
    }

    function grado() {
        let valor = imc();
        if (valor < 18.5) return "Bajo peso";
        else if (valor < 25) return "Peso normal";
        else if (valor < 30) return "Sobrepeso";
        else if (valor < 35) return "Obesidad grado 1";
        else if (valor < 40) return "Obesidad grado 2";
        else return "Obesidad grado 3";
    }

    document.write(`IMC: ${imc().toFixed(2)} <br>`);
    document.write(`Grado: ${grado()} <br>`);
}
