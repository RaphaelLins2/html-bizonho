document.getElementById("btn-print").addEventListener(
    "click", () => (window.print())
);

//chamando o arquivo JSON
//aqui nos na verdade finjimos que estamos chamando um JSON

//eu ainda nao entendi como chama um JSON :< 




//definindo as variaveis de lingua
let langs = [
    "Olá meu nome é Raphael Lins, faço o ensino médio no senac Mediotec junto ao técnico de informática com previsão ainda no ano de 2025. Gosto muito de mecher com tecnologia em geral, seja programar ou mexer em hardware.",
    "Hello my name is Raphael Lins, currently doing high school together with a technical course in IT at Senac Mediotec, that will end by 2025. I like to mess with tecnology in general, wether it's coding or messing with hardware.",
    "おはよう私の名前はラフアエル・リンスです、今までセナックでは高等学校そしてテクニックルコースをします。私はテクノロジーを使う好きです。"]
let lang = 0
let perfilTxt = document.getElementById("perfilTxt")
//funcionalidade de mudar a lingua do perfil
function mudarLingua(linguas){
    //console.log(lang, " ", linguas[lang])

    // faz um loop onde a lingua varia entre 3 diferentes variáveis
    if (lang <2){
        lang++;
        console.log(lang, " num seletor. a lingua atual é: ", linguas[lang] )
    }else{
        lang = 0;
        console.log("seletor setado para 0")
    }
    perfilTxt.textContent = linguas[lang]

}

//funcionalidade do botão para mudar a lingua que chama a função de mudar lingua
document.getElementById("btn-lang").addEventListener(
    "click", () => {
        mudarLingua(langs, lang)
        console.log("botão clicado")
    }
);


let imagem = document.getElementById("bottom-image");

let dirPath = "./Assets/";

let imagens = [
    "aura.png",
    "chudking.png",
    "yuri.jpeg",
    "FlowersAndMusketeerFG.png",
    "FlyingHogPixelFG.png",
    "HogAndMusketeerJourneyFG.png",
    "JojoMusketeerFG.png",
    "KawaiMusketeersFG.png",
    "MiniPEKKACard.png",
    "PorcoFG.png"    
]

let randomImageSelector = Math.floor(Math.random() * imagens.length);

imagem.src = dirPath + imagens[randomImageSelector];
