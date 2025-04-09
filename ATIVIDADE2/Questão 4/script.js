fetch('../livros.xml')
  .then(response => response.text())
  .then(xmlStr => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlStr, "application/xml");
    const livro = xml.getElementsByTagName('livro')[0];

    let node = livro.firstChild;
    while (node && node.nodeName !== 'autor') {
      node = node.nextSibling;
    }

    const autorTexto = node.firstChild.nodeValue;
    document.getElementById('primeiro_autor').textContent = `Autor: ${autorTexto}`;
  });
