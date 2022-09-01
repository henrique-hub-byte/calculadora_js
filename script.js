var primeiroValor = parseInt(prompt("Digite o primeiro valor")) ;
var segundoValor = parseInt(prompt("Digite o segundo valor"));

var operacao = prompt(("Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma ,4 para subtração")) ;

if(operacao == '/'){
    var resultado = primeiroValor / segundoValor;
    document.write("<h2>" + primeiroValor + '/' + segundoValor + '=' + resultado + "</h2>")   
}

if(operacao == '*'){
    var resultado = primeiroValor * segundoValor;
    document.write("<h2>" + primeiroValor + '*' + segundoValor + '=' + resultado + "</h2>")   
}


if(operacao == '+'){
    var resultado = primeiroValor + segundoValor;
    document.write("<h2>" + primeiroValor + '+'  + segundoValor +  '=' + resultado + "</h2>")   
}


if(operacao == '-'){
    var resultado = primeiroValor - segundoValor;
    document.write("<h2>" + primeiroValor + '-' + segundoValor +  '=' + resultado + "</h2>")   
}
