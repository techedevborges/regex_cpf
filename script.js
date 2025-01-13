const cpfsList = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {
  return elements.map(element => element.innerText);
}

const limparCpf = (cpf) => {
 return cpf.replace(/\D/g, '');
}

const construirCpf = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

const formatarCpfs = (cpf) => {
  return cpf.map(limparCpf).map(construirCpf);
}

const substituirCpfs = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFortamados = formatarCpfs(cpfs);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFortamados[index];
  });
}

substituirCpfs(cpfsList); 