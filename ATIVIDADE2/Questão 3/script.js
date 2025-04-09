fetch('../livros.xml')
  .then(response => response.text())
  .then(xmlStr => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlStr, "application/xml");
    const livro = xml.getElementsByTagName('livro')[0];

    const id = livro.getAttribute('id');
    const titulo = livro.getElementsByTagName('titulo')[0].textContent;
    const autor = livro.getElementsByTagName('autor')[0].textContent;
    const ano = livro.getElementsByTagName('ano')[0].textContent;

    const container = document.getElementById('livro_especifico');
    container.innerHTML = `
      <p><strong>ID:</strong> ${id}</p>
      <p><strong>Título:</strong> ${titulo}</p>
      <p><strong>Autor:</strong> ${autor}</p>
      <p><strong>Ano:</strong> ${ano}</p>
    `;
  });