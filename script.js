document.getElementById("btn-print").addEventListener(
    "click", () => (window.print())
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
