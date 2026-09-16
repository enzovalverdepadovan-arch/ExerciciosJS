const originalConsoleLog = console.log.bind(console);

console.log = (...args) => {
    const elementoResultado = document.getElementById('resultado');

    if (elementoResultado) {
        elementoResultado.textContent = args
            .map((valor) => {
                if (typeof valor === 'string') {
                    return valor;
                }
                if (valor === null || valor === undefined) {
                    return String(valor);
                }
                return JSON.stringify(valor);
            })
            .join(' ');
    }

    originalConsoleLog(...args);
};

function bissexto() {
    let ano = parseInt(document.getElementById('ano').value);
    let resultado = "";

    if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
        resultado = ano + " é um ano bissexto!";
    } else {
        resultado = ano + " NÃO é um ano bissexto!";
    }

    console.log(resultado);
    localStorage.setItem('resultadoAnalisado', resultado);
}

function entre100e200() {
    let num1 = parseFloat(document.getElementById('num1').value);
    
    localStorage.setItem('num1', num1); 

    if (num1 >= 100 && num1 <= 200) {
        console.log(num1 + " está entre 100 e 200!");
    } else {
        console.log(num1 + " NÃO está entre 100 e 200!");
    }
}

function Votar() {
    let idade = parseInt(document.getElementById('idade').value);
    
    // Salva a idade digitada no localStorage
    localStorage.setItem('idade', idade); 

    if (idade < 16) {
        console.log("Você não tem idade o suficiente para votar ainda!");
    } else if (idade >= 16 && idade < 18) {
        console.log("Você pode votar, mas não é obrigado!");
    } else {
        console.log("Você já é obrigado a votar, seja consciente!");
    }
}

function intervalo(){
    let LimiteMin = parseInt(prompt("Digite o COMEÇO de um intervalo: "));
    let LimiteMax = parseInt(prompt("Digite o FINAL do intervalo"));

    localStorage.setItem('limiteMin', LimiteMin);
    localStorage.setItem('limiteMax', LimiteMax);

    if(LimiteMax < LimiteMin){
        console.log("O Final do intervalor NÃO PODE ser menor que o começo! Tente um numero maior!")
    }
    else{

    let numero = parseInt(prompt("Digite um numero: "));
    localStorage.setItem('numeroIntervalo', numero);

    if(numero >= LimiteMin && numero <= LimiteMax){
        console.log(numero + " esta DENTRO do Ibntervalo de " + LimiteMin + " e " + LimiteMax)
    }
    else{
        console.log(numero + " esta FORA do intervalor de " + LimiteMin + " e " + LimiteMax)
    }
    }
}



function sequencia(){
    let numero = parseInt(document.getElementById('numeroParaVerificar').value);

    let numeroSequencia1 = parseInt(document.getElementById('numeroSequencia1').value);
    let numeroSequencia2 = parseInt(document.getElementById('numeroSequencia2').value);
    let numeroSequencia3 = parseInt(document.getElementById('numeroSequencia3').value);
    let numeroSequencia4 = parseInt(document.getElementById('numeroSequencia4').value);
    let numeroSequencia5 = parseInt(document.getElementById('numeroSequencia5').value);
    let numeroSequencia6 = parseInt(document.getElementById('numeroSequencia6').value);
    let numeroSequencia7 = parseInt(document.getElementById('numeroSequencia7').value);
    let numeroSequencia8 = parseInt(document.getElementById('numeroSequencia8').value);
    let numeroSequencia9 = parseInt(document.getElementById('numeroSequencia9').value);
    let numeroSequencia10 = parseInt(document.getElementById('numeroSequencia10').value);

    localStorage.setItem('numeroParaVerificar', numero);
    localStorage.setItem('numeroSequencia1', numeroSequencia1);
    localStorage.setItem('numeroSequencia2', numeroSequencia2);
    localStorage.setItem('numeroSequencia3', numeroSequencia3);
    localStorage.setItem('numeroSequencia4', numeroSequencia4);
    localStorage.setItem('numeroSequencia5', numeroSequencia5);
    localStorage.setItem('numeroSequencia6', numeroSequencia6);
    localStorage.setItem('numeroSequencia7', numeroSequencia7);
    localStorage.setItem('numeroSequencia8', numeroSequencia8);
    localStorage.setItem('numeroSequencia9', numeroSequencia9);
    localStorage.setItem('numeroSequencia10', numeroSequencia10);

    if(numero == numeroSequencia1 || numero == numeroSequencia2 || numero == numeroSequencia3 || numero == numeroSequencia4 || numero == numeroSequencia5 || numero == numeroSequencia6 || numero == numeroSequencia7 || numero == numeroSequencia8 || numero == numeroSequencia9 || numero == numeroSequencia10){
        console.log("O Numero " + numero + " esta na sequencia!");
    }
    else{
        console.log("O Numero " + numero + " NÃO esta na sequencia!");
    }
}



function triangulo(){
    let aresta1 = parseInt(prompt("Digite o tamanho de uma aresta do triâgulo: "))
    let aresta2 = parseInt(prompt("Digite o tamanho da segunda aresta do triâgulo: "))
    let aresta3 = parseInt(prompt("Digite o tamanho da terceira aresta do triâgulo: "))

    localStorage.setItem('aresta1', aresta1);
    localStorage.setItem('aresta2', aresta2);
    localStorage.setItem('aresta3', aresta3);

    if(aresta1 == aresta2 && aresta1 == aresta3){
        console.log("Por serem arestas iguais, este seria um Triângulo equilátero!");
    }
    else if(aresta1 == aresta2 && aresta1 !=aresta3){
        console.log("Por apenas serem duas arestas iguas, este seria um Trângulo isósceles!")
    }
    else{
        console.log("Por todos os lados serem diferentes, este seria um Triângulo escaleno!")
    }
}



function semana(){
    let dia = parseInt(prompt("Digite um numero de 1 á 7 para saber o dia da semana: "));
    localStorage.setItem('diaSemana', dia);
    switch(dia){
        case 1:
            console.log("O dia da semana é DOMINGO!");
            break;
        case 2:
            console.log("O dia da semana é SEGUNDA!");
            break;
        case 3:
            console.log("O dia da semana é TERÇA!");
            break;
        case 4:
            console.log("O dia da semana é QUARTA!");
            break;
        case 5:
            console.log("O dia da semana é QUINTA!");
            break;
        case 6:
            console.log("O dia da semana é SEXTA!");
            break;
        case 7:
            console.log("O dia da semana é SÁBADO!");
            break;
        default:
            console.log("A semana tem apenas 7 dias, por favor, digite um numero compativel com os dias da semana!");
    }
}


function senha(){
    let senhaReal = prompt("Digite uma senha (numero e letra): ");
    localStorage.setItem('senhaCadastro', senhaReal);
    let confirmar;
    do{
        confirmar = prompt("Confirme a senha antes insirida: ")
        if(confirmar != senhaReal){
            console.log("Senha Incorreta! Tente novamente.")
        }
        
    }while(confirmar != senhaReal);
    
    console.log("Cadastro realizado com sucesso!")

}



function compararhoras(){
    let hora1 = parseInt(prompt("Digite horas do primeiro horário: "));
    let min1 = parseInt(prompt("Digite minutos do primeiro horário: "));

    let hora2 = parseInt(prompt("Digite as horas do segundo horário: "));
    let min2 = parseInt(prompt("Digite os minutos do segundo horário: "));

    if (hora1 > 24 || hora2 > 24 || min1 > 59 || min2 > 59 || hora1 < 0 || hora2 < 0 || min1 < 0 || min2 < 0) {
        console.log("Erro: a hora deve estar entre 0 e 24 e os minutos entre 0 e 59.");
        return;
    }

    localStorage.setItem('hora1', hora1);
    localStorage.setItem('min1', min1);
    localStorage.setItem('hora2', hora2);
    localStorage.setItem('min2', min2);

    let horario1 = (hora1 * 60) + min1;
    let horario2 = (hora2 * 60) + min2;

    if(horario1 > horario2){
        console.log("O horario "+hora1+":"+min1+" é maior que "+hora2+":"+min2);
    }else if(horario2 > horario1){
        console.log("O horario "+hora2+":"+min2+" é maior que "+hora1+":"+min1);
    }
    else{
        console.log("Ambos os horarios são iguais!");
    }
}


function MaioreMenor(){
    num1 = parseInt(prompt("Digite o primerio numero: "));
    num2 = parseInt(prompt("Digite o segundo numero: "));

    localStorage.setItem('num1MaiorMenor', num1);
    localStorage.setItem('num2MaiorMenor', num2);

    if(num1 > num2){
        console.log(num1 + " é maior que " + num2);
    }
    else if(num2 > num1){
        console.log(num2 + " é maior que " + num1);
    }
    else{
        console.log("Os números são iguais!");
    }
}


function media(){
    let nota1 = parseFloat(prompt("Digite sua nota do Primeiro Semestre (exemplo: 5.5): "));
    let nota2 = parseFloat(prompt("Digite sua nota do Segundo Semestre (exemplo: 5.5): "));
    let nota3 = parseFloat(prompt("Digite sua nota do Terceiro Semestre (exemplo: 5.5): "));
    let nota4 = parseFloat(prompt("Digite sua nota do Quarto Semestre (exemplo: 5.5):  "));

    localStorage.setItem('nota1', nota1);
    localStorage.setItem('nota2', nota2);
    localStorage.setItem('nota3', nota3);
    localStorage.setItem('nota4', nota4);

    let media = (nota1 + nota2 + nota3 + nota4) /4;

    if(media >=7){
        console.log("sua media é "+media+" Parabéns! Você Passou de ano!")
    }else if (media >=5){
        console.log("você tirou "+media+" de média, esta de Recuperação!")
    }else{
        console.log("sua media é "+media+". Você esta Reprovado!")
    }
}


function ultrapassar100() {
    let numero = parseInt(document.getElementById('numeroSomar').value);

    if (isNaN(numero)) {
        console.log("Erro: digite apenas números válidos.");
        return;
    }

    let soma = Number(localStorage.getItem('somaAtual')) || 0;
    soma = soma + numero;

    localStorage.setItem('somaAtual', soma);

    if (soma > 100) {
        console.log("A soma ultrapassou 100!");
        console.log("Resultado final: " + soma);
        localStorage.removeItem('somaAtual');
    } else {
        console.log("Soma atual: " + soma);
    }
}


function senhaVálida(){
    let senhaCorreta = 'enzinholindo123';
    let senhaDigitada = document.getElementById('senhaDigitada').value;

    localStorage.setItem('senhaDigitada', senhaDigitada);

    if (senhaDigitada === senhaCorreta) {
        console.log("Acertou! A senha está correta.");
    } else {
        console.log("Errou! Tente novamente.");
    }
}


function Top10MaioreMenor() {
    let numeros = [
        parseInt(document.getElementById('numeroTop1').value),
        parseInt(document.getElementById('numeroTop2').value),
        parseInt(document.getElementById('numeroTop3').value),
        parseInt(document.getElementById('numeroTop4').value),
        parseInt(document.getElementById('numeroTop5').value),
        parseInt(document.getElementById('numeroTop6').value),
        parseInt(document.getElementById('numeroTop7').value),
        parseInt(document.getElementById('numeroTop8').value),
        parseInt(document.getElementById('numeroTop9').value),
        parseInt(document.getElementById('numeroTop10').value)
    ];

    for (let i = 0; i < numeros.length; i++) {
        localStorage.setItem('numeroTop' + (i + 1), numeros[i]);
    }

    if (numeros.some(numero => isNaN(numero))) {
        console.log("Erro: digite apenas números válidos.");
        return;
    }

    let maior = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    console.log("O maior número é: " + maior);
    console.log("O menor número é: " + menor);
}


function ClassificacaoEtaria() {
    let idade = parseInt(prompt("Digite sua idade: "));
    localStorage.setItem('idadeClassificacao', idade);

    if (idade <= 11) {
        console.log("Você é uma criança");
    } else if (idade <= 17) {
        console.log("Você é um adolescente");
    } else if (idade <= 59) {
        console.log("Você é um adulto");
    } else {
        console.log("Você é um idoso");
    }
}


function imc(){
    let altura = parseFloat(prompt("Digite sua altura separando com Ponto (exemplo: 1.80)"));
    let peso = parseFloat(prompt("Digite seu peso separando novamente com Ponto"));

    localStorage.setItem('alturaImc', altura);
    localStorage.setItem('pesoImc', peso);

    // Correção da fórmula: peso dividido pela altura ao quadrado
    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        console.log("Seu IMC é " + imc + ", Você está abaixo do peso!");
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Seu IMC é " + imc + ", você está com peso adequado");
    } else if (imc >= 25 && imc <= 29.9) {
        console.log("Seu IMC é de " + imc + ", você está com Sobrepeso");
    } else if (imc >= 30 && imc <= 34.9) {
        console.log("Seu IMC é de " + imc + ", você está com Obesidade Grau 1");
    } else {
        console.log("Seu IMC é de " + imc + ", você está com Obesidade Severa");
    }
}



function PNZ() {
    let numero = parseFloat(prompt("Digite um número para verificar se é positivo, negativo ou zero: "));
    localStorage.setItem('numeroPNZ', numero);

    if (numero > 0) {
        console.log("O número " + numero + " é POSITIVO!");
    } else if (numero < 0) {
        console.log("O número " + numero + " é NEGATIVO!");
    } else if (numero == 0) {
        console.log("O número digitado é ZERO (Nulo)!");
    } else {
        console.log("Valor inválido! Digite apenas números.");
    }
}



function ParouImpar(){
    num1 = parseInt(prompt("Digite um numero: "));
    localStorage.setItem('numeroParImpar', num1);

    let resultado = num1 % 2

    if(resultado == 0){
        console.log("numero "+num1+" é um numero PAR")
    }else {
        console.log("numero "+num1+" é um numero IMPAR")
    }
}



function MaiorMenorMediaSomaPotencia(){
    num1 = parseInt(prompt("Digite o 1º número:"));
    num2 = parseInt(prompt("Digite o 2º número:"));
    let num3 = parseInt(prompt("Digite o 3º número:"));

    localStorage.setItem('num1MMMSP', num1);
    localStorage.setItem('num2MMMSP', num2);
    localStorage.setItem('num3MMMSP', num3);

    let maior = Math.max(num1, num2, num3);
    let menor = Math.min(num1, num2, num3);
    let soma = num1 + num2 + num3;
    let media = soma / 3;
    let potencia = Math.pow(maior, menor);

    console.log("Maior: " + maior);
    console.log("Menor: " + menor);
    console.log("Soma: " + soma);
    console.log("Média: " + media);
    console.log("Potência (" + maior + " elevado a " + menor + "): " + potencia);
}



function TarifaBusao() {
    let valorTarifa = 5.50;
    let idade = parseInt(prompt("Digite a sua idade:"));
    let ehEstudante = prompt("Você é estudante?(s/n)"); // Pergunta se é estudante (Sim/Não)

    localStorage.setItem('idadeTarifa', idade);
    localStorage.setItem('ehEstudante', ehEstudante);

    if (idade < 6 || idade >= 65) {
        console.log("Tarifa gratuita!");
    } else if (ehEstudante == 's' || ehEstudante == 'S') {
        let tarifaEstudante = valorTarifa / 2;
        console.log("Meia-entrada: R$ " + tarifaEstudante);
    } else {
        console.log("Tarifa inteira: R$ " + valorTarifa);
    }
}
