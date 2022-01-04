const hablar = () => {

    let text = document.getElementById("text").value;

    speechSynthesis.speak(new SpeechSynthesisUtterance(text));

    console.log(`El narrador acaba de decir: "${text}"`);

}

document.getElementById("leer").addEventListener("click", hablar);
document.addEventListener("keydown", (e) => {

    if (e.key == "Enter") {

        e.preventDefault();
        hablar();

    }

});