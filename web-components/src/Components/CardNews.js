class CardNews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    
        // Inicialize com a data atual para teste
        this.postDate = new Date();
        console.log('Data atual:', this.postDate);
        console.log('Tipo de this.postDate:', typeof this.postDate);  // Deve ser 'object'
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        // Criar o contêiner para o user e o autor
        const userAutorContainer = document.createElement("div");
        userAutorContainer.setAttribute("class", "user-autor");

        // Criar o elemento de imagem do usuário
        const userImage = document.createElement("img");
        userImage.src = this.getAttribute("user") || "assets/user.png";
        userImage.alt = "Foto do usuário";

        const autor = document.createElement("span");
        autor.textContent = this.getAttribute("autor") || "Anonymous";

        // Adicionar a imagem do usuário e o nome do autor ao contêiner
        userAutorContainer.appendChild(userImage);
        userAutorContainer.appendChild(autor);

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        // Criar o contêiner de informações de postagem
        const postInfo = document.createElement("div");
        postInfo.setAttribute("class", "post-info");

        // Formatar a data de postagem
        const postDateElement = document.createElement("span");
        postDateElement.textContent = this.formatPostDate();  // Exibir data e hora

        postInfo.appendChild(postDateElement);

        // Adiciona o contêiner do user e autor ao card_left
        cardLeft.appendChild(userAutorContainer);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        cardLeft.appendChild(postInfo); // Adiciona a data de postagem

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

    // Função para formatar a data e hora da postagem
    formatPostDate() {
        const postDate = new Date(this.postDate);
        console.log('Data antes da formatação:', postDate);
    
        // Verificar se a data é válida
        if (isNaN(postDate.getTime())) {
            return "Data inválida";
        }
    
        const options = {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
    
        const formattedDate = postDate.toLocaleDateString('pt-BR', options);
        console.log('Data formatada:', formattedDate);
    
        return formattedDate;
    }
    

 styles(){
    const style = document.createElement("style");  // Cria um elemento de estilo
    style.textContent = `
    .card{
        width: 50%;  /* Define a largura do card */
        box-shadow: 2px 7px 12px 0px #000000;  /* Adiciona sombra ao card */
        border-radius: 10px;
        display: flex;  /* Define layout flexível */
        flex-direction: row;  /* Alinha itens em linha */
        justify-content: space-between;  /* Espaço entre os itens */
        margin: 0 auto;  /* Centraliza o card horizontalmente */
        margin-top: 15px
    }

    .card_left{
    
        display:flex;  /* Define layout flexível no lado esquerdo */
        flex-direction: column;  /* Organiza itens em coluna */
        justify-content: center;  /* Centraliza verticalmente */
        padding-left: 10px;  /* Adiciona padding à esquerda */
        margin-top: 10px
    }

    .user-autor {
        display: flex;  /* Alinha a imagem e o autor lado a lado */
        align-items: center;  /* Centraliza verticalmente */
    }

    .user-autor img {

        background-color: transparent; /* Garante que não haja cor de fundo no CSS */
        width: 20px;  /* Tamanho da imagem do usuário */
        height: 20px;
        margin-right: 10px;  /* Espaçamento entre a imagem e o nome do autor */
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
