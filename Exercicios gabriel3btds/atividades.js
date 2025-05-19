function adicionarfinal(){
    let arraynomefinal = [];
    arraynomefinal.push('joão');
    console.log(arraynomefinal);
    arraynomefinal.push('carlos');
    console.log(arraynomefinal); 
}
adicionarfinal();

function adicionalinicio(){
    let arrayaddcomeco = [];
    arrayaddcomeco.unshift (1);
    arrayaddcomeco.unshift (2);
    console.log(arrayaddcomeco);
}
adicionalinicio();

function removerultimo(){
    let arraydeleteultimo =[];
    arraydeleteultimo.push("pao");
    arraydeleteultimo.push(1);
    arraydeleteultimo.pop();
    console.log(arraydeleteultimo);
}
removerultimo();

function removerprimeiro(){
    let arraydeleteprimeiro = [];
    arraydeleteprimeiro.push(1);
    arraydeleteprimeiro.push("chocolate");
    arraydeleteprimeiro.shift();
    console.log(arraydeleteprimeiro);
}
removerprimeiro();

function modificararray(){
    let modificararray = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
    modificararray.splice(2 , 2, 5 , 6)
    console.log(modificararray);
}
modificararray();




function criarMatrizSomaIndices() {
    let matriz = [];
    for (let i = 0; i < 3; i++) { 
        let linha = [];
        for (let j = 0; j < 3; j++) { 
            linha.push(i + j);
        }
        matriz.push(linha);
    }
    return matriz;
}


function printarMatriz(matriz) {
    console.log("Matriz 3x3 com soma de índices:");
    for (let linha of matriz) {
        let linhaFormatada = "";
        for (let valor of linha) {
            linhaFormatada += `${valor}`.padStart(3, ' ') + ""
        }
        console.log(linhaFormatada);
    }
}


const matriz = criarMatrizSomaIndices();


printarMatriz(matriz);


const temperaturas = [
    // Dia 1 (6 horários)
    [22.5, 23.0, 25.2, 28.1, 27.8, 24.3],
    // Dia 2 (6 horários)
    [21.8, 22.3, 26.0, 29.2, 28.5, 23.7]
];

function consultarTemperatura(dia, hora) {
    // Verifica se os índices são válidos
    if (dia < 0 || dia > 1 || hora < 0 || hora > 5) {
        return "Índices inválidos. Use dia: 0-1 e hora: 0-5";
    }
    
    return temperaturas[dia][hora];
}

console.log("Temperatura no Dia 1, Horário 3:", consultarTemperatura(0, 3)); 
console.log("Temperatura no Dia 2, Horário 0:", consultarTemperatura(1, 0));