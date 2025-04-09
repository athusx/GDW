fetch('../livros.xml')
  .then(response => response.text())
  .then(xmlStr => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlStr, "application/xml");
    const livros = xml.getElementsByTagName('livro');
    const container = document.getElementById('autores_anos');

    for (let i = 0; i < livros.length; i++) {
      const autor = livros[i].getElementsByTagName('autor')[0].textContent;
      const ano = livros[i].getElementsByTagName('ano')[0].textContent;

      const p = document.createElement('p');
      p.textContent = `Autor: ${autor}, Ano: ${ano}`;
      container.appendChild(p);
    }
  });
