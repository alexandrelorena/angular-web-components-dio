class CardNews extends HTMLElement{
    constructor(){
        super();  // Chama o construtor da classe pai (HTMLElement)
        
        const shadow = this.attachShadow({ mode: "open" });  // Cria o Shadow DOM
        shadow.appendChild(this.build());  // Adiciona a estrutura HTML no Shadow DOM
        shadow.appendChild(this.styles());  // Adiciona estilos no Shadow DOM
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");
    
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");
    
        // Criar o elemento de imagem do usuário
        const userImage = document.createElement("img");
        userImage.src = this.getAttribute("user") || "assets/user-default.jpeg";
        userImage.alt = "Foto do usuário";  // Adiciona um texto alternativo
        userImage.style.width = "50px";  // Define a largura da imagem (ajuste conforme necessário)
        userImage.style.height = "50px";  // Define a altura da imagem
    
        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
    
        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title"); 
        linkTitle.href = this.getAttribute("link-url");
    
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");
    
        // Adiciona a imagem do usuário antes do autor
        cardLeft.appendChild(userImage);
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
    
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");
    
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/foto-default.jpg";
        newsImage.alt = "Foto da notícia";
        cardRight.appendChild(newsImage);
    
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
    
        return componentRoot;
    }
    

    styles(){
        const style = document.createElement("style");  // Cria um elemento de estilo
        style.textContent = `
        .card{
            width: 50%;  /* Define a largura do card */
            /* border: 1px solid gray; */  /* Borda desativada */
            box-shadow: 2px 7px 12px 0px #000000;  /* Adiciona sombra ao card */
            display: flex;  /* Define layout flexível */
            flex-direction: row;  /* Alinha itens em linha */
            justify-content: space-between;  /* Espaço entre os itens */
            margin: 0 auto;  /* Centraliza o card horizontalmente */
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

        .card_right img {
            width: 300px;  /* Define a largura da imagem */
            height: 150px;  /* Mantém a proporção da imagem */
            border-radius: 10px;  /* Arredonda os cantos da imagem */
            box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);  /* Adiciona sombra à imagem */
            margin-right: 5px;  /* Espaçamento à esquerda da imagem */
            margin-top: 5px;  /* Espaçamento superior da imagem */
        }
        `;
    
        return style;  // Retorna o elemento de estilo
    }
    
}

customElements.define("card-news", CardNews);  // Registra o componente 'card-news'
