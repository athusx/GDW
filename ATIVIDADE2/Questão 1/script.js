fetch('../livros.xml')
  .then(response => response.text())
  .then(xmlStr => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlStr, "application/xml");

    const titulos = xml.getElementsByTagName('titulo');
    const container = document.getElementById('titulos');

    for (let i = 0; i < titulos.length; i++) {
      const p = document.createElement('p');
      p.textContent = titulos[i].textContent;
      container.appendChild(p);
    }
  })
  .catch(error => {
    console.error("Erro ao carregar o XML:", error);
  });
