// Promise withResolvers


//Como é
const promessaTeste = new Promise ((resolve, reject) =>{
    // a gente usa esses métodos
} )

// No meio de uma chamada de API
const { promise, resolve, reject } = Promise.withResolvers();

promise
.then((value) => {
    console.log('Promessa executada com sucesso!' + value);
})
.catch((error)=> {
    console.log(error, "Promessa falhou!");
})

resolve("Deu certo!");

// Métodos de array
// Permanência do array original, não modificam o array original.
const numeros = [3,2,1]

// toSorted
const numerosOrdenados = numeros.toSorted();

console.log(numeros, numerosOrdenados);


// toSpliced = splice

const lista = [1,2,3,4,5]

const listaModificada = lista.toSpliced(1,2, "A", "B");

console.log(lista, listaModificada);

// toReversed

const listaInvertida = lista.toReversed();

console.log(listaInvertida);

// groupBy = agrupar dados de array de objetos

const pessoa = [
    {nome: "Fernando", idade: 34},
    {nome: "Marcelo", idade: 35},
    {nome: "Daniel", idade: 40},
    {nome: "Rafaela", idade: 35},
]

const agruparPessoasPorIdade = Object.groupBy(pessoa, (pessoa) => pessoa.idade);
console.log(agruparPessoasPorIdade);

// Temporal => API para datas

const dataHoje = Temporal.Now.plainDateISO();

console.log(dataHoje.toString());

const dataHoraFuso = Temporal.Now.zonedDateTimeISO("America/Sao_paulo");

console.log(dataHoraFuso.toString());

const dataNatal = Temporal.PlainDate.from({year: 2024, month: 12, day: 25});
const diasParaONatal = dataHoje.until(dataNatal).days

console.log(diasParaONatal);

// Set métodos => união, intersecção, diferença

const setA = new Set([1,2,3,5,6])
const setB = new Set([3,4,5])

const uniao = setA.union(setB)

console.log(uniao);

console.log(setA.difference(setB));
console.log(setB.difference(setA));

console.log(setA.intersection(setB))


// import nativo

import config from './config.json' assert { type: 'json'};

console.log(config.servidor);
console.log(config.maxConexoes);