// Retorna os ingredientes do bolo
function ingredientes() {
    return [
        "4 Cenouras",
        "3 Ovos",
        "3 xícaras de farinha de trigo",
        "3 xícaras de açúcar",
        "1 xícara de óleo",
        "1 colher de fermento em pó",
        "1/2 limão"
    ];
}

// Prepara o bolo
function receita() {
    const ingred = ingredientes();

    let descricao_receita = `
        1. Pique as cenouras em pedaços pequenos e bata no liquidificador até triturar bem.
        2. Adicione o óleo e os ovos ao liquidificador e bata novamente até misturar.
        3. Em um recipiente, misture a farinha de trigo, o açúcar e o fermento em pó.
        4. Despeje a mistura do liquidificador no recipiente com os secos e mexa bem até formar uma massa homogênea.
        5. Finalize adicionando o suco de meio limão e misture novamente.
    `;

    console.log("Ingredientes do bolo:", ingred.join(", "));
    console.log("Modo de Preparo do Bolo:", descricao_receita);

    return "Bolo assado com sucesso!";
}

// Simula o processo de misturar a massa
function misturamassa(ingredientes) {
    console.log("Iniciando a mistura...");
    
    for (let i = 0; i < 2100; i++) {
        // Simulação de tempo
    }
    
    return "Massa pronta para assar!";
}

// Verifica se o bolo está pronto
function verificarBolo(tempoNecessario, tempoPassado) {
    while (tempoPassado < tempoNecessario) {
        console.log(`O bolo ainda não está pronto. Tempo passado: ${tempoPassado} minutos.`);
        tempoPassado += 5;
    }

    console.log(`O bolo está pronto! Tempo total: ${tempoPassado} minutos.`);
    return "Bolo assado!";
}

// Prepara a cobertura
function cobertura() {
    let ingredientesCobertura = [
        "4 colheres (sopa) de achocolatado",
        "2 colheres (sopa) de margarina",
        "2 colheres (sopa) de leite",
        "4 colheres (sopa) de açúcar"
    ];

    console.log("Ingredientes para a cobertura:", ingredientesCobertura.join(", "));

    let descricaoCobertura = `
        1. Em uma panela, coloque o achocolatado, a margarina, o leite e o açúcar.
        2. Leve ao fogo médio e mexa constantemente até que a mistura fique homogênea e comece a engrossar.
        3. Quando atingir uma consistência cremosa, desligue o fogo.
        4. Despeje a cobertura ainda quente sobre o bolo.
    `;

    console.log("Modo de preparo da cobertura:", descricaoCobertura);

    return "Cobertura preparada com sucesso!";
}

// Função para finalizar o bolo com a cobertura
function finalizarBolo() {
    console.log(receita()); // Prepara o bolo
    console.log(misturamassa(ingredientes())); // Mistura a massa
    console.log(verificarBolo(40, 25)); // Verifica se o bolo está pronto
    console.log(cobertura()); // Prepara a cobertura
    console.log("Bolo finalizado! Cobertura aplicada com sucesso!");
}

// Chamando a função para finalizar o bolo
finalizarBolo();
