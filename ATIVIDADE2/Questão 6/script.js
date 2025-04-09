fetch('../livros.xml')
  .then(response => response.text())
  .then(xmlStr => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlStr, "application/xml");

    const autor = xml.getElementsByTagName('autor')[1];
    const livro = autor.parentNode;
    const titulo = livro.getElementsByTagName('titulo')[0].textContent;

    document.getElementById('navegacao').textContent = `Título: ${titulo}`;
  });
