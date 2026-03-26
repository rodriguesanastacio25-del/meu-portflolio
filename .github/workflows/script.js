const projetos = [
  {
    nome: "Portfólio Web",
    descricao: "Site pessoal responsivo desenvolvido com HTML, CSS e JavaScript."
  },
  {
    nome: "Lista de Tarefas",
    descricao: "Aplicação simples para gerenciamento de tarefas."
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
  `;

  container.appendChild(div);
});
