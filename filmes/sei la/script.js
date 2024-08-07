const data = {
    generos: ["Ficção", "Comédia", "Terror"],
    plataformas: {
        "Ficção": ["Netflix", "Amazon Prime"],
        "Comédia": ["Disney+", "Telecine"],
        "Suspense": ["HBO+", "Apple TV"]
    },
    filmes: {
        "Netflix": ["Sharkboy & Lavagirl", "A Pedra Mágica"],
        "Amazon Prime": ["A Fantastica Fábrica de Chocolate", "Planeta dos Macacos"],
        "Disney+": ["Liv and Maddie", "Jessie"],
        "Telecine": ["Shrek 1", "Shrek 2"],
        "HBO+": ["Hereditário", "O Chamado"],
        "Apple TV": ["Invocação do Mal", "A Hora do Pesadelo"],
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const generoSelect = document.getElementById("genero");
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");

    // Preencher o seletor de gêneros
    data.generos.forEach(genero => {
        let option = document.createElement("option");
        option.value = genero;
        option.textContent = genero;
    });
});

function atualizarPlataformas() {
    const generoSelect = document.getElementById("genero");
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");

    // Limpar plataformas e filmes
    plataformaSelect.innerHTML = '<option value="">Selecione...</option>';
    filmeSelect.innerHTML = '<option value="">Selecione...</option>';
    filmeSelect.disabled = true;

    if (generoSelect.value === ) {
        plataformaSelect.disabled = true;
        return;
    }

    plataformaSelect.disabled = false;

    // Preencher plataformas
    const plataformas = data.plataformas[generoSelect.value];
    plataformas.forEach(plataforma => {
        let option = document.createElement("option");
        option.value = plataforma;
        option.textContent = plataforma;
        plataformaSelect.appendChild(option);
    });
}

function atualizarFilmes() {
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");

    // Limpar filmes
    filmeSelect.innerHTML = '<option value="">Selecione...</option>';

    if (plataformaSelect.value === "") {
        filmeSelect.disabled = true;
        return;
    }

    filmeSelect.disabled = false;

    // Preencher filmes
    const filmes = data.filmes[plataformaSelect.value];
    filmes.forEach(filme => { 
        let option = document.createElement("option");
        option.value = filme;
        option.textContent = filme;
        filmeSelect.appendChild(option);
    });
}