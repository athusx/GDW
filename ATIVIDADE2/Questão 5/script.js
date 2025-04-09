fetch('../livros.xml')
  .then(response => response.text())
  .then(xmlStr => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlStr, "application/xml");
    const livros = xml.getElementsByTagName('livro');
    const ultimoLivro = livros[livros.length - 1];

    let node = ultimoLivro.lastChild;
    while (node && node.nodeName !== 'ano') {
      node = node.previousSibling;
    }

    const anoTexto = node.firstChild.nodeValue;
    document.getElementById('ultimo_ano').textContent = `Ano: ${anoTexto}`;
  });
