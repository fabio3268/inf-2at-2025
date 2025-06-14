// as perguntas e respostas mais frequentes são sobre uma loja que vende ar  e devem ser genéricas
const faqs = [
    {
        question: "Qual a diferença entre ar e vento?",
        answer: "O ar é a mistura de gases que compõem a atmosfera da Terra, enquanto o vento é o movimento do ar causado por diferenças de pressão atmosférica."
    },
    {
        question: "Qual a composição do ar?",
        answer: "O ar é composto por 78% de nitrogênio, 21% de oxigênio, 0,93% de argônio, 0,04% de dióxido de carbono e outros gases em menor quantidade."
    },
    {
        question: "O que é umidade do ar?",
        answer: "A umidade do ar é a quantidade de vapor de água presente na atmosfera. Ela pode ser medida de diversas formas, como umidade relativa, ponto de orvalho e pressão de vapor."
    },
    {
        question: "Qual a importância do ar para os seres vivos?",
        answer: "O ar é essencial para a vida na Terra, pois contém oxigênio, que é utilizado na respiração celular. Além disso, o ar regula a temperatura do planeta e protege a vida dos raios solares."
    },
    {
        question: "O que é poluição do ar?",
        answer: "A poluição do ar é a presença de substâncias nocivas na atmosfera, como gases tóxicos, partículas em suspensão e compostos químicos prejudiciais à saúde humana e ao meio ambiente."
    }
];


const lisFaqs = document.querySelector(".faq-section");

faqs.forEach((element) => {
    //console.log(element.question, element.answer);
    const article = document.createElement("article");
    article.innerHTML = `
        <h2 class="faq-question">${element.question}</h2>
        <p class="faq-answer">${element.answer}</p>
    `;
    //console.log(article);
    lisFaqs.appendChild(article);
});

lisFaqs.addEventListener("click", (element) => {

    if(element.target.tagName === "H2") {
        //console.log("click", element.target.tagName);
        //console.log(element.target.nextElementSibling);
        console.log(element.target.nextElementSibling.style.display);
        //element.target.nextElementSibling.style.display = "block";
        if(element.target.nextElementSibling.style.display === "block") {
            element.target.nextElementSibling.style.display = "none";
        } else {
            element.target.nextElementSibling.style.display = "block";
        }

    }
});