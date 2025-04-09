fetch('../livros.xml')
  .then(response => response.text())
  .then(xmlStr => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlStr, "application/xml");

    const livros = xml.getElementsByTagName('livro');
    const container = document.getElementById('ids');

    for (let i = 0; i < livros.length; i++) {
      const idAttr = livros[i].getAttributeNode('id');
      const p = document.createElement('p');
      p.textContent = `ID: ${idAttr.nodeValue}`;
      container.appendChild(p);
    }
  });
