class CardNews extends HTMLElement{
    constructor(){
        super();  // Chama o construtor da classe pai (HTMLElement)
        
        const shadow = this.attachShadow({ mode: "open" });  // Cria o Shadow DOM
        shadow.appendChild(this.build());  // Adiciona a estrutura HTML no Shadow DOM
        shadow.appendChild(this.styles());  // Adiciona estilos no Shadow DOM
    }

    build(){
        const componentRoot = document.createElement("div");  // Cria o contêiner do card
        componentRoot.setAttribute("class", "card");  // Define a classe do contêiner

        const cardLeft = document.createElement("div");  // Cria o contêiner esquerdo
        cardLeft.setAttribute("class", "card_left");  // Define a classe do lado esquerdo
        
        const autor = document.createElement("span");  // Cria o elemento para o autor
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");  // Define o autor

        const linkTitle = document.createElement("a");  // Cria o link do título
        linkTitle.textContent = this.getAttribute("title");  // Define o texto do título
        linkTitle.href = this.getAttribute("link-url");  // Define a URL do título

        const newsContent = document.createElement("p");  // Cria o parágrafo de conteúdo
        newsContent.textContent = this.getAttribute("content");  // Define o texto do conteúdo

        cardLeft.appendChild(autor);  // Adiciona o autor ao card esquerdo
        cardLeft.appendChild(linkTitle);  // Adiciona o título ao card esquerdo
        cardLeft.appendChild(newsContent);  // Adiciona o conteúdo ao card esquerdo

        const cardRight = document.createElement("div");  // Cria o contêiner direito
        cardRight.setAttribute("class", "card_right");  // Define a classe do lado direito

        const newsImage = document.createElement("img");  // Cria o elemento de imagem
        newsImage.src = this.getAttribute("photo") || "assets/foto-default.jpg";  // Define o src da imagem
        newsImage.alt = "Foto da notícia";  // Define o texto alternativo da imagem
        cardRight.appendChild(newsImage);  // Adiciona a imagem ao card direito

        componentRoot.appendChild(cardLeft);  // Adiciona o lado esquerdo ao card
        componentRoot.appendChild(cardRight);  // Adiciona o lado direito ao card

        return componentRoot;  // Retorna o card completo
    }

    styles(){
        const style = document.createElement("style");  // Cria um elemento de estilo
        style.textContent = `
        .card{
            width: 80%;  /* Define a largura do card */
            /* border: 1px solid gray; */  /* borda desativada */
            box-shadow: 2px 7px 12px 0px #000000;  /* Adiciona sombra ao card */
            display:flex;  /* Define layout flexível */
            flex-direction: row;  /* Alinha itens em linha */
            justify-content: space-between;  /* Espaço entre os itens */
        }
    
        .card_left{
            display:flex;  /* Define layout flexível no lado esquerdo */
            flex-direction: column;  /* Organiza itens em coluna */
            justify-content: center;  /* Centraliza verticalmente */
            padding-left: 10px;  /* Adiciona padding à esquerda */
        }
    
        .card_left > a {
            margin-top: 15px;  /* Espaçamento superior no link */
            font-size: 25px;  /* Tamanho da fonte do título */
            color: black;  /* Cor do texto do link */
            text-decoration: none;  /* Remove sublinhado do link */
            font-weight: bold;  /* Define o texto como negrito */
        }
    
        .card_left > span {
            font-weight: 400;  /* Define o peso da fonte do autor */
        }
    
        .card_left > p {
            color:gray;  /* Cor cinza para o conteúdo da notícia */
        }
        `;
    
        return style;  // Retorna o elemento de estilo
    }
    
}

customElements.define("card-news", CardNews);  // Registra o componente 'card-news'
