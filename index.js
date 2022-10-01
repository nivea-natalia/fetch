// function execucaoAsincrona() {
//     console.log ("executei o execucaoAsincrona")
// }

// setTimeout(execucaoAsincrona, 1000)

// console.log('a');
// [1,2,3].forEach(function(elementoAtual){
//     console.log(elementoAtual);
// });
// console.log('b');
// [3,2,1].forEach(function(elementoAtual){
//     console.log(elementoAtual);
// });
// console.log('c')


//setInterval(execucaoAsincrona, 1000) nao e interessante usar pq ele trava o sistema 


// tentativa 1
// function executar(response){
//     return response.json();
// }

// function executar2(chuchu){
//     console.log(chuchu);
// }

// let promessa = fetch("https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa");
// console.log(promessa);

// let salsicha = promessa.then(executar);
// console.log(executar);

// salsicha.then(executar2)

function retornoPromessaFetch(resposta){
    let promessaBody = resposta.json();
    return promessaBody;
}

function returnoPromessaBody(body) {
    //document.write("<span>" + body [0].nome + "<span>");
    body.forEach(function (pessoa){
        console.log(pessoa);
        lista.innerHTML = lista.innerHTML + "<li> + pessoa.nome + </li>";
 });       
}

let promessa = fetch('https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa');

promessa.then(retornoPromessaFetch).then(returnoPromessaBody);

