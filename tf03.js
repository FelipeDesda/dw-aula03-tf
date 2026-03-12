console.log("===== TF - AULA 03 =====\n");

const aluno = {
    nome: "Felipe",
    idade: 21,
    curso: "Desenvolvimento Web",
    habilidades: ["JavaScript", "Node.js", "SQL"]
};

console.log("Objeto criado:");
console.log(aluno);
console.log("\n");

console.log("===== Iteração nas propriedades do objeto (for...in) =====");

for (let propriedade in aluno) {
    console.log(propriedade + ": " + aluno[propriedade]);
}

console.log("\n");


console.log("===== Iteração no array habilidades (for...of) =====");

for (let habilidade of aluno.habilidades) {
    console.log("Habilidade:", habilidade);
}

console.log("\n");


console.log("===== Comparação entre objetos =====");

const aluno2 = aluno;

console.log("aluno === aluno2 ?", aluno === aluno2);

console.log("\n");


console.log("===== Cópia por referência =====");

const copiaReferencia = aluno;

copiaReferencia.nome = "Carlos";

console.log("Objeto original após alteração na cópia:");
console.log(aluno);

console.log("\n");


console.log("===== Cópia com Spread Operator =====");

const copiaIndependente = { ...aluno };

copiaIndependente.nome = "Ana";

console.log("Objeto original:");
console.log(aluno);

console.log("Objeto copiado com spread:");
console.log(copiaIndependente);

console.log("\n");


console.log("===== Conversão para JSON =====");

const jsonAluno = JSON.stringify(aluno);

console.log("Objeto em JSON:");
console.log(jsonAluno);