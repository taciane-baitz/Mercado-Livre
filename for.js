// const texto = document.getElementById("texto"); 
//     const nomes = ["Ananias Ferreira", "Marcia Baitz", "Tauane Baitz", "Talita Baitz", "Steve Junior", "João Gustavo"];
//     const preço = [10, 50, 8 , 8, 4, 4];
//     const imagem = ["Ananias.PNG", "Marcia.PNG", "Tauane.PNG", "Talita.PNG", "Steve.PNG", "Joao.PNG"];

//     for(let i = 0; i < nomes.length; i++){
//       texto.innerHTML += `
//         <div class="caixa">
//           <img class="img" src="${imagem[i]}">
//           <div class="nome">${nomes[i]}</div>
//           <div class="idade">R$ ${preço[i]}</div>
//         </div>`;
//     }

const produtos = [
     {
        titulo: "Banca Tudo e Ursinho Carinhoso",
        preco: "R$ 35",
        imagem: "Ananias.PNG",
        oferta: "OFERTA DO DIA",
        frete: "Chegará grátis amanhã",
          nome:"Ananias Ferreira"
      },

      {
        titulo: "Dona da Razão e Marcinha do Corre",
        preco: "R$ 80",
        imagem: "Marcia.PNG",
        oferta: "OFERTA DO DIA",
        frete: "Chegará grátis amanhã",
          nome:"Marcia Baitz"
      },

      {
        titulo: "Estressa a irmã e Melhor amiga da mãe",
        preco: "R$ 30",
        imagem: "Tauane.PNG",
        oferta: "OFERTA DO DIA",
        frete: "Chegará grátis amanhã",
          nome:"Tauane Baitz"
      }, 

    {
        titulo: "Administração e Namorada do Puxa Saco",
        preco: "R$ 30",
        imagem: "Talita.PNG",
        oferta: "OFERTA DO DIA",
        frete: "Chegará grátis amanhã",
          nome:"Talita Baitz"
      },
      {
        titulo: "Cachareiro e Palmeirense",
        preco: "R$ 19",
        imagem: "Steve.PNG",
        oferta: "OFERTA DO DIA",
        frete: "Chegará grátis amanhã",
          nome:"Steve Junior"
      },
      {
        titulo: " Orelhudo e Puxa Saco da Namorada",
        preco: "R$ 19",
        imagem: "Joao.PNG",
        oferta: "OFERTA DO DIA",
        frete: "Chegará grátis amanhã",
        nome:"João Gustavo"
      }
    ];

    const divProdutos = document.getElementById("produtos1");

    for(let i = 0; i < produtos.length; i++) {
      divProdutos.innerHTML += `
        <div class="produto">
          <img src="Imagens/${produtos[i].imagem}" alt="${produtos[i].titulo}">
          <span class="oferta">${produtos[i].oferta}</span>
          <div class="nome"><h2> ${produtos[i].nome}</h2> </div>
          <div class="titulo">${produtos[i].titulo}</div>
          <div class="preco">${produtos[i].preco}</div>
          <div class="frete"><p class="texto">${produtos[i].frete}</p><img style="width:40px; height:20px; margin-left: 10px"  src="Imagens/full.png"></div>
        </div>
      `;
    }